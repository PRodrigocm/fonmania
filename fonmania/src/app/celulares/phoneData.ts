export type Phone = {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  specs: {
    storage: string;
    ram: string;
    camera: string;
    battery?: string;
    screen?: string;
  };
  featured?: boolean;
  discount?: number;
  rating?: number;
  inStock: boolean;
};

export const allPhones: Phone[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    specs: {
      storage: "256GB",
      ram: "8GB",
      camera: "48MP Triple",
      battery: "3274mAh",
      screen: "6.1\" OLED"
    },
    featured: true,
    discount: 8,
    rating: 4.8,
    inStock: true
  },
  {
    id: 2,
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1099,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    specs: {
      storage: "512GB",
      ram: "12GB",
      camera: "200MP Quad",
      battery: "5000mAh",
      screen: "6.8\" AMOLED"
    },
    featured: true,
    discount: 8,
    rating: 4.7,
    inStock: true
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    specs: {
      storage: "128GB",
      ram: "12GB",
      camera: "50MP Triple",
      battery: "5050mAh",
      screen: "6.7\" OLED"
    },
    rating: 4.6,
    inStock: true
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 799,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=400&fit=crop",
    specs: {
      storage: "256GB",
      ram: "16GB",
      camera: "50MP Triple",
      battery: "5400mAh",
      screen: "6.82\" AMOLED"
    },
    discount: 11,
    rating: 4.5,
    inStock: true
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    brand: "Xiaomi",
    price: 699,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400&h=400&fit=crop",
    specs: {
      storage: "512GB",
      ram: "16GB",
      camera: "50MP Quad",
      battery: "5300mAh",
      screen: "6.73\" AMOLED"
    },
    rating: 4.4,
    inStock: false
  },
  {
    id: 6,
    name: "iPhone 14",
    brand: "Apple",
    price: 799,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    specs: {
      storage: "128GB",
      ram: "6GB",
      camera: "12MP Dual",
      battery: "3279mAh",
      screen: "6.1\" OLED"
    },
    discount: 11,
    rating: 4.3,
    inStock: true
  },
  {
    id: 7,
    name: "Galaxy A55",
    brand: "Samsung",
    price: 449,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    specs: {
      storage: "128GB",
      ram: "8GB",
      camera: "50MP Triple",
      battery: "5000mAh",
      screen: "6.6\" AMOLED"
    },
    rating: 4.2,
    inStock: true
  },
  {
    id: 8,
    name: "Nothing Phone 2",
    brand: "Nothing",
    price: 599,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    specs: {
      storage: "256GB",
      ram: "12GB",
      camera: "50MP Dual",
      battery: "4500mAh",
      screen: "6.7\" OLED"
    },
    rating: 4.1,
    inStock: true
  }
]; 