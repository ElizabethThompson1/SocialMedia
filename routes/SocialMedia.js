const {  Comment,  validateComments } = require('../models/SocialMedia')
const express = require("express");
const router = express.Router();

router.get("/:userId",async (req,res) =>{
    try{
        const comments = await Comment.find({userId: req.params.userId});

        if (!comments)
            return res.status(400).send(`There are no comments with video id ${req.params.userId}.`);

        return res.send(comments);

    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/', async (req,res) => {
    try{
        const {error} = validateComments(req.body);

        if (error){
            return res.status(400).send(error);
        }
        

        const comment = new Comment({
            userId: req.body.userId,
            text: req.body.text,
        });
        
         await comment.save();
         return res.send(comment);
    }catch (ex){
        return res.status(500).send(`Internal Server Error:${ex}`);
    }
});
router.put("/:commentId", async (req, res) => {
    try{

        const comment = await Comment.findByIdAndUpdate(
            req.params.commentId,
            {
                ...req.body
            },
            {new: true}
        );
        if(!comment)
            return res.status(400).send(`The comment with id ${req.params.commentId} does not exist`);

        await comment.save();
        return res.send(comment);
        }catch (ex){
            return res.status(500).send(`Internal Server Error: ${ex}`);
        }
});

router.delete("/:id", async (req, res) => {
    try{
        const comment = await Comment.findByIdAndRemove(req.params.id);

        if(!comment)
            return res.status(400).send(`The comment with id" ${req.params.id}"does not exist.`);
        return res.send(comment);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



module.exports = router;
