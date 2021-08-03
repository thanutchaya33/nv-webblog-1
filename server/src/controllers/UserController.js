const user = require("../models/user");

module.exports = {
  //get all user
  asyncindex(req,res){
    //res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
    try{
      conts users = await user.findAll();
      res.send(users);
    }
    catch(err){
      res.status(500).send({
        error: 'The users information was incorrect'
      });
    }
  },
   show(req,res){
      res.send('ดูข้อมูลผู้ใช้งาน' + req.params.userId);
    },
    create(req,res){
      res.send('ทำการสร้างผู้ใช้งาน ' + JSON.stringify(req.body));
    },
    put(req,res){
      res.send('ทำการแก้ไขผู้ใช้งาน' + req.params.userId + ' : ' +
           JSON.stringify(req.body));
    },
    remove(req,res){
      res.send('ทำการลบผู้ใช้งาน' + req.params.userId + ' : '+
           JSON.stringify(req.body));
    }
}
