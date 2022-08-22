import React, { useContext } from 'react';
import playerone from '../../images/r1.jpg';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppContext } from '../../context';
import { useLocation } from 'react-router-dom';

import Roster from './Roster';

function PlayerStatus() {
  const [player, setPlayer] = useState([]);

  const { data } = useContext(AppContext);
  const location = useLocation();
  const { state } = location;

  const url = `https://umaru-api.herokuapp.com/api/players/${state}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPlayer(json))
      .catch((error) => console.log(error));
  });

  return (
    <div id='PlayerStatus'>
      <div className='container'>
        <div className='backword'>
          <NavLink to='/roster'>
            {' '}
            <i class='fa fa-long-arrow-left' aria-hidden='true'></i>Return to
            roster
          </NavLink>
        </div>
        <div className='row  my-md-5'>
          <div className='col-md-5 right'>
            <div className='play-details'>
              <div className='play-img'>
                <img src={player.image} alt='' />
              </div>
              <div className='play-info'>
                <span>{player.name}</span>
                <div className='play-bio my-md-2'>
                  <span>Player Bio</span>
                </div>
                <div className='play-data'>
                  <table className='play-table'>
                    <tbody>
                      <tr>
                        <td className='left-txt'>Pos:</td>
                        <td className='right-txtt'>{player.pos}</td>
                      </tr>
                      <tr>
                        <td className='left-txt'>Ht/Wt:</td>
                        <td className='right-txt'>
                          {player.ht}/{player.wt}
                        </td>
                      </tr>
                      <tr>
                        <td className='left-txt'>Year:</td>
                        <td className='right-txt'>{player.year}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-7 left'>
            <div className='play-info-left'>
              <div className='play-head'>
                <h1>Player Bio</h1>
              </div>
              <div className='play-para'>
                <p>
                  <span>Favorite Athlete:</span> {player.favorite_athlete}
                </p>
                <p>
                  <span>Favorite Professional Teams:</span>{' '}
                  {player.favorite_professional_teams}
                </p>
                <p>
                  <span>Future Goals:</span> {player.future_goals}
                </p>
                <p>
                  <span>Interesting Fact About Yourself:</span>{' '}
                  {player.Interesting_fact_about_yourself}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStatus;
