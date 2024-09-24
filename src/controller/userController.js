const User = require('../model/User');

const getAllUser = async (req, res) =>{
    try{
        const users = await User.findAll();
        if(users.length>0){
            res.json(users);
        }else{
            res.send("Nothing is here...");
        }
    }
    catch
    {
        res.status(404).send("Something Went wrong....");
    }
}

const getUser = async(req, res) =>{
    try{
        const user = await User.findByPk(req.params.id)
        if(user){
            res.json(user);
        }else{
            res.status(401).send("User doesn't exist...");
        }
    }catch(err){
        res.status(404).send("User not found..." + err);
    }
}

const addUser = async (req, res) =>{
    try{
        const user = await User.create(req.body);
        if (user){
            res.json(user);
        }
        else{
            res.status(400).send("user not create...");
        }
    }
    catch{
        res.status(500).send("Something is fishy...");
    }
}

const updateUser = async(req, res) =>{
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            await user.update(req.body);
            await user.save();
            res.json(user);
        }
        else{
            res.status(500).send("User not found");
            console.log("haha------->",req.params.id);
        }
    }
    catch{
        res.status(500).send("Error...");
    }
}

const deleteUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        if(user){
            user.destroy();
            res.send("User deleted....");
        }else{
            res.status(404).send("User not found ")
        }
    }
    catch{
        res.status(500).send("Internal Server Error....")
    }
}

module.exports = {getAllUser, getUser, addUser, updateUser, deleteUser};