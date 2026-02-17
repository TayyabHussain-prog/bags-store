import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { blogPosts, BlogPost } from "@/lib/blog-posts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12">
                <article className="container max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Journal
                    </Link>

                    <header className="mb-10 text-center space-y-4">
                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>By {post.author}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-balance">
                            {post.title}
                        </h1>
                    </header>

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-12 bg-muted">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="prose prose-lg mx-auto">
                        <p className="lead">{post.excerpt}</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <h2>The Perfect Accessory</h2>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <blockquote>
                            "Fashion is about dressing according to what's fashionable. Style is more about being yourself." — Oscar de la Renta
                        </blockquote>
                        <h3>Key Features to Look For</h3>
                        <ul>
                            <li>Durability of materials</li>
                            <li>Comfortable straps</li>
                            <li>Organization pockets</li>
                            <li>Versatile design</li>
                        </ul>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>

                    <div className="mt-16 pt-8 border-t">
                        <h3 className="font-serif font-bold text-2xl mb-6">Related Articles</h3>
                        {/* Logic to show other posts could go here */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blogPosts.filter(p => p.slug !== post.slug).slice(0, 2).map(related => (
                                <Link key={related.slug} href={`/blog/${related.slug}`} className="group block">
                                    <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                                        <Image src={related.image} alt={related.title} fill className="object-cover transition-transform group-hover:scale-105" />
                                    </div>
                                    <h4 className="font-bold group-hover:text-primary transition-colors">{related.title}</h4>
                                </Link>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
