import { Metadata } from 'next';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | Fuel Headquarters',
    description: 'Get in touch with us. We are located at Laxmi Nagar, Nagpur. Contact us for table bookings, events or general queries.',
};

export default function ContactPage() {
    return (
        <main className="pt-24 pb-16 min-h-[calc(100vh-80px)] xl:min-h-screen container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-12 relative overflow-hidden">

                {/* Contact info list */}
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-primary-100 shadow-xl flex-1 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-[family-name:var(--font-heading)]">Contact Us</h1>
                    <p className="text-neutral-600 font-light mb-10 leading-relaxed">
                        We'd love to hear from you. Drop us a line or visit us at our cafe in Nagpur!
                    </p>

                    <div className="space-y-6 block">
                        <div className="flex items-start">
                            <MapPin className="text-primary-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900 font-[family-name:var(--font-heading)]">Address</h3>
                                <p className="text-neutral-600 font-light mt-1">Ground Ambazari Road Beside Pizza Hut<br />Laxmi Nagar, Shadhanad Peth<br />Nagpur, Maharashtra 440010</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Phone className="text-primary-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900 font-[family-name:var(--font-heading)]">Phone</h3>
                                <p className="text-neutral-600 font-light mt-1">0712 669 0111</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <Mail className="text-primary-600 w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900 font-[family-name:var(--font-heading)]">Email</h3>
                                <p className="text-neutral-600 font-light mt-1">hello@fuelhq.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="bg-primary-50 p-8 md:p-12 rounded-3xl border border-primary-100 shadow-md flex-1 relative z-10">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-neutral-800">Name</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-lg border border-primary-200 bg-white py-2 px-3 text-neutral-900 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm transition-colors cursor-text" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-neutral-800">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-lg border border-primary-200 bg-white py-2 px-3 text-neutral-900 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm transition-colors cursor-text" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-semibold text-neutral-800">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-lg border border-primary-200 bg-white py-2 px-3 text-neutral-900 shadow-sm focus:border-primary-600 focus:ring-primary-600 sm:text-sm transition-colors cursor-text" placeholder="How can we help?"></textarea>
                        </div>
                        <button type="button" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-800 hover:bg-primary-900 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 cursor-pointer">
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </main>
    );
}
