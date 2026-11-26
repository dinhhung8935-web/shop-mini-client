import { products } from "../src/data/products.ts";
import { addToCart, updateQuantity, removeFromCart, countItems, calcTotal } from "../src/utils/cart.ts";
import type { CartItem } from "../src/utils/cart.ts";
import { formatPrice } from "../src/utils/format.ts";
import { filterProducts, getCategories } from "../src/utils/product.ts";

let cart: CartItem[] = [];
// Thêm iPhone (id 1) 2 lần, mỗi lần 1 cái => tổng 2 cái
cart = addToCart(cart, products[0]);      
cart = addToCart(cart, products[0]);   
// Thêm Samsung (id 2) 1 cái
cart = addToCart(cart, products[1]);      

console.log("Số sản phẩm:", countItems(cart));   // Kỳ vọng: 3
console.log("Tổng tiền:", formatPrice(calcTotal(cart))); 

// Cập nhật iPhone thành 1 cái, xóa Samsung
cart = updateQuantity(cart, products[0].id, 1);
cart = removeFromCart(cart, products[1].id);
console.log(cart.map((i) => `${i.product.name} x${i.quantity}`));

console.log("Danh mục:", getCategories(products));
console.log(
  "Điện thoại Apple, giá tăng dần:",
  filterProducts(products, { category: "Apple", sort: "asc" }).map((p) => p.name)
);