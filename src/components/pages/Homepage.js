import React from 'react';
import '../../Css/Style.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import { Helmet } from 'react-helmet';

function Homepage() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://umaru-api.herokuapp.com/api/midslides';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    if (data.length !== 0) {
      setIsLoading(false);
    }
    console.log(data);
  }, [data]);

  return (
    <div className='main-body'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Homepage</title>
        <link rel='canonical' href='/homepage' />
      </Helmet>
      <div className='imp-body'>
        <div id='main-body'>
          <div className='full-bg'>
            <div
              className='post-13 page type-page status-publish hentry'
              id='post-13'
            >
              <div className='home-bnr'>
                <div className='countdown'>
                  <div className='wow'>
                    <h2> Welcome to Deer Valley Football Home of Dubvillage</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='slider-section py-5'>
              <div className='player-head'>
                <h1 className='section-2'> Deer Valley Football Gallery</h1>
              </div>
              <div>{isLoading ? <Loading /> : ''}</div>
              <div className='container'>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  itemClass='carouselItem'
                >
                  {data.map((user) => (
                    <div className='card-div mt-md-2'>
                      <img width='100%' src={user.image} alt='Brett' />
                      <div className='wrap-card-content'>
                        <div className='twoh-div'>
                          <h6>{user.title}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>

            <div className='yt-section'>
              <div className='player-head  wow '>
                <h1 className='section-2'>Deer Valley Football Videos</h1>
              </div>
              <div className='container'>
                <div className='wp-block-columns has-2-columns row'>
                  <div className='wp-block-column col-md-6'>
                    <iframe
                      src='https://www.youtube.com/embed/axL6EjqPWWU'
                      frameBorder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    ></iframe>
                  </div>
                  <div className='wp-block-column col-md-6'>
                    <iframe
                      src='https://www.youtube.com/embed/b1QtPsrrpm0'
                      frameBorder='0'
                      allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
