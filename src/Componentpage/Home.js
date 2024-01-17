
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Allfiledata from './Allfiledata';

import { Pagination } from 'react-bootstrap';

const Home = () => {

  let [showvideo, setshowvideo] = useState([])

  useEffect(() => {
    axios.post("http://103.104.74.215:3003/api/get_latest_video")
        .then((response) => {
            console.log("response", response.data);

       
            setshowvideo(response.data.data)
        })
        .catch(error => {
            console.error('Error fetching video details:', error);
        });
}, []);

let handleVideoClick = (id) => {
  localStorage.setItem('userselectVideoId', id);
  console.log(id);
};

  // let [data, setdata] = useState(Allfiledata)

  const [page, setPage] = useState(1);
  const [pagecount, setPagecount] = useState(0);

  const handleprev = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  // const [data, setData] = useState(Allfiledata);

  useEffect(() => {
    const items = document.querySelectorAll('.carousel .owl-item');

    items.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;

      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0];
        }

        const cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, [showvideo]); // Trigger the effect whenever the 'data' state changes


  const handlenext = () => {
    if (page === 1) return;
    setPage(page + 1);
  };
  let options = {
    // items: 3,
    loop: true,
    margin: 10,
    autoplay: false,
    // autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
    {
      showvideo.map((item, id) => (
          <div  className="item">
            <div className="video-card">
              <div className="video-card-image" id="video-card-image">
              <Link className="play-icon"  to="/mainvideo" onClick={() => handleVideoClick(item._id)}><i className="fas fa-play-circle" /></Link>
              <Link  onClick={() => handleVideoClick(item._id)}  >
                {item.video && item.video.length > 0 && item.video[1]?.fieldname === 'video_thumbnail' ? (
             <img
               src={`http://103.104.74.215:3003/${item.video[1]?.destination}${item.video[1]?.filename}`}
               alt={`Image ${"img/all.png"}`}
               />
              ) : (
              <img
                src="img/all.png"
                alt="Default Image"
              />
            )}

                        </Link>
                  <div className="time" id="time">3:50</div>
              </div>

              <div className="video-card-body">
                <div className="video-title" id="video-title">
                  <Link to="#">{item.channel_name}</Link>
                </div>
                 <div className="single-video-author box mb-3" style={{ fontSize: 16 }}>
                  <div className="float-right">
                    <button className="btn btn-primary" type="button" id="btn">Open</button>
                  </div>
                  {item.video && item.video.length > 0 && item.video[1]?.fieldname === 'video_thumbnail' ? (<img style={{width:"10%", height:"10%"}}  src={`http://103.104.74.215:3003/${item.video[1]?.destination}${item.video[1]?.filename}`} alt="Profile" />):(
  <img style={{width:"20%", height:"20%"}} 
    src="img/all.png"
    alt="Default Image"
  />
)}    
                  <p><Link to="#"><strong>History</strong></Link> <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></p>
                    
                    <p><i className="fas fa-eye" /> {item.video_views}</p>
                    <p><i className="fa fa-thumbs-up" /> {item.video_likes}</p>
                    <p> three Months ago</p>
               
                  </div> 
               
                </div>
              </div>
            </div>


        ))
      }
   
</OwlCarousel>
  );
};

export default Home;

