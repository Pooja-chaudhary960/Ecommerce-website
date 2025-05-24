import React, { useContext, useState } from 'react';
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="" height="300px" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_dull_icon} alt="" height="20px" />
          <p>(130)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            {product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            {product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          Explore trendy, high-quality outfits. Perfect for daily wear or special moments fashion that fits every lifestyle.
        </div>

        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={selectedSize === size ? "selected-size" : ""}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
          {selectedSize && <p>Selected Size: <strong>{selectedSize}</strong></p>}
        </div>

        <button 
        onClick={() => { 
          if(selectedSize){
          addTocart(product.id, selectedSize);
          }}}>
            ADD TO CART
          </button>
      </div>
    </div>
  );
};

export default ProductDisplay;
