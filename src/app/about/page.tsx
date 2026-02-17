import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">About Global Store</h1>

                    <div className="prose prose-lg mx-auto">
                        <p className="lead text-xl text-center mb-12 text-muted-foreground">
                            We are dedicated to curating the world's finest selection of women's bags, helping you find the perfect accessory for every moment of your life.
                        </p>

                        <h2 className="font-serif">Our Story</h2>
                        <p>
                            Founded in 2024, Global Store began with a simple mission: to make luxury and high-quality bags accessible to women everywhere. We believe that a great bag is more than just an accessory—it's a statement of style, a tool for organization, and a companion for life's adventures.
                        </p>
                        <p>
                            Our team of fashion enthusiasts scours the globe (and the internet) to find the best totes, crossbodies, backpacks, and clutches. We test, review, and curate only the items we would use ourselves.
                        </p>

                        <h2 className="font-serif">Our Promise</h2>
                        <p>
                            We are committed to transparency and quality. When we recommend a product, it's because we genuinely believe in its value. Whether you're looking for a durable work bag or a chic evening clutch, we've done the research so you don't have to.
                        </p>

                        <h2 className="font-serif">Connect With Us</h2>
                        <p>
                            We love hearing from our community. Follow us on social media for daily inspiration, or sign up for our newsletter to stay ahead of the trends.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
