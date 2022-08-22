import React from 'react'
import ScrollToTop from "react-scroll-to-top";

function Footer() {
  return (
    <div id='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='foot-right'>
                        <div className='footer-text'>
                            <span>   
                                Official Rights of Deer Valley Football. All Rights Reserved.     
                            </span>

                        </div>

                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='foot-left'>
                    <div className='footer-text'>
                        <span>
                            <a href="https://test-dubvillage.pantheonsite.io">Deer Valley Football</a>
                        </span>
                    </div>
                    <div> 
                    <div />
                    <ScrollToTop smooth />
                    </div>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer