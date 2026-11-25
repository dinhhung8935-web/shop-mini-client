import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card">
      {isOutOfStock && <div className="badge-out-of-stock">Hết hàng</div>}
      
      <img src={product.image} alt={product.name} style={{ opacity: isOutOfStock ? 0.7 : 1 }} />
      
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button className="btn" disabled={isOutOfStock}>
          {isOutOfStock ? "Tạm hết hàng" : "🛒 Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}