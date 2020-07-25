import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
    addToOrder: PropTypes.func,
  };

  handleClick = () => {
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span>{formatPrice(price)}</span>
        </h3>
        <p className="fish-description">{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
