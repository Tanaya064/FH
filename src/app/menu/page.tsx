"use client";

import { useState } from "react";

interface MenuItem {
    name: string;
    price: string;
    desc: string;
    image: string;
    tag?: string;
}

interface MenuCategory {
    name: string;
    emoji: string;
    items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
    {
        name: "Starters",
        emoji: "🍢",
        items: [
            { name: "Pepper Chicken", price: "₹220", desc: "Spicy and peppery chicken bites tossed with fresh curry leaves and green chillies.", image: "https://b.zmtcdn.com/data/dish_photos/78c/366da1a6ffd3b7b734c518f71879878c.jpeg", tag: "Bestseller" },
            { name: "Honey Chilli Potato", price: "₹190", desc: "Crispy potato fingers tossed in a sweet, tangy honey-chilli sauce.", image: "https://b.zmtcdn.com/data/dish_photos/da4/527df46f247b747fc4103fddcad55da4.jpeg", tag: "Popular" },
            { name: "Pepper Paneer", price: "₹210", desc: "Soft paneer cubes stir-fried with crushed black pepper and spices.", image: "https://b.zmtcdn.com/data/dish_photos/7aa/9a3573a96898769714753f84a11857aa.png" },
            { name: "Chilly Paneer", price: "₹200", desc: "Classic Indo-Chinese paneer tossed with bell peppers and soy sauce.", image: "https://b.zmtcdn.com/data/dish_photos/423/6f90c122f0e1008a8240107cd7910423.jpeg" },
            { name: "Crispy Corn", price: "₹170", desc: "Deep-fried golden corn kernels seasoned with salt, pepper, and spices.", image: "https://b.zmtcdn.com/data/dish_photos/a23/db35c0d6b7a821478fef0d92c35c4a23.jpeg" },
            { name: "Manchurian", price: "₹170", desc: "Vegetable balls in a tangy, spicy soy-based Manchurian gravy.", image: "https://b.zmtcdn.com/data/dish_photos/84c/281e372b62a5e27b965fa84c63cd484c.jpeg" },
        ]
    },
    {
        name: "Burgers",
        emoji: "🍔",
        items: [
            { name: "Chicken Tikki Cheese Burger", price: "₹210", desc: "Juicy chicken tikka patty topped with melted cheese, lettuce, and special sauce.", image: "https://b.zmtcdn.com/data/dish_photos/66e/a4df57321afafd226b6f6df87f1ef66e.jpeg", tag: "Bestseller" },
            { name: "Paneer Oriental Burger", price: "₹160", desc: "Crispy paneer patty with oriental mayo and fresh veggies.", image: "https://b.zmtcdn.com/data/dish_photos/2e2/b132060f0876f10312861bc2974a42e2.jpeg" },
            { name: "Veggie Tikki Burger", price: "₹130", desc: "Classic veggie tikki with crisp lettuce, onions, and tangy ketchup.", image: "https://b.zmtcdn.com/data/dish_photos/2e2/b132060f0876f10312861bc2974a42e2.jpeg" },
            { name: "Hot & Crispy Chicken Sandwich", price: "₹180", desc: "Toasted sandwich loaded with crispy fried chicken and creamy mayo.", image: "https://b.zmtcdn.com/data/dish_photos/7a0/564b2df083b26af1ccfe9d5ba1e7b7a0.jpg" },
            { name: "Hot & Crispy Chicken Panini", price: "₹200", desc: "Grilled panini with crispy chicken, cheese, and fresh herbs.", image: "https://b.zmtcdn.com/data/dish_photos/7a0/564b2df083b26af1ccfe9d5ba1e7b7a0.jpg" },
            { name: "Cottage Cheese Panini", price: "₹180", desc: "Grilled panini stuffed with seasoned cottage cheese and vegetables.", image: "https://b.zmtcdn.com/data/dish_photos/66e/a4df57321afafd226b6f6df87f1ef66e.jpeg" },
        ]
    },
    {
        name: "Pizza & Pasta",
        emoji: "🍕",
        items: [
            { name: "Margarita Pizza", price: "₹285", desc: "Classic pizza with fresh mozzarella, tomato sauce, and fragrant basil.", image: "https://b.zmtcdn.com/data/dish_photos/b74/c9270c846125962887ef8bc2fafc3b74.jpg" },
            { name: "Roasted Garlic Pizza", price: "₹320", desc: "Topped with roasted garlic cloves, olive oil, and melty cheese.", image: "https://b.zmtcdn.com/data/dish_photos/157/3a96548e26f63f49716ec3e847f3a157.jpg" },
            { name: "Farm Fresh Pizza", price: "₹360", desc: "Loaded with seasonal fresh vegetables and a blend of cheeses.", image: "https://b.zmtcdn.com/data/dish_photos/faa/1a8b548a1cd0b7e2a2a85d556e2bbfaa.jpeg", tag: "Popular" },
            { name: "Chicken Crust Pizza", price: "₹380", desc: "Unique pizza with a crispy chicken-infused crust and classic toppings.", image: "https://b.zmtcdn.com/data/dish_photos/b3a/5978cc9da73bf62bd9aea697ec90fb3a.jpeg" },
            { name: "Chicken Pepperoni Pizza", price: "₹395", desc: "Spicy chicken pepperoni with stretchy mozzarella on a thin crust.", image: "https://b.zmtcdn.com/data/dish_photos/b3a/5978cc9da73bf62bd9aea697ec90fb3a.jpeg", tag: "Bestseller" },
            { name: "Grill Chicken Pizza", price: "₹395", desc: "Smoky grilled chicken chunks with onions, peppers, and BBQ drizzle.", image: "https://b.zmtcdn.com/data/dish_photos/fc5/fcb3d8b6134a44a95377a3825c1c7fc5.jpg" },
            { name: "Mac and Cheese Pasta", price: "₹300", desc: "Creamy, cheesy pasta baked to golden perfection — a true comfort classic.", image: "https://b.zmtcdn.com/data/dish_photos/c48/aec551c6cf853c5c2a9a836274fbbc48.jpg", tag: "Popular" },
            { name: "Penne Arrabbiata", price: "₹280", desc: "Penne pasta tossed in a spicy, garlicky tomato sauce with herbs.", image: "https://b.zmtcdn.com/data/dish_photos/378/4d2e0aae4bf31f9195f7e2d3545a6378.jpeg" },
        ]
    },
    {
        name: "Rice & Noodles",
        emoji: "🍜",
        items: [
            { name: "Singapuri Rice", price: "₹180", desc: "Fragrant rice stir-fried with vegetables in a signature Singaporean sauce.", image: "https://b.zmtcdn.com/data/dish_photos/ba0/d192d28bf00e27f5b6111296ee37aba0.jpeg" },
            { name: "Singapuri Noodles", price: "₹180", desc: "Thin noodles tossed with fresh vegetables in a mildly spiced curry flavor.", image: "https://b.zmtcdn.com/data/dish_photos/702/591dc9d0c7fd8e66c33153afb9198702.jpg" },
            { name: "Schezwan Rice", price: "₹180", desc: "Fiery Schezwan-spiced fried rice with crunchy vegetables.", image: "https://b.zmtcdn.com/data/dish_photos/ba0/d192d28bf00e27f5b6111296ee37aba0.jpeg" },
            { name: "Schezwan Noodles", price: "₹180", desc: "Stir-fried noodles tossed in a bold Schezwan sauce with vegetables.", image: "https://b.zmtcdn.com/data/dish_photos/5f6/488fe0ceab52be663bb383cddb8f95f6.jpg" },
            { name: "Hakka Noodles", price: "₹170", desc: "Classic Chinese-style stir-fried noodles with vegetables and soy sauce.", image: "https://b.zmtcdn.com/data/dish_photos/5f6/488fe0ceab52be663bb383cddb8f95f6.jpg", tag: "Popular" },
            { name: "Triple Schezwan Rice", price: "₹290", desc: "Triple-layered Schezwan rice loaded with extra spice and crunch.", image: "https://b.zmtcdn.com/data/dish_photos/ba0/d192d28bf00e27f5b6111296ee37aba0.jpeg" },
            { name: "Veg Biryani", price: "₹200", desc: "Aromatic basmati rice layered with spiced mixed vegetables.", image: "https://b.zmtcdn.com/data/dish_photos/ba0/d192d28bf00e27f5b6111296ee37aba0.jpeg" },
            { name: "Egg Biryani", price: "₹220", desc: "Fragrant dum-cooked biryani with perfectly spiced boiled eggs.", image: "https://b.zmtcdn.com/data/dish_photos/51f/07af4a8919eef2fb227bcbe9ecb4151f.jpg" },
        ]
    },
    {
        name: "Maggi & Eggs",
        emoji: "🍳",
        items: [
            { name: "Chicken Maggi", price: "₹170", desc: "India's favorite noodles loaded with juicy chicken bits.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg", tag: "Bestseller" },
            { name: "Creamy Cheese Maggi", price: "₹160", desc: "Maggi topped with a generous layer of melted creamy cheese.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Punjabi Maggi", price: "₹160", desc: "Spiced Maggi prepared with a rich Punjabi-style masala blend.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Your Choice Maggi", price: "₹150", desc: "Customise your Maggi with your favourite toppings and flavors.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Tadka Maggi", price: "₹140", desc: "Classic Maggi with a desi tadka of onions, tomatoes, and spices.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Masala Maggi", price: "₹130", desc: "The OG street-style Maggi with extra masala punch.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Masala Omelette", price: "₹140", desc: "Fluffy omelette loaded with onions, tomatoes, and green chillies.", image: "https://b.zmtcdn.com/data/dish_photos/68f/0bfd9b64eda13a1836dcb6534b7e568f.jpg" },
            { name: "Fuel Cream & Cheese Omelette", price: "₹140", desc: "Our signature omelette filled with cream cheese and herbs.", image: "https://b.zmtcdn.com/data/dish_photos/68f/0bfd9b64eda13a1836dcb6534b7e568f.jpg" },
            { name: "Minty Sausage Roulade", price: "₹170", desc: "Savory sausage rolled with fresh mint and spices, grilled to perfection.", image: "https://b.zmtcdn.com/data/dish_photos/6eb/3ac5cf3942caf0cfa4bd9404ea3086eb.jpeg" },
        ]
    },
    {
        name: "Sides & Soups",
        emoji: "🥗",
        items: [
            { name: "Classic Nachos", price: "₹170", desc: "Crispy tortilla chips with melted cheese, salsa, and jalapeños.", image: "https://b.zmtcdn.com/data/dish_photos/c26/f1f01ca89eb3cad0e22ea51e65ed0c26.jpg", tag: "Popular" },
            { name: "Chicken Wings", price: "₹140", desc: "Juicy chicken wings tossed in your choice of spicy or BBQ sauce.", image: "https://b.zmtcdn.com/data/dish_photos/8f6/5cab8acb400b12979ef62edf6c7c78f6.jpg", tag: "Bestseller" },
            { name: "Potato Wedges", price: "₹150", desc: "Thick-cut seasoned potato wedges, golden-fried to crispy perfection.", image: "https://b.zmtcdn.com/data/dish_photos/4ac/3cb7e72f69ac97527bcdff53064354ac.jpg" },
            { name: "Garlic Bread", price: "₹130", desc: "Toasted bread slathered with garlic butter and herbs.", image: "https://b.zmtcdn.com/data/dish_photos/63d/b842b7fc912f6a28317e38cbdd4dd63d.jpeg" },
            { name: "Veg Fuel Salad Bowl", price: "₹130", desc: "A fresh, crunchy bowl of seasonal vegetables with house dressing.", image: "https://b.zmtcdn.com/data/dish_photos/a23/db35c0d6b7a821478fef0d92c35c4a23.jpeg" },
            { name: "Veg Manchow Soup", price: "₹110", desc: "Hot and spicy Manchow soup topped with crispy noodles.", image: "https://b.zmtcdn.com/data/dish_photos/b75/e23d2628e1c0c868a0e0f27316816b75.jpg" },
            { name: "Cream Of Mushroom", price: "₹130", desc: "Rich, velvety mushroom soup with a hint of herbs and cream.", image: "https://b.zmtcdn.com/data/dish_photos/a5a/e3aff6b9f2efcd64e881e8ca97cada5a.jpeg" },
            { name: "Cream Of Chicken", price: "₹150", desc: "Creamy, comforting chicken soup with tender shredded chicken.", image: "https://b.zmtcdn.com/data/dish_photos/97e/64b6b926d7d0488ee31283d73b0cc97e.jpeg" },
            { name: "Chef Special Soup", price: "₹160", desc: "Chef's daily creation — a unique blend of seasonal flavors.", image: "https://b.zmtcdn.com/data/dish_photos/b75/e23d2628e1c0c868a0e0f27316816b75.jpg" },
        ]
    },
    {
        name: "Beverages",
        emoji: "☕",
        items: [
            { name: "Green Tea", price: "₹70", desc: "Light and refreshing Japanese-style green tea.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" },
            { name: "Fresh Lime Soda", price: "₹120", desc: "Zesty lime soda — choose sweet, salty, or a refreshing mix.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg" },
            { name: "Strawberry Soda", price: "₹170", desc: "Fizzy and fruity strawberry soda with a burst of berry flavor.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg" },
            { name: "Cold Coffee Frappe", price: "₹220", desc: "Creamy cold coffee blended to perfection, drizzled with chocolate syrup.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg", tag: "Bestseller" },
            { name: "Kit Kat Shake", price: "₹240", desc: "Thick and creamy shake blended with real Kit Kat chunks.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg", tag: "Popular" },
            { name: "Virgin Mojito", price: "₹180", desc: "Cool and refreshing mojito with crushed mint, lime, and soda.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/2444a43366abb328c36e66127f5ff965.jpg", tag: "Popular" },
            { name: "Artisan Coffee", price: "₹250", desc: "Dark, robust beans roasted to perfection for a bold, flavorful cup.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" },
            { name: "Nutrela Mocha", price: "₹280", desc: "A nostalgic blend of rich chocolate and strong espresso.", image: "https://b.zmtcdn.com/data/pictures/0/3301080/9486ee40ff684e1d72283f1b9a884d05.jpg" },
        ]
    },
    {
        name: "Desserts",
        emoji: "🍫",
        items: [
            { name: "Hot Sizzling Brownie", price: "₹230", desc: "Warm chocolate brownie served on a sizzling plate with ice cream and chocolate sauce.", image: "/images/sizzling_brownie.png", tag: "Bestseller" },
            { name: "Oreo Jars", price: "₹140", desc: "Layered dessert jar with crushed Oreos, cream cheese, and chocolate sauce.", image: "/images/oreo_jar.png", tag: "Popular" },
            { name: "Brownie Jars", price: "₹200", desc: "Layers of decadent chocolate brownie chunks and thick whipped cream.", image: "/images/sizzling_brownie.png" },
        ]
    },
];

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(0);

    const scrollToCategory = (idx: number) => {
        setActiveCategory(idx);
        const el = document.getElementById(`category-${idx}`);
        if (el) {
            const offset = 130;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-screen bg-[#fdf6e9]">
            {/* Page Header */}
            <div className="bg-white border-b border-primary-100 pt-24 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-3 block">Our Complete Menu</span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 font-[family-name:var(--font-heading)] leading-tight mb-4">
                        Full Menu
                    </h1>
                    <p className="text-neutral-500 max-w-xl mx-auto text-base">
                        From spicy starters to loaded pizzas, comforting Maggi bowls, and refreshing beverages — there's something for everyone.
                    </p>
                </div>
            </div>

            {/* Sticky Category Tabs */}
            <div className="sticky top-[60px] z-30 bg-[#fdf6e9]/95 backdrop-blur-md border-b border-primary-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto gap-2 py-3 scrollbar-hide">
                        {menuCategories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToCategory(idx)}
                                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                                    activeCategory === idx
                                        ? "bg-primary-600 border-primary-600 text-white shadow-sm"
                                        : "bg-white border-primary-200 text-neutral-600 hover:border-primary-400 hover:text-primary-700"
                                }`}
                            >
                                <span>{cat.emoji}</span>
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
                {menuCategories.map((category, idx) => (
                    <section key={idx} id={`category-${idx}`} className="scroll-mt-36">
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">{category.emoji}</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 font-[family-name:var(--font-heading)]">
                                {category.name}
                            </h2>
                            <div className="flex-1 h-px bg-primary-200 ml-2" />
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.items.map((item, idy) => (
                                <div
                                    key={idy}
                                    className="bg-white rounded-2xl overflow-hidden border border-primary-100 hover:shadow-md transition-shadow group flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative h-44 sm:h-48 overflow-hidden bg-primary-50">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        {item.tag && (
                                            <div className={`absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full ${
                                                item.tag === "Bestseller" ? "bg-primary-600" : "bg-neutral-700"
                                            }`}>
                                                {item.tag}
                                            </div>
                                        )}
                                    </div>

                                    {/* Info */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <div className="flex items-start justify-between gap-2 mb-1.5">
                                            <h3 className="font-bold text-neutral-900 font-[family-name:var(--font-heading)] text-base leading-snug flex-1">
                                                {item.name}
                                            </h3>
                                            <span className="text-primary-600 font-bold text-sm whitespace-nowrap">{item.price}</span>
                                        </div>
                                        <p className="text-neutral-500 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* Order CTA */}
                <div className="py-12 text-center border-t border-primary-200">
                    <p className="text-neutral-500 mb-5 text-base">Can't make it to the cafe? Order your favorites online!</p>
                    <a
                        href="https://www.swiggy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm tracking-wide rounded-full transition-colors"
                    >
                        Order on Swiggy
                    </a>
                </div>
            </div>
        </main>
    );
}
