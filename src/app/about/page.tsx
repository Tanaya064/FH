import { Metadata } from 'next';
import { Coffee } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Fuel Headquarters',
    description: 'Learn about our passion for artisan coffee, great food, and creating the perfect co-working environment in Nagpur.',
};

export default function AboutPage() {
    return (
        <main className="pt-24 pb-16 min-h-[calc(100vh-80px)] xl:min-h-screen container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 md:p-12 rounded-3xl border border-primary-100 mt-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 blur-[80px] rounded-full pointer-events-none" />

                <div className="flex items-center justify-center mb-8">
                    <div className="h-20 w-20 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                        <Coffee className="w-10 h-10" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-center text-neutral-900 mb-6 font-[family-name:var(--font-heading)]">Our Story</h1>

                <div className="prose prose-lg mx-auto text-neutral-600 font-light leading-relaxed">
                    <p>
                        Fuel Headquarters started with a simple vision: to bring Nagpur a space where artisan coffee meets productive co-working and casual hangouts. We believe that great ideas are born over great food and the perfect cup of coffee.
                    </p>
                    <p className="mt-4">
                        Located conveniently next to Pizza Hut in Laxmi Nagar, we've designed every corner of Fuel HQ to provide a unique aesthetic, comfortable seating, and an ambience that fuels creativity.
                    </p>
                    <div className="mt-8 border-t border-primary-100 pt-8 text-center">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4 font-[family-name:var(--font-heading)]">Our Values</h2>
                        <ul className="text-left max-w-sm mx-auto space-y-3">
                            <li className="flex items-center"><span className="text-primary-500 mr-2">✓</span> Premium Quality Ingredients</li>
                            <li className="flex items-center"><span className="text-primary-500 mr-2">✓</span> Unmatched Customer Service</li>
                            <li className="flex items-center"><span className="text-primary-500 mr-2">✓</span> Inspiring Ambience</li>
                            <li className="flex items-center"><span className="text-primary-500 mr-2">✓</span> Community First</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
