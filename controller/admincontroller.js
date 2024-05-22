const addtaskmodel = require("../model/addtaskmodel");
const adminmodel = require("../model/adminmodel");
const usermodel = require("../model/usermodel");
const storage = require('node-persist');
storage.init( /* options ... */ );

exports.login = async (req,res)=>{
    
    var data = await adminmodel.find({"email":req.body.email});
    
    if(data.length>0){
        if(data[0].password==req.body.password)
        {
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

exports.viewuser = async(req,res)=>{
    var total_user = await usermodel.find().count();
    var all_user = await usermodel.find().select();

    res.status(200).json({
        status:"all user selected",
        total_user,
        all_user
    })
}

exports.addtask = async(req,res) =>{

    var uid= await storage.getItem('id');

    var tasks =  await addtaskmodel.create(req.body);
    // if(tasks.user_id==uid){
        var task = await storage.setItem('task',tasks.task_name)
        res.status(200).json({
            status:"task added",
            tasks
        })
    // }
}

exports.deletetask = async(req,res) =>{

    var del_id = req.params.id;
    var data =  await addtaskmodel.findByIdAndDelete(del_id);

    res.status(200).json({
        status:"task delete",
    })
}

exports.updatetask = async(req,res) =>{

    var update_id = req.params.id;

    var data =  await addtaskmodel.findByIdAndUpdate(update_id, req.body);

    res.status(200).json({
        status:"task update"
    })
}

exports.managetask = async(req,res) =>{

    var manage_id = req.params.id;

    var data =  await addtaskmodel.findByIdAndUpdate(manage_id, req.body);

        res.status(200).json({
            status:"task update"
        })
}
exports.singletask = async(req,res) =>{

    var task_id = req.params.id;
    var data =  await addtaskmodel.findById(task_id).select();

    res.status(200).json({
        status:"single task select",
        data
    })
}

exports.alltask = async(req,res) =>{

    var data =  await addtaskmodel.find().select();

    res.status(200).json({
        status:"all task select",
        data
    })
}


exports.manageuser = async(req,res) =>{

    var user_id = req.params.id;
    var data =  await usermodel.findByIdAndDelete(user_id);

    res.status(200).json({
        status:"user deleted",
    })
}

exports.updateuser = async(req,res) =>{

    var user_id = req.params.id;
    var data =  await usermodel.findByIdAndUpdate(user_id,req.body);

    res.status(200).json({
        status:"user updated",
        data
    })
}

exports.singleuser = async(req,res) =>{

    var user_id = req.params.id;
    var data =  await usermodel.findById(user_id).select();

    res.status(200).json({
        status:"single user select",
        data
    })
}


