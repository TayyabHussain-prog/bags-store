import { Product } from "@/lib/products";
import { ProductCard } from "@/components/product/product-card";

interface ProductGridProps {
    products: Product[];
    title?: string;
}

export function ProductGrid({ products, title }: ProductGridProps) {
    return (
        <section className="py-12">
            {title && (
                <h2 className="text-3xl font-serif font-bold text-center mb-8">{title}</h2>
            )}
            <div className="container">
                {/* Simple grid for now, can be upgraded to masonry later */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
