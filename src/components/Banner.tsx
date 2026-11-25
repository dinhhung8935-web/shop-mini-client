export default function Banner() {
  return (
    <div style={{ background: '#1f5fd1', color: 'white', padding: '40px 20px', textAlign: 'center', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Khuyến mãi cực khủng!</h2>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>Giảm giá lên đến 50% cho tất cả sản phẩm mùa hè này.</p>
      <button style={{ padding: '10px 24px', fontSize: '16px', background: '#e07a1f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Mua ngay
      </button>
    </div>
  );
}