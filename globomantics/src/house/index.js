import React, { Component } from 'react';
import './house.css';
import emailIcon from './Email.png';
import Inquiry from './inquiry';
import PropTypes from 'prop-types'

class HouseDetail extends Component {
  state = {
    inquiryShown: false
  }

  inquiryToggle = () => {
    this.setState({
      inquiryShown: ~this.state.inquryShown
    });
  }

  render() {
    const house = this.props.house;
    const inquiry = this.state.inquiryShown ? <Inquiry house={house} /> : null;

    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{house.country}</h5>
        </div>
        <div className="row">
          <h3 className="col-md-12">{house.address}</h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <img src={`https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cs=tinysrgb`} alt="House"/>
          </div>
          <div className="col-md-5">
            <p className="price">${house.price}</p>
            <p>{house.description}</p>
            <img src={emailIcon} height="50" alt="inquiry" onClick={this.inquiryToggle} />
            {inquiry}
          </div>
        </div>
      </div>
    );
  }
}

HouseDetail.propTypes = {house: PropTypes.object.isRequired}
export default HouseDetail;