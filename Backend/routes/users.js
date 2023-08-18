const router = require('express').Router();
const User = require('../modules/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { verifyToken } = require('./verifytoken');
const JWTSEC = "#2@!@$ndja45883 r7##";


router.post("/create/user",
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('userName').isLength({ min: 5 }),
  body('phonenumber').isLength({ min: 10 }),

  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log('in catch', error)
      return res.status(400).json("some error occured")
    }
    try {

      let user = await User.findOne({ email: req.body.email });
      if (user) {
        console.log(user)
        return res.status(200).json("please login with correct password")
      };

      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt)
      user = await User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: secpass,
        profile: req.body.profile,
        phonenumber: req.body.phonenumber
      })
      const acessToken = jwt.sign({
        id: user._id,
        username: user.userName
      }, JWTSEC);


      await user.save();
      res.status(200).json({ user, acessToken })
    } catch (error) {
      console.log('in catch', error)
      return res.status(400).json('internal error occured')
    }
  })


// login
router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      console.log('in catch', error)
      return res.status(400).json("some error occured")
    }

    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        console.log(user)
        return res.status(400).json("User Doesn't found")
      }

      const Comparepassword = await bcrypt.compare(req.body.password, user.password)
      if (!Comparepassword) {
        return res.status(400).json("password error")
      }
      const acessToken = jwt.sign({
        id: user._id,
        username: user.userName
      }, JWTSEC);
      const { password, ...other } = user._doc
      res.status(200).json({ other, acessToken });
    }
    catch (error) {
      console.log(error)
      res.status(500).json('internal error occured')
    }
  })

//following
router.put("/following/:id", verifyToken, async (req, res) => {
  if (req.params.id !== req.body.user) {
    const user = await User.findById(req.params.id);
    const otheruser = await User.findById(req.body.user);
    
    if (!user.Followers.includes(req.body.user)) {
      await user.updateOne({ $push: { Followers: req.body.user } });
      await otheruser.updateOne({ $push: { following: req.params.id } });
      return res.status(200).json("User has followed");
    } else {
      return res.status(400).json("Your already follow this user")
    }
  } else {
    return res.status(400).json("You can't follow yoursellf")

  }
})

module.exports = router;



