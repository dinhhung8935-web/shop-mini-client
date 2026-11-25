export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          Hu<span>Shop</span>
        </a>
        <nav className="nav">
          <a href="/">Trang chủ</a>
          <a href="/products">Điện thoại</a>
          <a href="/about">Giới thiệu</a>
        </nav>
        <a href="/cart" className="cart-link">
          🛒 Giỏ hàng (0)
        </a>
      </div>
    </header>
  );
}