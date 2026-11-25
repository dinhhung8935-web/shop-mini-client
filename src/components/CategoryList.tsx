import type { Product } from "../data/products";

type Props = {
  products: Product[];
};

export default function CategoryList({ products }: Props) {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container category-section">
      <h3>Khám phá thương hiệu</h3>
      <div className="category-list">
        {categories.map((cat, index) => (
          <span key={index} className="category-tag">
            {cat}
          </span>
        ))}
      </div>
    </div>
  );
}