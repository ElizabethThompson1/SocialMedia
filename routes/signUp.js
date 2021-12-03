const {  SignUp,  validateSignUp, } = require('../models/SignUpSchema')
const express = require("express");
const router = express.Router();

router.get("/:signUp",async (req,res) =>{
    try{
        const user = await user.find({userId: req.params.signUp});

        if (!user)
            return res.status(400).send(`There are no comments with user id ${req.params.signUp}.`);

        return res.send(user);

    }catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});

router.post('/', async (req,res) => {
    try{
        const {error} = validateUser(req.body);

        if (error){
            return res.status(400).send(error);
        }
        

        const User = new User({
            userId: req.body.userId,
            text: req.body.text,
        });
        
         await User.save();
         return res.send(User);
    }catch (ex){
        return res.status(500).send(`Internal Server Error:${ex}`);
    }
});
router.put("/:userId", async (req, res) => {
    try{

        const user = await User.findByIdAndUpdate(
            req.params.userId,
            {
                ...req.body
            },
            {new: true}
        );
        if(!user)
            return res.status(400).send(`The user with id ${req.params.userId} does not exist`);

        await user.save();
        return res.send(user);
        }catch (ex){
            return res.status(500).send(`Internal Server Error: ${ex}`);
        }
});

router.delete("/:id", async (req, res) => {
    try{
        const user = await User.findByIdAndRemove(req.params.id);

        if(!user)
            return res.status(400).send(`The user with id" ${req.params.id}"does not exist.`);
        return res.send(user);
    } catch (ex) {
        return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});



module.exports = router;
