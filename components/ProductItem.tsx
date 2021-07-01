import { memo, useState } from 'react';
import dynamic from 'next/dynamic';
import { AddProductToWishlistPros } from './AddProductToWishlist'

const AddProductToWishlist = dynamic<AddProductToWishlistPros>(async () => {
  const mod = await import('./AddProductToWishlist');
  return mod.AddProductToWishlist;
}, { 
  // eslint-disable-next-line react/display-name
  loading: () => <span>Carregando...</span> 
});
AddProductToWishlist.displayName = 'Add Product To Wishlist';
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
  return Object.is(prevProps.product, nextProps.product);
})

ProductItem.displayName ='Add';