import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-secondary/30">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
                    alt="Fashion Banner"
                    fill
                    priority
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 text-center text-white space-y-6">
                <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight drop-shadow-md">
                    Elevate Your Style
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-sm opacity-90 text-balance">
                    Discover our curated collection of luxury handbags, chic totes, and travel essentials designed for the modern woman.
                </p>
                <div className="flex gap-4 justify-center pt-4">
                    <Button size="lg" className="bg-white text-black hover:bg-white/90 border-none transition-colors duration-200">
                        <Link href="/shop/new-arrivals">Shop New Arrivals</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white bg-transparent hover:bg-white/20 transition-colors duration-200">
                        <Link href="/shop/all">Explore Collection</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
