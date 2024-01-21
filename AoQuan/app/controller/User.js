const { json } = require("body-parser");
const user = require("../models/user");
const bcrypt = require('bcrypt');
const { log } = require("handlebars");

class UserController {
  async index(req, res) {
    try {
      let {email, matkhau} = req.body;
      console.log(email, matkhau);
    //   console.log(email);
    
      const data = await user.findOne({ email });
      if(data) {
        
        // let ktramk = bcrypt.compareSync(req.body.matkhau, data.matkhau)
            if(matkhau == data.matkhau) {
                res.status(200).json({message: "Đăng nhập thành công",
                data: data
            });
            }
            else {
                res.status(401).json("Sai mật khẩu");
            }
      } 
      else {
        res.status(404).json("Người dùng không tồn tại");

      }
    } catch (error) {
        console.log(error);
      res.status(500).json({message: 'Đã xãy ra lỗi',
                        
    });
      

    }
  }
}

module.exports = new UserController();
