export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { 
    id: 1, 
    name: "iPhone 15 Pro Max 256GB", 
    price: 34990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=iPhone+15+Pro+Max", 
    category: "Apple", 
    stock: 10 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S24 Ultra", 
    price: 31990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=Galaxy+S24+Ultra", 
    category: "Samsung", 
    stock: 5 
  },
  { 
    id: 3, 
    name: "Xiaomi 14 Ultra", 
    price: 28990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=Xiaomi+14+Ultra", 
    category: "Xiaomi", 
    stock: 0 
  },
  { 
    id: 4, 
    name: "OPPO Find X7 Ultra", 
    price: 26990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=OPPO+Find+X7", 
    category: "OPPO", 
    stock: 8 
  },
  { 
    id: 5, 
    name: "Google Pixel 8 Pro", 
    price: 24990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=Google+Pixel+8+Pro", 
    category: "Google", 
    stock: 15 
  },
  { 
    id: 6, 
    name: "Sony Xperia 1 V", 
    price: 29990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=Sony+Xperia+1+V", 
    category: "Sony", 
    stock: 3 
  },
  { 
    id: 7, 
    name: "ASUS ROG Phone 8 Pro", 
    price: 25990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=ASUS+ROG+Phone+8", 
    category: "ASUS", 
    stock: 0 
  },
  { 
    id: 8, 
    name: "Nothing Phone (2)", 
    price: 15990000, 
    image: "https://placehold.co/600x600/1e293b/ffffff?text=Nothing+Phone+2", 
    category: "Nothing", 
    stock: 20 
  },
];