import React, { Component } from 'react';
import axios from 'axios';

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
    return (
      <div>
        {this.state.images.map((image, i) => <img src={image.url} key={i} />)}
      </div>
    );
  }
}

export default CatImage;