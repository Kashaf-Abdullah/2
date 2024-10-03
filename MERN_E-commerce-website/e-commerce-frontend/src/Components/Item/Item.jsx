// import React from 'react'
// import './Item.css'
// import { Link } from 'react-router-dom'

// const Item = (props) => {
//   return (
//     <div className='item'>
//       <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products" /></Link>
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">${props.new_price}</div>
//         <div className="item-price-old">${props.old_price}</div>
//       </div>
//     </div>
//   )
// }

// export default Item

import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} className='item-link' onClick={scrollToTop}>
        <img src={props.image} alt="Product" className='item-image' />
      </Link>
      <div className='item-details'>
        <Link to={`/product/${props.id}`} className='item-name'>{props.name}</Link>
        <div className="item-prices">
          {props.old_price && (
            <div className="item-price-old">{props.old_price.toFixed(2)}</div>
          )}
          <div className="item-price-new">{props.new_price.toFixed(2)}</div>
        </div>
        <button className="item-button">Add to Cart</button>
      </div>
    </div>
  );
}

export default Item;
