import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="group relative break-inside-avoid mb-6 rounded-lg overflow-hidden bg-card border shadow-sm transition-all hover:shadow-md">
            <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Wishlist</span>
                </Button>
                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                        New
                    </span>
                )}
                {product.isTrending && (
                    <span className="absolute top-2 left-2 bg-secondary text-secondary-foreground text-xs font-medium px-2 py-1 rounded">
                        Trending
                    </span>
                )}
            </Link>
            <div className="p-4">
                <div className="mb-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
                    <Link href={`/product/${product.slug}`}>
                        <h3 className="font-serif font-medium text-lg leading-tight group-hover:underline">
                            {product.name}
                        </h3>
                    </Link>
                </div>
                <div className="flex items-center justify-between">
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                        <span className="text-yellow-500 mr-1">★</span>
                        {product.rating} ({product.reviews})
                    </div>
                </div>
            </div>
        </div>
    );
}
