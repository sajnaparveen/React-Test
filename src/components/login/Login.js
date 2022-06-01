// import './Register.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import axios from 'axios';

const Login = ()=>{
 

    const[userName,userNameData]= useState()
    const[password,passwordData]= useState()
  

    const LoginData=()=>{
        console.log(userName)
        console.log(password)
       axios.post("http://192.168.1.8:7000/api/v1/user/loginpage",{userName,password})
       .then((Response)=>{
        console.log(Response)
       }).catch((error)=>{
console.log(error)
       })
     }
    return(
      <section className="form my-4 mx-5">
    <div className="container">
    <div className="row">
        <div className="col-lg-5">
            <img src="https://i.pinimg.com/474x/31/93/84/319384a8e571c74e2ab1ac7ee64d3d76.jpg" className="img-fluid" alt=""/>
        </div>
        <div className="col-lg-7 px-5 pt-5">
             <h4>Sign Up</h4>
             <form >
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="username" placeholder="UserName" name="userName" onChange={(text)=>userNameData(text.target.value)} className="form-control "/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="password" placeholder="*********" onChange={(text)=>passwordData(text.target.value)} className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7" >
                     {/* <text >SignUp</text> */}
                     <button type="button" onClick={LoginData} className="btn1 mt-3 mb-5">Sign Up</button>
                 </div>
                 </div>
                 <a href="#">Forgot password</a>
                 <p> Don't have an account?<a href="#">SignUp Here</a></p>
             </form>
        </div>
    </div>
</div>

      </section> 
    )
}

export default Login