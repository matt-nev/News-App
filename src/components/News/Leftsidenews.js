import React, { Component } from 'react';
import axios from 'axios';
import LeftSide from './LeftSide';
import Error from './Error';

class Leftsidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftsidenews: [],
            error: false,
        };
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=8438587332de4826b2616dd1fe162907`;
   
        axios.get(url)
        .then((response) => {
            this.setState({
                leftsidenews: response.data.articles
            })
        })
        .catch((error) => {
            this.setState ({
                error: true
            })
        });
    }

    renderItems() {
      if (!this.state.error) {
        return this.state.leftsidenews.map((item) => ( 
            <LeftSide key={item.url} item={item} />
        ));
    } else {
        return <Error />
        }
    }
    render () {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Leftsidenews;