import React, {Component} from 'react'

import HeaderApp from '../components/HeaderApp'
import FooterApp from '../components/FooterApp'
import ProductItem from '../components/ProductItem'

import promo from '../assets/images/promo.png'
import banner from '../assets/images/capitana.png'
import logoBanner from '../assets/images/capitana-logo.png'

class PageCinepolis extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }

    this.openVideo = this.openVideo.bind(this)
  }

  openVideo() {
    console.log('open the video')
    this.setState({openVideo: true})
  }


  render() {
    let products = [
      {
        id: 1,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      },
      {
        id: 2,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      },
      {
        id: 3,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      },
      {
        id: 4,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      },
      {
        id: 5,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      },
      {
        id: 6,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260
      }
    ]

    let articles = products.map((item) => {
      return <div className="col" key={item.id}> <ProductItem item={item} type="cinepolis" /> </div>
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
              <h2>Lo más vendido</h2>
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

        <div className="modal" >
          <div className="body">
            <iframe width="791" height="329" src="https://www.youtube.com/embed/MJIz2gf3Wa8" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

          </div>
        </div>
      </div>
    )
  }
}

export default PageCinepolis