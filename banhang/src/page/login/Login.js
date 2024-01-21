import React, { useContext, useState } from 'react'
import './login.css'
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../components/context/context';
const Login = () => {

  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {login} = useContext(ShopContext);

  const[checkemail, setcheckemail] = useState(false);
  const[checkpassword, setcheckpassword] = useState(false);
  const navigate = useNavigate();
  const handeapi = () => {

  axios.post('http://localhost:3000/api/user', {
    email: email,
    matkhau: password
    }).then((res)=>{
     
    //  const user = res.data.find((e)=> e.email === email && e.matkhau === password);
     console.log(res.data.data);

     if(res.status === 200){
      // console.log(user.Hoten);
      login(res.data.data);
      navigate(`/`);
     }
     else {
      console.log("đăng nhập thất bại");
     }
    }).catch((err)=>{
      console.log(err.response);
     

      
    })
  }

  const handelogin = () => {
   if(!email) {
    setcheckemail(true);
   }
   if(!password) {
    setcheckpassword(true);
   }
    
    
  }
  return (
   <div className='backgr'>
        <p>Login Form</p>
        <div className='loginform'> 
            <div className="textlogin">  
            Login
            <LockIcon/> 

            </div>
            <div className='inputs'>
                <input type='text'  value={email} onChange={(e) => {setemail(e.target.value); setcheckemail(false)}} placeholder='Email'/>
                {checkemail ? <span>  Vui lòng nhập email</span> : null} 
                <input value = {password} onChange={(e) => {
                  setpassword(e.target.value); setcheckpassword(false)
                }} type='password' className = 'password' name = 'password' id = 'password' placeholder='Password'/>
                {checkpassword ? <span>  Vui lòng nhập mật khẩu</span> : null} 

                <button onClick={(handelogin, handeapi)}> Đăng nhập</button>
            </div>

        </div>
   </div>
  )
}

export default Login

