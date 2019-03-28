import React, {Component} from 'react'

import HeaderApp from '../components/HeaderApp'
import FooterApp from '../components/FooterApp'
import ProductItem from '../components/ProductItem'

import promo from '../assets/images/promo.png'
import banner from '../assets/images/capitana.png'
import logoBanner from '../assets/images/capitana-logo.png'

class PageCinepolis extends Component {

  openVideo() {
    console.log('open the video')
  }


  render() {
    let products = [
      {
        id: 1,
        name: '6 boletos tradicionales',
        price: 260
      },
      {
        id: 2,
        name: '6 boletos tradicionales',
        price: 260
      },
      {
        id: 3,
        name: '6 boletos tradicionales',
        price: 260
      },
      {
        id: 4,
        name: '6 boletos tradicionales',
        price: 260
      },
      {
        id: 5,
        name: '6 boletos tradicionales',
        price: 260
      },
      {
        id: 6,
        name: '6 boletos tradicionales',
        price: 260
      }
    ]

    let articles = products.map((item) => {
      return <div className="col"> <ProductItem item={item} type="cinepolis" /> </div>
    })

    return(
      <div className="pageApp cinepolis">
        <HeaderApp />
        <div>
          <header className="pageSlider">
            <div className="bottom">
              <div className="cl-1"></div>
              <div className="cl-2"></div>
              <div className="cl-3"></div>
              <div className="cl-4"></div>
              <div className="cl-5"></div>
            </div>
          </header>
          <div className="wrapper flex mb-3">
            <div className="col-2">
              <h2>Lo mas vendido</h2>
            </div>
            <div className="col-5">
              <img src={promo} alt="" className="img-fluid"/>
            </div>
            <div className="col-5">
              <img src={promo} alt="" className="img-fluid"/>
            </div>
          </div>
          <div className="wrapper">
            <div className="banner">
              <img src={banner} alt="Capitana" className="img-fluid"/>
              <div className="banner-logo flex">
                <div className="col-2"></div>
                <div className="col-5"></div>
                <div className="col-5">
                  <img src={logoBanner} alt="" className="img-fluid"/>
                </div>
              </div>
              <div className="rectangle cinepolis-color" onClick={this.openVideo}>
                <p> Ver trailer </p>
              </div>
            </div>
          </div>

          <div className="wrapper flex productItems">
            {articles}
          </div>

        </div>
        <FooterApp />
      </div>
    )
  }
}

export default PageCinepolis