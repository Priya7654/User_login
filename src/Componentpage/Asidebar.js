import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { Link } from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { GrChannel } from "react-icons/gr";
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4, MdVideoCameraFront } from "react-icons/md";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { useState } from 'react';
export default function Asidebar() {
 

  const [search, setsearch] = useState('');
  const [searchdata, setsearchdata] = useState([]);
  let [selectitem, setselecctitem] = useState(-1)
  
    
       
        const  handlechange = (e)=>{
          setsearch(e.target.value)
        }
        useEffect(()=>{
          if(search !== ""){
            axios.get(`http://103.104.74.215:3003/api/search?term=${search}`)
            .then((res) =>{
              let searchfilter=res.data.data
              setsearchdata(res.data.data)
              localStorage.setItem("searchdata", JSON.stringify(searchfilter))
              // console.log(res.data.data)
              let valuefilter = searchfilter.filter((book) =>{
                return book.video_name.includes(search)
              })
              console.log(valuefilter)
              setsearchdata(valuefilter)
            })
      
          }
          else{
            setsearchdata([])
          }

        },[search])
        const handleclose =() =>{
          setsearch("")
          setsearchdata([])
          setselecctitem(-1)
        }
         const handlekeydown = e =>{
          if(selectitem < searchdata.length){
            console.log(e.key)
            if(e.key === "ArrowUp" && selectitem >0){
              setselecctitem(prev => prev-1)
            }
            else if( e.key === "ArrowDown" && selectitem < searchdata.length-1){
              setselecctitem(prev => prev+1)
            }
            else if( e.key === "Enter" && selectitem >=0 ){
              window.open(searchdata[selectitem])
            }
          }
          else{
            setselecctitem(-1)
          }
           
         }

  return (
    <>
      {/* <Navbar/> */}
      <nav className="navbar navbar-expand navbar-light bg-white  static-top osahan-nav sticky-top">

        <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0"  data-bs-toggle="collapse" data-bs-target="sidebarToggle" id="sidebarToggle" >
          <i className="fas fa-bars" />
        </button>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button> */}
        <Link className="navbar-brand mr-1" to="index.html"><img className="img-fluid" alt src="img/logo.png" /></Link>

        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
          <div className="input-group">
          <input
                    type='text'
                    className="form-control"
                    // className='search_input'
                    onChange={handlechange}
                    placeholder='Search...'
                    autoComplete='off'
                    value={search}
                    onKeyDown={handlekeydown}
                /> 
               <div className="input-group-append">
             <button className="btn btn-light" type="button" >
             {
                  search === "" ?   (<FaSearch  className='mx-2' /> ):(
                    <MdOutlineClose  onClick={handleclose}/>
            
                  )
             
                }
               </button>
            
            </div>
            <div className='search_result'>
         
         {
           searchdata.slice(0,5).map((item, index)=>{
             return(
               <Link to='/searchvideo' key={index} target='_blank' className= {selectitem === index ? 'search_suggestion_line active': 'search_suggestion_line'}>
                 <p>{item.video_name}</p>
             </Link>
             )
          })}
           
         </div>
          
          </div>
        
        </form>

  


        <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
          <li className="nav-item mx-1">
            <Link className="nav-link" to="/uploadpage">
              <i className="fas fa-plus-circle fa-fw" />
              Upload Video
            </Link>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-bs-toggle="dropdown">
              <i className="fas fa-bell fa-fw" />
              <span className="badge badge-danger">9+</span>
            </Link>
          
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
              <Link className="dropdown-item" to="/"><i className="fas fa-fw fa-edit " />  Action</Link>
              <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-headphones-alt " />  Another action</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="#"><i className="fas fa-fw fa-star " />  Something else here</Link>
            </div>

          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            {/* <Link to="/">
  <i class="fas fa-video-plus"></i>
  </Link> */}
            <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-bs-toggle="dropdown" >
              <i class="fas fa-video"></i>
              {/* <span className="badge badge-success">7</span> */}
            </Link>
            <div className="dropdown-menu dropdown-menu-right" >
              <Link className="dropdown-item" to="/music"><i className="fas  fa-music " />   Upload a Music</Link>
              <Link to="/videoapidata" className="dropdown-item"><i className="fas fa-video"></i> Upload a Video</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/golive"><i className="fas  fa-podcast " /> Go Live </Link>
            </div>
          </li>
          <li className="nav-item dropdown no-arrow mx-1">
            {/* <Link to="/">
  <i class="fas fa-video-plus"></i>
  </Link> */}
            <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-bs-toggle="dropdown" >
            <span>Pages</span>            </Link>
            <div className="dropdown-menu dropdown-menu-right" >
              <Link className="dropdown-item" to="/login">   Sign In</Link>
              <Link to="/" className="dropdown-item"> Sign up</Link>
              <Link className="dropdown-item" to="/forgot"> Forgot Password</Link>
              <div className="dropdown-divider" />
              <Link className="dropdown-item" to="/error">Error404page </Link>
            </div>
          </li>

          <li className="nav-item dropdown no-arrow osahan-right-navbar-user">

            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle user-dropdown-link" to="#" id="userDropdown" role="button" data-bs-toggle="dropdown">
            
                <img alt="Avatar" src="images/loginuser.png"/>
                John
              </Link>

              <div className="dropdown-menu rounded-0 m-0">
                {/* <Link className="dropdown-item"> <i className="fas fa-fw fa-envelope" /> {userElements}</Link> */}

                <Link to="/home" className="dropdown-item"> <i className="fas fa-fw fa-user-circle" /> My Account</Link>
                <Link to="/home" className="dropdown-item"> <i class="fa fa-video"></i> Subscription</Link>
                <Link to="/home" className="dropdown-item"><MdOutlineOndemandVideo />Your Channel</Link>
                <Link to="/home" className="dropdown-item"><GrChannel />Create Your channel </Link>
                <Link to="/home" className="dropdown-item"><MdVideoCameraFront />Your Video</Link>

                <Link to="/setting" className="dropdown-item"><IoMdSettings />Setting</Link>
                <Link to="/register" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#myModal"><i className="fas fa-fw fa-sign-out-alt" />  Logout</Link>

              </div>
            </div>

          </li>

        </ul>

        <div>

        </div>
        <div>

        </div>
      </nav>
      <div id="wrapper">

        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-home" />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/searchvideo">
              <i className="fas fa-fw fa-users" />
              <span>videos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mychannel">
              <i className="fas fa-fw fa-user-alt" />
              <span>My Channel</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <i className="fas fa-fw fa-video" />
              <span>Video Page</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <i className="fas fa-fw fa-cloud-upload-alt" />
              <span>Music Page</span>
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/home" role="button" data-toggle="dropdown">
              <i className="fas fa-fw fa-folder" />
              <span>Pages</span>
            </Link>
            <div className="dropdown-menu">
              <h6 className="dropdown-header">Login Screens:</h6>
              <Link className="dropdown-item" to="login.html">Login</Link>
              <Link className="dropdown-item" to="register.html">Register</Link>
              <Link className="dropdown-item" to="forgot-password.html">Forgot Password</Link>
              <div className="dropdown-divider" />
              <h6 className="dropdown-header">Other Pages:</h6>
              <Link className="dropdown-item" to="404.html">404 Page</Link>
              <Link className="dropdown-item" to="blank.html">Blank Page</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <i className="fas fa-fw fa-history" />
              <span>History Page</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/category" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-fw fa-list-alt" />
              <span>Categories</span>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="categories.html">Movie</Link>
              <Link className="dropdown-item" to="categories.html">Music</Link>
              <Link className="dropdown-item" to="categories.html">Television</Link>
            </div>
          </li>
          <li className="nav-item channel-sidebar-list">
            <h6>SUBSCRIPTIONS</h6>
           
          </li>
        </ul>
      </div>
      <div>
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Here Logout page </h4>

                <button type="button" className="close" data-bs-dismiss="modal">×</button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end<br /> your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancel</button>
                <Link className="btn btn-primary" to="/login">Logout</Link>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
