import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-serif font-bold">Global Store</h3>
                        <p className="text-sm text-muted-foreground">
                            Curating the finest women's bags for every occasion. Affiliate links used on this site may earn us a commission.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Shop</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/shop/all" className="text-muted-foreground hover:text-primary">All Bags</Link></li>
                            <li><Link href="/shop/new" className="text-muted-foreground hover:text-primary">New Arrivals</Link></li>
                            <li><Link href="/shop/bestsellers" className="text-muted-foreground hover:text-primary">Bestsellers</Link></li>
                            <li><Link href="/shop/sale" className="text-muted-foreground hover:text-primary">Sale</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-4">Newsletter</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                            />
                            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                                Join
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Global Store. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
