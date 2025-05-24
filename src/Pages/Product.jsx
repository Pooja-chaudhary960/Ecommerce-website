import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ShopContext } from '../Context/ShopContext';
import Bredcrums from '../Components/BredCrums/BredCrums'; 
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product?.find((e) => e.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Bredcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
