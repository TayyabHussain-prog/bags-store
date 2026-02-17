import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts } from "@/lib/blog-posts";
import { formatDate } from "@/lib/utils";

// Add formatDate to utils first, or just inline it here for now
function formatDateString(dateStr: string) {
    return dateStr; // Mock data already has formatted strings
}

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-serif font-bold mb-4">The Global Style Journal</h1>
                        <p className="text-muted-foreground text-lg">Fashion tips, trends, and lifestyle guides.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article key={post.slug} className="group flex flex-col space-y-4">
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="space-y-2">
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <span>{post.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{post.author}</span>
                                    </div>
                                    <Link href={`/blog/${post.slug}`}>
                                        <h2 className="text-xl font-serif font-bold group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <p className="text-muted-foreground line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="inline-block text-sm font-medium underline underline-offset-4 text-primary hover:text-primary/80">
                                        Read article
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
