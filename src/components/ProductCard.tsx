import type { Product } from "../data/products";
import { formatPrice } from "../utils/format";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const outOfStock = product.stock === 0;
  return (
    <div className="product-card">
      {outOfStock && <div className="badge-out-of-stock">Hết hàng</div>}
      <img src={product.image} alt={product.name} />
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        <button className="btn" disabled={outOfStock}>
          {outOfStock ? "Tạm hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}