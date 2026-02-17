import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12">
                <div className="container max-w-3xl">
                    <h1 className="text-3xl font-serif font-bold mb-8">Privacy Policy & Affiliate Disclosure</h1>

                    <div className="prose prose-sm md:prose-base text-muted-foreground">
                        <h2 className="text-foreground">Affiliate Disclosure</h2>
                        <p>
                            <strong>Global Store is a participant in the Amazon Services LLC Associates Program</strong>, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                        </p>
                        <p>
                            This means that if you click on a link to a product on this site and make a purchase, we may earn a small commission at no extra cost to you. This helps support our work in curating the best products for you.
                        </p>
                        <p>
                            We also participate in other affiliate programs and may earn commissions through purchases made through our links. We utilize Skimlinks and other affiliate networks.
                        </p>

                        <h2 className="text-foreground mt-8">Privacy Policy</h2>
                        <p>Last updated: February 2026</p>
                        <p>
                            Your privacy is important to us. It is Global Store's policy to respect your privacy regarding any information we may collect from you across our website.
                        </p>

                        <h3 className="text-foreground">Information We Collect</h3>
                        <p>
                            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
                        </p>

                        <h3 className="text-foreground">Cookies</h3>
                        <p>
                            We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.
                        </p>

                        <h3 className="text-foreground">Third-Party Services</h3>
                        <p>
                            We may employ third-party companies and individuals due to the following reasons:
                        </p>
                        <ul>
                            <li>To facilitate our Service;</li>
                            <li>To provide the Service on our behalf;</li>
                            <li>To perform Service-related services; or</li>
                            <li>To assist us in analyzing how our Service is used.</li>
                        </ul>
                        <p>
                            I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
