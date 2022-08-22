import React from 'react'
import Logo from '../../images/logoOne.png'

function FooterOne() {
  return (
    <div className="bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="widget widget_text">
            <div className="textwidget ">
              <span className="widgettitle py-3">
                PROUD HOME OF DEER VALLEY FOOTBALL – DUB VILLAGE
              </span>
              <div className="textwidget">
                <h3 className="section-3">
                  Mission of Deer Valley is to fight until the end.
                </h3>
                <p>
                  <img
                    className="alignnone size-full wp-image-19"
                    src={Logo}
                    alt="logo"
                  ></img>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FooterOne