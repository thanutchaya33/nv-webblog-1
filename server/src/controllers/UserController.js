const { default: UserService } = require("../../../client/src/services/UserService");
const {user} = require("../models");

module.exports = {
  //get all user
  async index(req,res){
    //res.send('เรียกข้อมูลผู้ใช้งานทั้งหมด');
    try{
      const users = await user.findAll();
      res.send(users);
    }
    catch(err){
      res.status(500).send({
        error: 'The users information was incorrect'
      });
    }
  },
   async show(req,res){
     try{
       const user = await UserfindByPK(req.params.userId);
       res.send(user);
    }
    catch(err){
      res.status(500).send({
        error: 'The users information was incorrect'
      });
    }
  },
    async create(req,res){
      const user = await User.create(req.body)
      res.send(user.toJSON());
    },
   
    async put(req,res){
      const user = await User.put(req.body)
      res.send(user)
           JSON.stringify(req.body);
    },
    remove(req,res){
      res.send('ทำการลบผู้ใช้งาน' + req.params.userId + ' : '+
           JSON.stringify(req.body));
    }
}
