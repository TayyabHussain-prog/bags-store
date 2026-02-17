import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductGrid } from "@/components/product/product-grid";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

interface CategoryPageProps {
    params: {
        category: string;
    };
}

export function generateStaticParams() {
    const categories = ["tote-bags", "crossbody", "satchels", "travel-bags", "clutches", "new-arrivals", "all", "backpacks"];
    return categories.map((category) => ({
        category,
    }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
    const categorySlug = params.category;

    let categoryProducts = [];
    let title = "";

    if (categorySlug === "all") {
        categoryProducts = products;
        title = "All Bags";
    } else if (categorySlug === "new-arrivals") {
        categoryProducts = products.filter(p => p.isNew);
        title = "New Arrivals";
    } else {
        // Basic mapping from slug to category name for filtering
        const categoryMap: Record<string, string> = {
            "tote-bags": "Totes",
            "crossbody": "Crossbody",
            "satchels": "Satchels",
            "travel-bags": "Travel",
            "clutches": "Clutches",
            "backpacks": "Backpacks",
        };

        const mappedName = categoryMap[categorySlug];

        if (mappedName) {
            categoryProducts = products.filter(p => p.category === mappedName);
            title = mappedName;
        } else {
            // Fallback: Try to match loosely
            const formattedName = categorySlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            title = formattedName;

            // Search in category string case-insensitive
            const searchTerm = categorySlug.replace(/-/g, ' ').toLowerCase();
            categoryProducts = products.filter(p => p.category.toLowerCase().includes(searchTerm));
        }
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-serif font-bold mb-4">{title}</h1>
                        <p className="text-muted-foreground">Found {categoryProducts.length} items</p>
                    </div>
                    {categoryProducts.length > 0 ? (
                        <ProductGrid products={categoryProducts} />
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-lg text-muted-foreground">No products found in this category.</p>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
