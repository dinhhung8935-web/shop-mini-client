import type { Product } from "../data/products";

type Props = {
  products: Product[];
};

export default function CategoryList({ products }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container" style={{ marginBottom: '20px', marginTop: '20px' }}>
      <h3>Danh mục sản phẩm:</h3>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px', flexWrap: 'wrap' }}>
        {categories.map((cat, index) => (
          <span key={index} style={{ padding: '8px 16px', background: '#e2e8f0', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}