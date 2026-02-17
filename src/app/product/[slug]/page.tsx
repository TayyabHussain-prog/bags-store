import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductGallery } from "@/components/product/product-gallery";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/products";
import { Star, Truck, ShieldCheck, Share2 } from "lucide-react";

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    // Mock multiple images using the same one for now
    const productImages = [
        product.image,
        product.image,
        product.image,
        product.image,
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <ProductGallery images={productImages} name={product.name} />

                        <div className="space-y-8">
                            <div>
                                <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{product.category}</p>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{product.name}</h1>
                                <div className="flex items-center gap-4 mt-4">
                                    <div className="flex items-center text-yellow-500">
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <Star className="w-4 h-4 fill-current" />
                                        <span className="ml-2 text-muted-foreground text-sm">({product.reviews} reviews)</span>
                                    </div>
                                    {product.isNew && (
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">New Arrival</span>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
                                <p className="text-muted-foreground">Free shipping on all US orders.</p>
                            </div>

                            <div className="prose prose-sm text-muted-foreground">
                                <p>
                                    Experience luxury with the {product.name}. Crafted from premium materials, this bag features a spacious interior, durable hardware, and a timeless design that complements any outfit. Perfect for work, travel, or a night out.
                                </p>
                                <ul className="mt-4 list-disc list-inside space-y-1">
                                    <li>Premium vegan leather</li>
                                    <li>Gold-tone hardware</li>
                                    <li>Adjustable strap</li>
                                    <li>Interior zip pocket</li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Affiliate Link Button */}
                                <Button size="lg" className="w-full text-lg h-14" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        Buy Now on Amazon
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" className="w-full">
                                    Add to Wishlist
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-6 border-t">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Truck className="w-4 h-4" />
                                    <span>Free Shipping & Returns</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>2-Year Warranty</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
