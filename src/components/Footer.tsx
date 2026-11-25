export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <p><strong>HuShop</strong> · Hệ thống bán lẻ điện thoại di động</p>
        <p>Hotline: 1900 1234 · Email: hotro@hushop.vn</p>
        <p style={{ fontSize: '13px', marginTop: '8px', opacity: 0.7 }}>© {year} HuShop. All rights reserved.</p>
      </div>
    </footer>
  );
}