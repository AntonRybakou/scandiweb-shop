import React, { ReactElement } from 'react';

import { ProductItemWrapper, Image, ItemTitle, Price } from './ProducItemStyles';

export const ProductItem = (): ReactElement => {
  return (
    <ProductItemWrapper>
      <Image src="" alt="product" />
      <ItemTitle>Apollo running Short</ItemTitle>
      <Price>$100</Price>
    </ProductItemWrapper>
  );
};
