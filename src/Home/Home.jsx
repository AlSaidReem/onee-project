import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Timer from './Timer';
import DateTime from './Timer';
// import one from '../images/one.webp';
// import two from '../images/two.webp';
// import three from '../images/thre.webp';
// import four from '../images/four.webp';
// import five from '../images/five.webp';
import sora from '../images/image.webp';

import one from '../images/image11.webp';
import two from '../images/jpg.webp';
import three from '../images/jpg1.webp';
import four from '../images/jpg2.webp';
import five from '../images/jpg3.webp';
import six from '../images/jpg5.webp';
import seven from '../images/jpg7.webp';
import eight from '../images/jpg9.webp';



function Home() {
	const [playlistItems, setPlaylistItems] = useState([]);
  const [iframeSrc, setIframeSrc] = useState('');
  const [iframeTwo , setIframeTwo] = useState ('')
  const apikey = 'AIzaSyBKeNa--8qW05Ya3Mu2wxZljbcYAkc5a4g';
  const playlist = 'PL3-HkneM1xJn5Q9oOX3BvEXbXAAGbDHtF';


   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=7&playlistId=${playlist}&key=${apikey}`
        );

        const playlistItemsData = response.data.items;

        setIframeSrc(`https://www.youtube.com/embed/${playlistItemsData[1].snippet.resourceId.videoId}`);
        setIframeTwo(`https://www.youtube.com/embed/${playlistItemsData[0].snippet.resourceId.videoId}`);
		

        setPlaylistItems(playlistItemsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
	
 

  return (
    <>
      <section className="hero">

     <h1> Become a legendary power with us </h1>
   
      <div><DateTime/></div>
     <button> <a href='/contracthome'> Contracts  </a> </button>
   </section>


   <div className="heading">
  <h2>About Us</h2>
  <div className="container">
    <section className="about">
      <div className="about-image">
        <img src={sora} alt="Our Team" />
      </div>
      <div className="about-content">
        <p>
          At Football, we are more than just fans; we are a community united by our passion for the beautiful game. Our mission is to provide you with the latest news, insightful analysis, and a space to connect with fellow enthusiasts.
        </p>
        <p>
          Our platform stands out with features like Live Match Updates , Interactive Match Analysis , Community Tournaments and Exclusive Interviews. From in-depth articles to live match updates, we've curated an experience tailored for die-hard supporters and casual followers alike.
        </p>
        <p className='iconfootball'>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-solid fa-envelope"></i>


        </p>
       
      
      </div>
    </section>
  </div>
</div>


<section id="gallery" className="gallery-box">

		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="title-box">
						<h2>Team Gallery</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<ul className="popup-gallery clearfix">
					<li>
						<a href={one}>
							<img className="img-fluid" src={one} alt="single"/>

						</a>
					</li>
					<li>
						<a href={two}>
							<img className="img-fluid" src={two} alt="single"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={four}>
							<img className="img-fluid" src={four} alt="single"/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={three}>
							<img className="img-fluid" src={three} alt="single "/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={five}>
							<img className="img-fluid" src={five} alt="single "/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={six}>
							<img className="img-fluid" src={six} alt="single "/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={seven}>
							<img className="img-fluid" src={seven} alt="single "/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
					<li>
						<a href={eight}>
							<img className="img-fluid" src={eight} alt="single "/>
							<span className="overlay"><i className="fa fa-heart-o" aria-hidden="true"></i></span>
						</a>
					</li>
				</ul>
			</div>
		</div>

  </section>
<section className='video-axios'>
    <h2>YouTube Videos</h2>
	<div className='ifram-videos'>

       {iframeSrc && <iframe title="YouTube Video" width="560" height="315" src={iframeSrc}  allowFullScreen></iframe>}
       {iframeSrc && <iframe title="YouTube Video" width="560" height="315" src={iframeTwo}  allowFullScreen></iframe>}
	</div>

</section>

  

	
   </>
  )
}

export default Home;





