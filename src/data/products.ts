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
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&auto=format&fit=crop&q=60", 
    category: "Apple", 
    stock: 10 
  },
  { 
    id: 2, 
    name: "Samsung Galaxy S24 Ultra", 
    price: 31990000, 
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&auto=format&fit=crop&q=60", 
    category: "Samsung", 
    stock: 5 
  },
  { 
    id: 3, 
    name: "Xiaomi 14 Ultra", 
    price: 28990000, 
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60", 
    category: "Xiaomi", 
    stock: 0 
  },
  { 
    id: 4, 
    name: "OPPO Find X7 Ultra", 
    price: 26990000, 
    image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=500&auto=format&fit=crop&q=60", 
    category: "OPPO", 
    stock: 8 
  },
  { 
    id: 5, 
    name: "Google Pixel 8 Pro", 
    price: 24990000, 
    image: "https://images.unsplash.com/photo-1598327106021-4bc4d83c0b71?w=500&auto=format&fit=crop&q=60", 
    category: "Google", 
    stock: 15 
  },
  { 
    id: 6, 
    name: "Sony Xperia 1 V", 
    price: 29990000, 
    image: "https://images.unsplash.com/photo-1583573636246-18d1b3c8fcb1?w=500&auto=format&fit=crop&q=60", 
    category: "Sony", 
    stock: 3 
  },
  { 
    id: 7, 
    name: "ASUS ROG Phone 8 Pro", 
    price: 25990000, 
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500&auto=format&fit=crop&q=60", 
    category: "ASUS", 
    stock: 0 
  },
  { 
    id: 8, 
    name: "Nothing Phone (2)", 
    price: 15990000, 
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=500&auto=format&fit=crop&q=60", 
    category: "Nothing", 
    stock: 20 
  },
];