const router = require('express').Router();
const Post = require('../modules/post');
const { verifyToken } = require('./verifytoken');

//Create Post
router.post("/user/post", verifyToken, async (req, res) => {
    try {
        let { title, image, video } = req.body;
        let newpost = new Post({
            title, image, video, user: req.user.id
        })
        const post = await newpost.save()
        res.status(200).json(post)
    } catch (error) {
        return res.status(500).json("internal error occured")
    }
})

//upload post by one user
router.get("/get/post/", verifyToken, async (req, res) => {
    try {
        const mypost = await Post.findOne({ user: req.user.id })
        if (!mypost) {
            return res.status(400).json("You dont have any post")
        }
        res.status(200).json(mypost)
    }
    catch (error) {
        res.status(500).json("internal Server error")
    }
})

//update user post
router.put("/update/post/:id", verifyToken, async (req, res) => {
    try {
        console.log(req.params.id)
        let post = await Post.findOne({ _id: req.params.id });
        if (!post) {
            return res.status(400).json("Post does not found")
        };
        post = await Post.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        let updatepost = await post.save();
        res.status(200).json(updatepost);
    }
    catch (error) {
        return res.status(500).json("internal error occured")
    }
})

//like
router.put("/:id/like", verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.like.includes(req.body.user)) {
            if(post.dislike.includes(req.body.user)){
                await post.updateOne({ $pull: { dislike: req.body.user } })
              
            }
            await post.updateOne({ $push: { like: req.body.user } })
            return res.status(200).json("Post has been liked")
        } else {
            await post.updateOne({ $pull: { like: req.body.user } })
            return res.status(200).json("Post has been unlike")
        }
    } catch (error) {
        return res.status(500).json("internal server error")
    }
})

//  Dislike

router.put("/:id/dislike", verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.dislike.includes(req.body.user)) {
            if(post.like.includes(req.body.user)){
                await post.updateOne({ $pull: { like: req.body.user } })
               
            }
            await post.updateOne({ $push: { dislike: req.body.user } })
            return res.status(200).json("Post has been Disliked")
        } else {
            await post.updateOne({ $pull: { dislike: req.body.user } })
            return res.status(200).json("Post has been unlike")
        }
    } catch (error) {
        return res.status(500).json("internal server error")
    }
})

// Comment

router.put("/comment/post", verifyToken, async (req, res) => {
    try {
        const {comment , postid} = req.body;
        const comments = {
            user:req.user.id,
            username:req.user.username,
            comment
        }
        const post = await Post.findById(postid);
        post.comments.push(comments);
        await post.save();
        res.status(200).json(post);

    } catch (error) {
        return res.status(500).json("internal server error")
    }
})

//Delete post 
router.delete("/delete/post/:id" , verifyToken , async(req , res)=>{
      try {
            const post = await Post.findById(req.params.id);
            if(post.user === req.user.id){
                  const deletepost = await Post.findByIdAndDelete(req.params.id);
                  return res.status(200).json("You post has been deleted")
            }else{
                  return res.status(400).json("You are not allow to delete this post")
            }
      } catch (error) {
            return res.status(500).json("Internal server error")
      }
})



module.exports = router;



