export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isTrending?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Leather Tote",
    slug: "classic-leather-tote",
    price: 129.99,
    category: "Totes",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    isTrending: true,
  },
  {
    id: "2",
    name: "Minimalist Crossbody Bag",
    slug: "minimalist-crossbody-bag",
    price: 89.50,
    category: "Crossbody",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    reviews: 89,
    isNew: true,
  },
  {
    id: "3",
    name: "Structured Work Satchel",
    slug: "structured-work-satchel",
    price: 195.00,
    category: "Satchels",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    reviews: 215,
    isTrending: true,
  },
  {
    id: "4",
    name: "Weekend Travel Duffel",
    slug: "weekend-travel-duffel",
    price: 145.00,
    category: "Travel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    reviews: 56,
  },
  {
    id: "5",
    name: "Elegant Evening Clutch",
    slug: "elegant-evening-clutch",
    price: 75.00,
    category: "Clutches",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
    rating: 4.6,
    reviews: 34,
    isNew: true,
  },
  {
    id: "6",
    name: "Canvas Shopper",
    slug: "canvas-shopper",
    price: 45.00,
    category: "Totes",
    image: "https://images.unsplash.com/photo-1622560419071-383748240243?q=80&w=800&auto=format&fit=crop",
    rating: 4.4,
    reviews: 112,
  },
];
