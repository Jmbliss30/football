import React, { useContext } from 'react';
import { NavLink, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import PlayerStatus from './PlayerStatus';
import { AppContext } from '../../context';

function Roster() {
  const { data } = useContext(AppContext);
  console.log('this is data --->', data);
  return (
    <div className='imp-body'>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='Roster Page' content='Dv roster' />

        <title>Roster</title>
        <link rel='canonical' href='/homepage' />
      </Helmet>
      <div id='main-body'>
        <div className='rost'>
          <div className='container-posts'>
            <h2 className='title'>Roster</h2>
            <div className=' hentry'>
              <div className='mstw-tr-scroll-wrapper'>
                <table className='tr-table mstw-tr-table_Teamone'>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Bio</th>
                      <th>Pos</th>
                      <th>Ht</th>
                      <th>Wt</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <tr>
                        <td>
                          <Link to={'/PlayerStatus'} state={`${user._id}`}>
                            <img src={user.image} alt='Playerone'></img>
                          </Link>
                        </td>

                        <td>{user.name}</td>
                        <td>
                          <Link to={'/PlayerStatus'} state={`${user._id}`}>
                            Player Bio
                          </Link>
                        </td>
                        <td>{user.pos.toUpperCase()}</td>
                        <td>{user.ht}</td>
                        <td>
                          {user.wt
                            .toUpperCase()
                            .replace(/([L])/g, ' $1')
                            .trim()}
                        </td>
                        <td>
                          {user.year.charAt(0).toUpperCase() +
                            user.year.slice(1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>{' '}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roster;
