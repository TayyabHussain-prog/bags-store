import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/layout/hero";
import { ProductGrid } from "@/components/product/product-grid";
import { CategoryGrid } from "@/components/layout/category-grid";
import { products } from "@/lib/products";

export default function Home() {
    const trendingProducts = products.filter(p => p.isTrending).slice(0, 4);
    const newArrivals = products.filter(p => p.isNew).slice(0, 4);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
                <Hero />

                <CategoryGrid />

                <ProductGrid title="Trending Now" products={trendingProducts} />

                <section className="py-16 bg-primary/5 text-center">
                    <div className="container">
                        <h2 className="text-3xl font-serif font-bold mb-4">New Season Arrivals</h2>
                        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
                            Explore our latest collection of hand-picked bags that define modern elegance.
                        </p>
                        <ProductGrid products={newArrivals} />
                    </div>
                </section>

                <section className="py-20 bg-muted/30">
                    <div className="container max-w-4xl text-center space-y-6">
                        <h2 className="text-3xl font-serif font-bold">Join the Global Style Club</h2>
                        <p className="text-muted-foreground text-lg text-balance">
                            Subscribe to our newsletter and get exclusive access to new drops, style guides, and special offers.
                        </p>
                        <form className="max-w-md mx-auto flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 rounded-md border border-input bg-background px-4 py-3 text-base"
                            />
                            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

