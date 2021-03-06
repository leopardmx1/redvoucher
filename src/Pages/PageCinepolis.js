import React, {Component} from 'react'

import { connect } from 'react-redux'
import { history } from "../components/_helpers/history";

import HeaderApp from '../components/HeaderApp'
import FooterApp from '../components/FooterApp'
import ProductItem from '../components/ProductItem'
import ItemDestacado from "../components/ItemDestacado";

class PageCinepolis extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      scrollMenu: false
    }

    this.openVideo = this.openVideo.bind(this)
    this.closeVideo = this.closeVideo.bind(this)
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
    console.log(this.props)
    document.addEventListener("scroll", (event) => {
      let scroll = window.scrollY
      if(scroll > 60) {
        this.setState({ scrollMenu: true })
      } else {
        this.setState({ scrollMenu: false })
      }
    })
  }

  goBack() {
    history.goBack()
  }


  render() {

    let articles = this.props.products.map((item) => {
      return <div className="col" key={item.id}> <ProductItem item={item} type="cinepolis" /> </div>
    })

    let destacados = this.props.latest.map((item) => {
      return <div className="col" key={item.id}> <ItemDestacado item={item} /> </div>
    })

    return(
      <div className="pageApp cinepolis">
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
          <div className="wrapper flex mb-3 latest">
            <div className="col">
              <h2>Lo más vendido</h2>
            </div>
            {destacados}
          </div>
          <div className="wrapper">
            <div className="banner">
              <iframe src="https://www.youtube.com/embed/MJIz2gf3Wa8" frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="video"
                      allowFullScreen className="responsive-video"></iframe>
            </div>
          </div>

          <div className="wrapper flex productItems">
            {articles}
          </div>
          <div>
            <a onClick={this.goBack}> Regresar al inicio</a>
          </div>

        </div>
        <FooterApp />


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return { products: state.products, latest: state.latestBuy }
}

export default connect(mapStateToProps)(PageCinepolis)