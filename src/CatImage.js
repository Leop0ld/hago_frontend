import React, { Component } from 'react';
import axios from 'axios';
import Slider from "react-slick";
import './CatImage.css';

class CatImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    axios.get('https://hago.herokuapp.com/cats/')
    .then(res => {
      const images = res.data;
      this.setState({ images });
    })
    .catch(res => {
      console.log(res);
    });
  }

  render() {
    const slick_settings = {
      dots: true,
      arrows: false,
      lazyLoad: true,
      infinite: true,
      speed: 1000,
      // autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: '',
      prevArrow: ''
    };

    return (
      <div className="cat-image-section">
        <Slider {...slick_settings}>
          {this.state.images.map((image, i) => <div className="cat-image-wrapper" key={i}><img src={image.url} className="cat-image"/></div>)}
        </Slider>
      </div>
    );
  }
}

export default CatImage;
