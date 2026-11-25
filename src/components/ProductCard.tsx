import type { Product } from "../data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const isOutOfStock = product.stock === 0;

  return (
    <div className="product-card" style={{ position: 'relative' }}>
      {isOutOfStock && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', background: '#ef4444', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', zIndex: 1 }}>
          Hết hàng
        </div>
      )}
      
      <img src={product.image} alt={product.name} style={{ opacity: isOutOfStock ? 0.6 : 1 }} />
      
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">
          {product.price.toLocaleString("vi-VN")} đ
        </p>
        <button 
          className="btn" 
          disabled={isOutOfStock}
          style={{ 
            backgroundColor: isOutOfStock ? '#9ca3af' : '#1f5fd1', 
            cursor: isOutOfStock ? 'not-allowed' : 'pointer' 
          }}
        >
          {isOutOfStock ? "Tạm hết hàng" : "Thêm vào giỏ"}
        </button>
      </div>
    </div>
  );
}