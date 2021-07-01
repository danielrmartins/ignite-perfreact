import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import lodash from 'lodash';
import { AddProductToWishlistProps } from './AddProductToWishlist'

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist);
}, { 
  // eslint-disable-next-line react/display-name
  loading: () => <span>Carregando...</span> 
});
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  }
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div key={product.id}>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>Add to wishlist</button>

      {isAddingToWishList && <AddProductToWishlist onAddToWishList={() => onAddToWishList(product.id)} onRequestClose={() => setIsAddingToWishList(false)} />}
      
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.product, nextProps.product);
})