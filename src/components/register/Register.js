// import './Register.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Register.css'
import axios from 'axios';

const Register = ()=>{
 
    // function createPost() {
    //     axios
    //       .post(baseURL, {
    //         userName: "userName",
    //         password: "password",
    //         email:"email",
    //         mobileNumber:"mobileNumber"
    //       })
    //       .then((response) => {
    //         console.log(response)
    //       });
    //   }
    const[userName,userNameData]= useState()
    const[password,passwordData]= useState()
    const[email,emailData]= useState()
    const[mobileNumber,mobileNumberData]= useState()

    const postDatas=()=>{
        console.log(userName)
        console.log(email)
        console.log(mobileNumber)
        console.log(password)
       axios.post("http://192.168.1.8:7000/api/v1/user/signupPage",{userName,password,email,mobileNumber})
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
            <img src="https://i.pinimg.com/474x/31/93/84/319384a8e571c74e2ab1ac7ee64d3d76.jpg"  alt=""/>
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
                     <input type="email" placeholder="Email" name="email" onChange={(text)=>emailData(text.target.value)} className="form-control"/>
                 </div>
                 </div>
                 <div className="from-row">
                 <div className="col-lg-7">
                     <input type="mobileno" placeholder="MobileNo" name="mobileNumber" onChange={(text)=>mobileNumberData(text.target.value)} className="form-control"/>
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
                     <button type="button" onClick={postDatas} className="btn1 mt-3 mb-5">Sign Up</button>
                 </div>
                 </div>
                 <p> Already have an account?<a href="#">Login Here</a></p>
             </form>
        </div>
    </div>
</div>

      </section> 
    )
}

export default Register