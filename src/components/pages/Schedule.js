import React from 'react';
import s1 from '../../images/s1.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.jpg';
import s5 from '../../images/s5.png';
import { Link } from 'react-router-dom';

function Schedule() {
  return (
    <div className='imp-body'>
      <div id='main-body'>
        <div className='sehed'>
          <div className='container'>
            <h2 className='title'>Schedule</h2>
            <div className='schedule-post hentry'>
              <div className='schedule_match'>
                <ul className='schedules-design'>
                  <li className='American Canyon'>
                    <div className='first_wrap'>
                      <div className='score_text'>
                        <span>08/23</span>
                      </div>
                      <div className='date-time'>
                        <span> 7:00 PM</span>
                      </div>
                    </div>
                    <div className='second_wrap row'>
                      <div className='img-name col-md-8'>
                        <span className='main-text'></span>
                        <img src={s1}></img>
                        <span>American Canyon</span>
                      </div>
                      <div className='location-class col-md-4'>
                        <div className='location'>
                          <span> Deer Valley High School</span>
                        </div>
                        <Link
                          to={
                            '//maps.google.com/?q=4700%20Lone%20Tree%20Way,%20Antioch,%20CA%2094531'
                          }
                          className='map-directions'
                        >
                          Directions
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* {/ second schedule post -----------------> /} */}
                  <li className='campolindo'>
                    <div className='first_wrap'>
                      <div className='score_text'>
                        <span>08/23</span>
                      </div>
                      <div className='date-time'>
                        <span>7:00 PM</span>
                      </div>
                    </div>
                    <div className='second_wrap row'>
                      <div className='img-name col-md-8'>
                        <span className='second-main'>AT</span>
                        <img src={s2}></img>
                        <span>Campolindo</span>
                      </div>
                      <div className='location-class col-md-4'>
                        <div className='location'>
                          <span> Deer Valley High School</span>
                        </div>
                        <Link
                          to={
                            '//maps.google.com/?q=4700%20Lone%20Tree%20Way,%20Antioch,%20CA%2094531'
                          }
                          className='map-directions'
                        >
                          Directions
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* {/ Third schedule post ----------------->>> /} */}
                  <li className='wood'>
                    <div className='first_wrap'>
                      <div className='score_text'>
                        <span>08/23</span>
                      </div>
                      <div className='date-time'>
                        <span>7:00 PM</span>
                      </div>
                    </div>
                    <div className='second_wrap row'>
                      <div className='img-name col-md-8'>
                        <span className='main-text'></span>
                        <img src={s3}></img>
                        <span>Wood</span>
                      </div>
                      <div className='location-class col-md-4'>
                        <div className='location'>
                          <span> Deer Valley High School</span>
                        </div>
                        <Link
                          to={
                            '//maps.google.com/?q=4700%20Lone%20Tree%20Way,%20Antioch,%20CA%2094531'
                          }
                          className='map-directions'
                        >
                          Directions
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* {/ fourth schedule post ------------------>>> /} */}
                  <li className='kennedy'>
                    <div className='first_wrap'>
                      <div className='score_text'>
                        <span>08/23</span>
                      </div>
                      <div className='date-time'>
                        <span>7:00 PM</span>
                      </div>
                    </div>
                    <div className='second_wrap row'>
                      <div className='img-name col-md-8'>
                        <span className='main-text'></span>
                        <img src={s4}></img>
                        <span>Kennedy Eagles</span>
                      </div>
                      <div className='location-class col-md-4 '>
                        <div className='location'>
                          <span> Deer Valley High School</span>
                        </div>
                        <Link
                          to={
                            '//maps.google.com/?q=4700%20Lone%20Tree%20Way,%20Antioch,%20CA%2094531'
                          }
                          className='map-directions'
                        >
                          Directions
                        </Link>
                      </div>
                    </div>
                  </li>
                  {/* {/ Fifth Schedule post --------->>>> /} */}
                  <li className='dublin'>
                    <div className='first_wrap'>
                      <div className='score_text'>
                        <span>08/23</span>
                      </div>
                      <div className='date-time'>
                        <span>7:00 PM</span>
                      </div>
                    </div>
                    <div className='second_wrap row'>
                      <div className='img-name col-md-8'>
                        <span className='main-text'></span>
                        <img src={s5}></img>
                        <span>Dublin</span>
                      </div>
                      <div className='location-class col-md-4'>
                        <div className='location'>
                          <span> Deer Valley High School</span>
                        </div>
                        <Link
                          to={
                            '//maps.google.com/?q=4700%20Lone%20Tree%20Way,%20Antioch,%20CA%2094531'
                          }
                          className='map-directions'
                        >
                          Directions
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
