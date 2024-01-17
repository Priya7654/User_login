


import React from 'react'
import { useState } from 'react'
import { Link, json } from 'react-router-dom'

export default function Editprofile() {

    let [editvalue, seteditvalue]=useState(
        {
            "username":"",
            "email":"",
            "password":"",
            "confirm_password":"",
            "gender":""
        }
    )
    let handleData = (e) =>{
        seteditvalue({...editvalue,[e.target.name]:e.target.value})
    } 
    let handelsubmit = (e) =>{
        e.preventDefault()

        let userdata =  localStorage.setItem('updateuser', JSON.stringify(editvalue))
        console.log(userdata);

        console.log("daya")
        seteditvalue({
            "username": "",
            "email": "",
            "password": "",
            "confirm_password": "",
            "gender": ""
        });
    }
     return (
    <div >
           <div id="myModal1" > 
           <div className="modal-dialog">
                   <div className="modal-content">
                        <div className="modal-header">
                               <h4 className="modal-title">Updata Profile</h4>
                        </div>
                        <div className="modal-body">
                            <form >
                            <div className="mb-3 mt-3">
                                    <label htmlFor="email">Name:</label>
                                    <input type="email" className="form-control" placeholder="Enter Name" id='username' name="username" value={editvalue.username}  onChange={handleData}  />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" placeholder="Enter email" id='email' name="email" value={editvalue.email} onChange={handleData}  />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control"  placeholder="Enter password" id='password' name="password" value={editvalue.password} onChange={handleData} />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="email">Confirm Password:</label>
                                    <input type="email" className="form-control" placeholder="Enter confirm password" id='confirm_password' name="confirm_password" value={editvalue.confirm_password} onChange={handleData}   />
                                </div>
                                <div className="mb-3 ">
                                    <label htmlFor="email">Gender:</label><br/>
                                    <input type="radio" name="gender" value="male" onChange={handleData} /> <label>Male</label>
                                                <br />
                                                <input type="radio" name="gender" value="female" onChange={handleData} /> <label>Female</label>
                                          </div>
                                  
                                          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="check" defaultValue="something" defaultChecked />
  <label className="form-check-label">Are you ready to update your profile page ? if you want to <br/> please check the button </label>
</div>
                             </form>
                           

                        </div>
                        <div className="modal-footer">
                        <Link type="button" className="btn btn-default" to="/setting"  data-dismiss="modal">Cansel</Link>
                        <button type="button" className="btn btn-default" to="/" onClick={handelsubmit} data-dismiss="modal">Add</button>
                      
                        </div>

                    </div>
                </div>
            </div>
     </div>
 
  )
}

// import React, { useEffect } from 'react'
// import { useState } from 'react'
// export default function Editprofile() {

//     let [email, setemail] = useState("")
//     let [password, setpassword] = useState("")
//     let [storindex, setstorindex] = useState("")

//     let [arr, setArr] = useState(() => {
//         let localdata = localStorage.getItem("userdata")
//         if (localdata != null) {
//             return JSON.parse(localdata)
//         } else {
//             return []
//         }
//     });


//     useEffect(() => {
//         localStorage.setItem("userdata", JSON.stringify(arr))
//     }, [arr,email,password,storindex]);

//     // let formsubmit = () => {
//     //     let data = {
//     //         email: email,
//     //         password: password,
//     //     };

//     //     setArr([...arr, data]);

//     //     setemail("");
//     //     setpassword("");
//     // };

    
//     let edit = (editindex) => {
//         setstorindex(editindex)

//         console.log(editindex)
//         let newarrr = arr.filter((item, index) => {
//             return index == editindex
//         })
//         console.log(newarrr)
//         setemail(newarrr[0].email)
//         setpassword(newarrr[0].password)
//     }

//     let updateformsubmit = (event) => {
//         event.preventDefault()
//         arr[storindex].email = email
//         arr[storindex].password = password
//         console.log(arr)
//        // setArr(arr)
//         localStorage.setItem("userdata",JSON.stringify(arr))
//         //  window.location.reload()
//         setemail("");
//         setpassword("");
//     }
//     return (
//         <>
//             <div className='App'>
//                 <h3>User Form</h3>
//             </div>
//             <div className="container-fluid">
//                 <div className='row justify-content-center'>
//                     <div className='col-lg-7 mt-1 shadow p-3'>

//                         <form >
//                             <div className="mb-3 mt-3">
//                                 <label htmlFor="email">Email:</label>
//                                 <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" onChange={(e) => setemail(e.target.value)} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="pwd">Password:</label>
//                                 <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={(e) => setpassword(e.target.value)} />
//                             </div>

//                             <button type="submit" onClick={formsubmit} className="btn btn-primary">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <div className='row justify-content-center mt-5' >
//                 {

//                     arr.map((elem, index) => {
//                         return (
//                             <>
//                                 <div className="col-lg-4">
//                                     <div className="col-md">
//                                         <div className="card" style={{ width: '20rem' }}>
//                                             <div className='card-header'>
//                                                 {index}
//                                             </div>
//                                             <div className="card-body">
//                                                 <h5> {elem.email}</h5>
//                                                 <h5> {elem.password}</h5>

//                                                 <button type="button" className="btn btn-primary mx-2" data-toggle="modal" data-target="#myModal" onClick={() => edit(index)} >Edit</button>

//                                                 <button type='button' className="btn btn-danger mx-2" onClick={() => clear(index)}>Delete</button>
//                                             </div>
//                                         </div>

//                                     </div>

//                                 </div>

//                             </>
//                         )
//                     })
//                 }
//             </div>
          
//             <div id="myModal" className="modal fade" role="dialog">
//                 <div className="modal-dialog">
//                     {/* Modal content*/}
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <button type="button" className="close" data-dismiss="modal">×</button>
//                             <h4 className="modal-title">updata form</h4>
//                         </div>
//                         <div className="modal-body">
//                             <form >
//                                 <div className="mb-3 mt-3">
//                                     <label htmlFor="email">Email:</label>
//                                     <input type="email" className="form-control" id="email" value={email} placeholder="Enter email" name="email" onChange={(e) => setemail(e.target.value)} />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="pwd">Password:</label>
//                                     <input type="password" className="form-control" id="pwd" value={password} placeholder="Enter password" name="password" onChange={(e) => setpassword(e.target.value)} />
//                                 </div>

//                                 <button type="submit" onClick={updateformsubmit} data-dismiss="modal" className="btn btn-primary">update</button>
//                             </form>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
