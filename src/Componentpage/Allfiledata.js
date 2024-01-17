
let Allfiledata = [
    {
        id:1,
       image:"img/v1.png",
       title:"Here are many variati of passages of Lorem"
    },
    {
        id:2,
        image:"img/v2.png",
        title:"Duis aute irure dolor in reprehenderit in."

    },
    {
        id:3,
        image:"img/v3.png",
        title:"Deserunt mollit anim id est laborum."

    },
    {
        id:4,
        image:"img/v4.png",
        title:"Exercitation ullamco laboris nisi ut."


    },
    {
        id:5,
        image:"img/v5.png",
        title:"There are many variations of passages of Lorem"


    },
    {
        id:6,
        image:"img/v6.png",
        title:"Here are many variati of passages of Lorem"


    },
    {
        id:7,
        image:"img/v7.png",
        title:"Duis aute irure dolor in reprehenderit in."


    },
    {
        id:8,
        image:"img/v8.png",
        title:"Deserunt mollit anim id est laborum."


    }
];


export default Allfiledata;



// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';

// export default function Loginpage() {
  
//   let history = useNavigate();
//   let [Validation, setValidationError] =useState('')
//   let [email, setemail] = useState("")
//   let [password, setpassword] = useState("")
 
//   // let[arr, setArr]= useState([])

//   let [arr, setArr] = useState(() => {
//       let localData = localStorage.getItem('userdata');
//       return localData ? JSON.parse(localData) : [];
      
//   });

//   useEffect(() => {
//       localStorage.setItem('userdata', JSON.stringify(arr));
//   }, [arr]);

//   let validate = () => {
//       if (email === '' || email === null) {
//           setValidationError('Please enter email');
//           return false;
//       }
//       if (password === '' || password === null) {
//           setValidationError('Please enter password');
//           return false;
//       }
   
//       setValidationError('');
//       return true;
//   };

//   let formsubmit = () => {
     
//           let data = {
//            email: email,
//               password: password,
//           };
//           setArr([...arr, data]);
//           setemail('');
//           setpassword('');
    
//           let newchkuser = JSON.parse(localStorage.getItem("userdata")) ?? [];

//           if(newchkuser && newchkuser.length){
//               // console.log(newchkuser)
//               let userlogin = newchkuser.filter((items, index) => {
//                       return  items.email === email && items.password === password 
//               })
//                   console.log("success")

//                   if(userlogin.length === 0){
//                       alert("invalid user")
//                       history("/register")
//                   }
//                    else{
//                       console.log("user login successfully")

//                       localStorage.setItem("userlogindata", JSON.stringify(userlogin))
//                        history("/");
//                   }
//                 }
      
//       }
//     return (
//     <>
//       <div>
//         <section className="login-main-wrapper">
//           <div className="container-fluid pl-0 pr-0">
//             <div className="row no-gutters">
//               <div className="col-md-12 p-5 bg-white full-height">
//                 <div className="login-main-left">
//                   <div className="text-center mb-5 login-main-left-header pt-4">
//                     <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
//                     <h5 className="mt-3 mb-3">Login</h5>
//                   </div>
//                   <form action="#">
//                     <div className="form-group">
//                       <label>Email</label>
//                       <input type="email" className="form-control" name='email' placeholder="Enter Email"  value={email} onChange={(e) => setemail(e.target.value)}  />
//                       </div>
//                     <div className="form-group">
//                       <label>Password</label>
//                       <input type="password" className="form-control" name='password' placeholder="Password"  value={password} onChange={(e) => setpassword(e.target.value)}  />
              
//                     </div>
                   
//                     <div className="mt-4">
//                       <div className="row">
//                         <div className="col-12">
//                           <button type="submit" onClick={formsubmit} className="btn btn-outline btn-block btn-lg" style={{ backgroundColor: '#000080', color: 'white', borderRadius: 20 }}>Login</button>
//                         </div>
//                       </div>
//                     </div>

//                   </form>

//                 </div>
//                 <div className="text-center mt-5">
//         <p className="light-gray"><Link to="/forgotpage">Forgot Password</Link></p>
//         <p className="light-gray">Don’t have an account? <Link to="/register">Sign Up</Link></p>
//       </div>
     
//       <Link className="oauth-container btn darken-4 white black-text" to="#"  style={{ position: 'relative', left: 200, marginBottom: 2, marginRight: 4,textTransform: 'none' }} >
//         <div className="left">
//           <img width="30px"  alt="Google sign-in" src="download.jpeg" />Login
//           with Facebook
//         </div>
        
//       </Link> 
//       <Link className="oauth-container btn darken-4 white black-text" to="#" style={{ position: 'relative', left: 200, marginBottom: 2, marginRight: 4,textTransform: 'none' }}>
//         <div className="left">
//           <img width="30px" alt="Google sign-in" src="img/facebook.png" />Login
//           with Facebook
//         </div>
        
//       </Link> 
 
//               </div>
            
//             </div>
//           </div>

//         </section>

      
//       </div>    
    
//     </>
//   )
// }
