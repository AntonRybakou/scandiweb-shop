import React, { ReactElement } from 'react';

import { CategoryTitle } from 'common/components/categoryTitle/CategoryTitle';
import { ProductItem } from 'common/components/productItem/ProductItem';

export const WomenCategory = (): ReactElement => {
  return (
    <>
      <CategoryTitle name="Category name" />
      <ProductItem />
    </>
  );
};
