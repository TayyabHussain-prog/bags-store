import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur z-[100]">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-6 w-6" />
                        <span className="font-serif text-xl font-bold">Global Store</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="/shop/new-arrivals"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            New Arrivals
                        </Link>
                        <Link
                            href="/shop/tote-bags"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Totes
                        </Link>
                        <Link
                            href="/shop/crossbody"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Crossbody
                        </Link>
                        <Link
                            href="/blog"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Blog
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <form className="hidden lg:flex items-center relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="search"
                            placeholder="Search bags..."
                            className="rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                    </form>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
