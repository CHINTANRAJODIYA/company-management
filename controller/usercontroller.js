const usermodel = require("../model/usermodel");
const task = require('../model/addtaskmodel');
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.register = async(req,res)=>{

    var data = await usermodel.create(req.body);
    res.status(200).json({
        status:"data register",
        data
    })
}

exports.login = async (req,res)=>{
    
    var data = await usermodel.find({"email":req.body.email});
    
    var user_id = await storage.getItem('user_id');

    if(data.length>0){
        if(data[0].password==req.body.password)
        {
            await storage.setItem('id',data[0].id);

            res.status(200).json({
                status:"login success"
            })

        }else
        {
            res.status(200).json({
                status:"Check Your Email And Password"
            }) 
        }
    }else
    {
        res.status(200).json({
            status:"Check Your Email And Password"
        })
    }
}

exports.get_task = async (req,res) => {

    var id = await storage.getItem("id");

    var data = await task.find({user_id:id});

    res.status(200).json({
        data
    })

}
