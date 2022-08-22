import React from 'react';
import logo from '../images/logoOne.png';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useState, useEffect } from 'react';
import Loading from './pages/Loading';

function Header() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://umaru-api.herokuapp.com/api/topslides';
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
    <div id='head' className='imp-body'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2 header-col'>
            <div className='logo-img'>
              <a href='/'>
                <img src={logo} alt='header-logo' />
              </a>
            </div>
          </div>

          <div className='col-md-10 slider-col'>
            <div>{isLoading ? <Loading /> : ''}</div>

            <Carousel
              responsive={responsive}
              infinite={true}
              itemClass='carouselItem'
            >
              {data.map((user) => (
                <div className='slide'>
                  <div className='slider-one'>
                    <div className='slide-date'>{user.date}</div>
                    <div className='slide-logos'>
                      <div className='slide-scorebord'>
                        <img src={user.image1} alt='team1' />
                        <div className='team-name'>
                          <span>{user.title1}</span>
                        </div>
                        <div className='team-score'>
                          <span>{user.score1}</span>
                        </div>
                      </div>
                      <div className='slide-scorebord'>
                        <img src={user.image2} alt='team2' />
                        <div className='team-name'>
                          <span>{user.title2}</span>
                        </div>
                        <div className='team-score'>
                          <span>{user.score2}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
