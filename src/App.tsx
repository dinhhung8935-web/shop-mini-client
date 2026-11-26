import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import { products } from "./data/products";
import { filterProducts } from "./utils/product";
import "./App.css";

function App() {
  // Lọc ra các sản phẩm có giá dưới 20 triệu và sắp xếp tăng dần
  const cheapProducts = filterProducts(products, { maxPrice: 20000000, sort: "asc" });
  // Lọc ra các sản phẩm của Apple
  const appleProducts = filterProducts(products, { category: "Apple" });

  return (
    <>
      <Header />
      <Banner />
      
      <main className="container" style={{ paddingBottom: '60px' }}>
        <CategoryList products={products} />
        
        {/* 3 KHU VỰC SẢN PHẨM */}
        <ProductList title="Điện thoại nổi bật" items={products} />
        <ProductList title="Giá dưới 20.000.000 đ" items={cheapProducts} />
        <ProductList title="Điện thoại Apple" items={appleProducts} />
      </main>
      
      <Footer />
    </>
  );
}

export default App;