export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-tote-bags-work-2026",
    title: "Best Tote Bags for Work in 2026",
    excerpt: "Discover the most stylish and functional tote bags that will elevate your office look this year.",
    date: "February 10, 2026",
    author: "Emma Style",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    content: "Content placeholder...",
  },
  {
    slug: "top-10-crossbody-bags-travel",
    title: "Top 10 Crossbody Bags for Travel",
    excerpt: "Travel light and stylish with these top-rated crossbody bags perfect for your next adventure.",
    date: "January 28, 2026",
    author: "Sarah Wanderlust",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    content: "Content placeholder...",
  },
  {
    slug: "how-to-care-for-leather-bags",
    title: "How to Care for Your Leather Bags",
    excerpt: "Learn the essential tips and tricks to keep your luxury leather bags looking brand new for years.",
    date: "January 15, 2026",
    author: "Leather Expert",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    content: "Content placeholder...",
  },
];
