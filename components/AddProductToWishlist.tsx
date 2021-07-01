interface AddProductToWishlistPros {
  onAddToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishlist({ onAddToWishList, onRequestClose}: AddProductToWishlistPros) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}