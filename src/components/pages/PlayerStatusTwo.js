import React from 'react'
import playertwo from '../../images/r2.jpeg'
import {NavLink} from 'react-router-dom'

function PlayerStatusTwo() {
  return (
    <div id="PlayerStatus">
       
        
        <div className='container'>
        <div className='backword'>
       
            <NavLink to="/roster" > <i class="fa fa-long-arrow-left" aria-hidden="true"></i>Return to roster</NavLink>
        </div>
            <div className='row  my-md-5'>
                <div className="col-md-5">
                    <div className="play-details">
                        <div className='play-img'>
                            <img src={playertwo} alt="playertwo" />
                        </div>
                        <div className='play-info'>
                            <span>Bryson Parker</span>
                            <div className='play-bio my-md-2'>
                                <span>Player Bio</span>
                            </div>
                            <div className='play-data'>
                                <table className='play-table'>
                                    <tbody>
                                        <tr>
                                            <td className='left-txt'>Pos:</td>
                                            <td  className='right-txt'>WR DB</td>
                                        </tr>
                                        <tr>
                                            <td className='left-txt'>Ht/Wt:</td>
                                            <td  className='right-txt'>6'0  /160 LBS</td>
                                        </tr>
                                        <tr>
                                            <td className='left-txt'>Year:</td>
                                            <td  className='right-txt'>Junior</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-md-7 left">
                    <div className='play-info-left'>
                        <div className='play-head'>
                            <h1>Player Bio</h1>
                        </div>
                        <div className='play-para'>
                            <p><span>Favorite Athlete:</span> DeAndre Hopkins</p>
                            <p><span>Favorite Professional Teams:</span>Denver Broncos, San Francisco Giants, Golden State Warriors</p>
                            <p><span>Future Goals:</span> Play College ball and make it to the “League”</p>
                            <p><span>Interesting Fact About Yourself:</span> I like staying active</p>
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    </div>
  )
}

export default PlayerStatusTwo