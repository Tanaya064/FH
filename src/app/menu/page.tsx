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

// Image identity verification key (what each URL actually shows):
// b75/e23d... = Manchow Soup          | a23/db35... = Crispy Corn
// 7aa/9a35... = Pepper Paneer+broccoli | 423/6f90... = Chilly Paneer
// 670/9e7c... = Pepper Paneer platter  | 84c/281e... = Manchurian bowl
// da4/527d... = Honey Chilli Potato    | 929/12ec... = Manchurian Dry
// b74/c927... = Margarita Pizza        | faa/1a8b... = Farm Fresh Pizza
// 157/3a96... = Paneer Tikka Pizza     | fc5/fcb3... = Paneer Tikka Pizza alt
// cf0/6c91... = Crispy Chicken Strips  | b3a/5978... = Chicken Pizza
// 378/4d2e... = Penne Pasta            | 222/e92d... = Pasta + Garlic Bread
// 51f/07af... = Egg Fried Rice         | fa3/dbf6... = Manchow Soup
// 78c/366d... = Pepper Chicken boat    | 4ac/3cb7... = Honey Chilli Potato alt
// 1c9/2a4f... = Pepper Chicken skillet | 8f6/5cab... = Chicken Lollipop
// 89c/a386... = Manchurian Dry bowl    | fb4/59d9... = Chilli Paneer+dips
// 0ab/558b... = Pasta + Garlic Bread   | c26/f1f0... = Cheesy Loaded Fries
// c48/aec5... = Mac & Cheese + Bread   | 6eb/3ac5... = Cheesy Loaded Fries
// d94/b491... = Egg Masala             | a5a/e3af... = Sweet Corn Soup
// 97e/64b6... = Manchow Soup           | 811/215d... = Manchurian Gravy

