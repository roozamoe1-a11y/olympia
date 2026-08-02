export type Product = {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  rating?: string;
  stock?: boolean;
  category?: string;
};


export const products: Product[] = [
  {
    id: 1,
    name: "Gold Standard Whey",
    brand: "Optimum Nutrition",
    image: "/images/whey.jpg",
    price: 4390000,
    oldPrice: 4990000,
    discount: 12,
    rating: "★★★★★",
    stock: true,
    category: "پروتئین",
  },

  {
    id: 2,
    name: "Gold Whey",
    brand: "Kevin Levrone",
    image: "/images/levrone.jpg",
    price: 3890000,
    oldPrice: 4350000,
    discount: 10,
    rating: "★★★★★",
    stock: true,
    category: "پروتئین",
  },
];