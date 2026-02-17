import Link from "next/link";
import Image from "next/image";

const categories = [
    {
        name: "Tote Bags",
        slug: "tote-bags",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Crossbody",
        slug: "crossbody",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Backpacks",
        slug: "backpacks",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    },
    {
        name: "Travel Bags",
        slug: "travel-bags",
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop",
    },
];

export function CategoryGrid() {
    return (
        <section className="py-16 bg-secondary/20">
            <div className="container">
                <h2 className="text-3xl font-serif font-bold text-center mb-12">Shop by Category</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category) => (
                        <Link
                            key={category.slug}
                            href={`/shop/${category.slug}`}
                            className="group relative aspect-square overflow-hidden rounded-lg bg-background"
                        >
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white font-serif text-xl font-bold tracking-wide drop-shadow-md border-b-2 border-transparent group-hover:border-white transition-all">
                                    {category.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
