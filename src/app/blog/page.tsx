import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Blog | Fuel Headquarters',
    description: 'Read our latest insights, events updates, and coffee journeys in Nagpur.',
};

const posts = [
    {
        title: '5 Reasons Why Co-working Spaces Boost Productivity',
        excerpt: 'Discover how working in a community-driven environment like Fuel Headquarters can significantly enhance your daily output and creativity.',
        date: 'Oct 12, 2026',
        category: 'Work',
    },
    {
        title: 'The Perfect Kit Kat Shake: Our Secret Recipe',
        excerpt: 'Ever wondered what makes our famous Kit Kat shake so incredibly delicious? We reveal the passion behind our creations.',
        date: 'Sep 28, 2026',
        category: 'Food & Drink',
    },
    {
        title: 'A Guide to Exploring Nagpur’s Cafe Culture',
        excerpt: 'Nagpur has seen a massive surge in unique cafes. Learn how Fuel Headquarters fits into this vibrant and growing coffee culture.',
        date: 'Sep 10, 2026',
        category: 'Community',
    }
];

export default function BlogPage() {
    return (
        <main className="pt-24 pb-16 min-h-[calc(100vh-80px)] xl:min-h-screen container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto mt-12 mb-12 relative overflow-hidden text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-[family-name:var(--font-heading)]">Latest <span className="text-primary-600 italic">Insights</span></h1>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
                    Stay updated with the latest happenings at Fuel Headquarters, our thoughts on coffee, and the vibrant culture of Nagpur.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {posts.map((post, idx) => (
                    <article key={idx} className="bg-white rounded-2xl p-6 border border-primary-100 shadow-sm hover:shadow-xl transition-all group relative flex flex-col h-full">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">{post.category}</div>
                        <h2 className="text-2xl font-bold text-neutral-900 mb-3 font-[family-name:var(--font-heading)] group-hover:text-primary-600 transition-colors">{post.title}</h2>
                        <div className="text-sm text-neutral-400 mb-4">{post.date}</div>
                        <p className="text-neutral-600 mb-6 flex-grow leading-relaxed font-light">
                            {post.excerpt}
                        </p>
                        <Link href="#" className="inline-flex items-center font-medium text-primary-700 mt-auto group-hover:text-primary-600 transition-colors">
                            Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