const menuCategories: MenuCategory[] = [
    {
        name: "Appetizers & Starters",
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
        name: "Burgers & Sandwiches",
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
        name: "Pizzas & Pasta",
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
        name: "Rice, Noodles & Biryani",
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
        name: "Maggi & Omelettes",
        emoji: "🍳",
        items: [
            { name: "Chicken Maggi", price: "₹170", desc: "India's favorite noodles loaded with juicy chicken bits.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg", tag: "Bestseller" },
            { name: "Creamy Cheese Maggi", price: "₹160", desc: "Maggi topped with a generous layer of melted creamy cheese.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Punjabi Maggi", price: "₹160", desc: "Spiced Maggi prepared with a rich Punjabi-style masala blend.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Your Choice Maggi", price: "₹150", desc: "Customise your Maggi with your favourite toppings and flavors.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Tadka Maggi", price: "₹140", desc: "Classic Maggi with a desi tadka of onions, tomatoes, and spices.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Masala Maggi", price: "₹130", desc: "The OG street-style Maggi with extra masala punch.", image: "https://b.zmtcdn.com/data/dish_photos/2ac/6a2b698c1a61e3dc8e45ce73da8392ac.jpeg" },
            { name: "Masala Omelette", price: "₹140", desc: "Fluffy omelette loaded with onions, tomatoes, and green chillies.", image: "https://b.zmtcdn.com/data/dish_photos/68f/0bfd9b64eda13a1836dcb6534b7e568f.jpg" },
            { name: "Fuel Cream And Cheese Omelette", price: "₹140", desc: "Our signature omelette filled with cream cheese and herbs.", image: "https://b.zmtcdn.com/data/dish_photos/68f/0bfd9b64eda13a1836dcb6534b7e568f.jpg" },
            { name: "Minty Sausage Roulade", price: "₹170", desc: "Savory sausage rolled with fresh mint and spices, grilled to perfection.", image: "https://b.zmtcdn.com/data/dish_photos/6eb/3ac5cf3942caf0cfa4bd9404ea3086eb.jpeg" },
        ]
    },
    {
        name: "Sides, Soups & Salads",
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

    return (
        <main className="min-h-screen bg-neutral-950 text-primary-100 flex flex-col font-sans">

            <div className="flex-grow pt-32 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="text-primary-400 font-bold tracking-widest uppercase text-sm mb-4 block drop-shadow-sm">
                            Our Complete Menu
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-heading)] leading-tight uppercase tracking-widest text-shadow-sm">
                            Full <span className="text-accent italic drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">Menu.</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-neutral-400 font-light drop-shadow-sm">
                            Explore everything Fuel Headquarters has to offer — from spicy starters to loaded pizzas, comforting Maggi bowls, and refreshing beverages.
                        </p>
                    </div>

                    {/* Category Tabs - Horizontal scrollable */}
                    <div className="mb-16 sticky top-[64px] z-30 bg-neutral-950/95 backdrop-blur-md py-4 -mx-4 px-4 border-b border-primary-900/50">
                        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide max-w-7xl mx-auto">
                            {menuCategories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setActiveCategory(idx);
                                        document.getElementById(`category-${idx}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                    }}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border ${
                                        activeCategory === idx
                                            ? "bg-accent/20 border-accent text-accent shadow-[0_0_15px_rgba(139,0,0,0.3)]"
                                            : "bg-neutral-900 border-primary-800/50 text-primary-300 hover:bg-neutral-800 hover:border-primary-600"
                                    }`}
                                >
                                    <span className="text-base">{cat.emoji}</span>
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Menu Sections */}
                    <div className="space-y-20">
                        {menuCategories.map((category, idx) => (
                            <section key={idx} id={`category-${idx}`} className="relative scroll-mt-36">
                                {/* Decorative divider */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary-800 to-transparent"></div>

                                {/* Category Header */}
                                <div className="flex items-center justify-center gap-4 mt-8 mb-10">
                                    <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-primary-700"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary-200 font-[family-name:var(--font-heading)] uppercase tracking-wider flex items-center gap-3">
                                        <span className="text-3xl">{category.emoji}</span>
                                        {category.name}
                                    </h2>
                                    <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-primary-700"></div>
                                </div>

                                {/* Menu Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {category.items.map((item, idy) => (
                                        <div
                                            key={idy}
                                            className="group bg-neutral-900 rounded-sm overflow-hidden border border-primary-800/50 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(139,0,0,0.15)] flex flex-col"
                                        >
                                            {/* Food Image */}
                                            <div className="relative h-48 overflow-hidden bg-neutral-800">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80"></div>

                                                {/* Price Badge */}
                                                <div className="absolute bottom-3 right-3 bg-neutral-950/90 backdrop-blur-sm border border-accent/50 rounded-sm px-3 py-1.5">
                                                    <span className="text-accent font-bold tracking-wider text-sm drop-shadow-[0_0_8px_rgba(139,0,0,0.8)]">
                                                        {item.price}
                                                    </span>
                                                </div>

                                                {/* Tag Badge */}
                                                {item.tag && (
                                                    <div className={`absolute top-3 left-3 rounded-sm px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${
                                                        item.tag === "Bestseller"
                                                            ? "bg-accent/90 text-white"
                                                            : "bg-primary-500/90 text-white"
                                                    }`}>
                                                        {item.tag}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Food Info */}
                                            <div className="p-5 flex-grow flex flex-col">
                                                <h3 className="text-lg font-bold text-primary-100 font-[family-name:var(--font-heading)] uppercase tracking-wider group-hover:text-primary-400 transition-colors mb-2">
                                                    {item.name}
                                                </h3>
                                                <p className="text-neutral-500 font-light text-sm leading-relaxed flex-grow">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Order CTA */}
                    <div className="mt-24 pt-12 border-t border-primary-900 text-center">
                        <p className="text-neutral-400 font-light mb-6 text-lg">Can&apos;t make it to the cafe? Order your favorites online!</p>
                        <a
                            href="https://www.swiggy.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-accent hover:bg-neutral-950 border border-accent text-white rounded-none font-bold text-lg uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(139,0,0,0.4)] hover:shadow-[0_0_30px_rgba(139,0,0,0.6)]"
                        >
                            Order on Swiggy
                        </a>
                    </div>
                </div>
            </div>

        </main>
    );
}
