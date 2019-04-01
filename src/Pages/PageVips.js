import React, {Component} from 'react'

import HeaderApp from '../components/HeaderApp'
import FooterApp from '../components/FooterApp'
import ProductItem from '../components/ProductItem'
import Modal from '../components/Modal'

import promo from '../assets/images/promo.png'
import banner from '../assets/images/capitana.png'
import logoBanner from '../assets/images/capitana-logo.png'
import {history} from "../components/_helpers";

class PageVips extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      scrollMenu: false
    }

    this.openVideo = this.openVideo.bind(this)
    this.closeVideo = this.closeVideo.bind(this)
  }

  goBack() {
    history.goBack()
  }

  closeVideo(e) {
    let clases = e.target.classList

    clases.forEach((clase) => {
      if(clase === 'container' || clase === 'body' || clase==="modal") {
        console.log('cierra el video')
        this.setState({isOpen: false})
      }

    })

  }

  openVideo() {
    console.log('open the video')
    this.setState({isOpen: true})
  }

  componentWillMount() {
    document.addEventListener("scroll", (event) => {
      let scroll = window.scrollY
      if(scroll > 60) {
        this.setState({ scrollMenu: true })
      } else {
        this.setState({ scrollMenu: false })
      }
    })
  }


  render() {
    let products = [
      {
        id: 1,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      },
      {
        id: 2,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      },
      {
        id: 3,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      },
      {
        id: 4,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      },
      {
        id: 5,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      },
      {
        id: 6,
        name: '6 boletos tradicionales',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
      }
    ]

    let productVideo = {
        id: 1,
        name: '6 boletos tradicionales pelicula iron man',
        description: 'Lorem ipsum dolor ghkkjhg jhghj',
        price: 260,
        qty: 1
    }

    let articles = products.map((item) => {
      return <div className="col" key={item.id}> <ProductItem item={item} type="vips" /> </div>
    })

    return(
      <div className="pageApp vips">
        <HeaderApp bgMenu={this.state.scrollMenu} />

        <div className="page">
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
                <div className="col-2"><br/></div>
                <div className="col-5"><br/></div>
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
        <Modal type="video" open={this.state.isOpen} close={this.closeVideo} url="https://www.youtube.com/embed/MJIz2gf3Wa8" item={productVideo} />

      </div>
    )
  }
}

export default PageVips