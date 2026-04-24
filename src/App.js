import { useState } from "react";


function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [selectedOutfit, setSelectedOutfit] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const total = cart.reduce((sum, item) => sum + item.price, 0);


    const outfits = [
        { id: 1, name: "Royal Bridal Lehenga", category: "Ethnic", price: 3500 , img: "https://i.pinimg.com/564x/d1/90/cc/d190cc8b0557cfe7d3fe6fa7ed5f2eb6.jpg" },
        { id: 2, name: "Pastel Wedding Lehenga", category: "Ethnic", price: 3200, img: "https://vamadesigns.com/cdn/shop/files/VamaDesigns_Products_178.png?v=1748021500" },
        { id: 3, name: "Designer Saree Lehenga", category: "Ethnic", price: 2800, img: "https://hatkebride.com/cdn/shop/files/Pink-Net-Reception-Lehenga-Choli-For-Indian-Pakist-0.jpg?v=1770286413" },
        { id: 4, name: "Heavy Embroidered Lehenga", category: "Ethnic", price: 4000, img: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/small_image/275x413/a12781a7f2ccb3d663f7fd01e1bd2e4e/d/a/dark-pink-net-embroidered-bridal-wear-lehenga-llcv113675-1.jpg" },
        { id: 5, name: "Red Bridal Lehenga Classic", category: "Ethnic", price: 4500, img: "https://khushboobaheti.com/cdn/shop/products/ReddishPinkZardoziEmbroideredwithThreadworkBridalLehengaSetByKhushbooBaheti7.jpg?v=1674484586&width=1445" },
        { id: 6, name: "Navratri Chaniya Choli", category: "Ethnic", price: 1800, img: "https://tapee.in/cdn/shop/files/MultiColorViscoseCottonMirrorWorkGhagraCholiForNavratri_4.png?v=1754992298&width=3840" },
        { id: 7, name: "Floral Festive Lehenga", category: "Ethnic", price: 2200, img: "https://amrut.co/cdn/shop/files/09_19d825f5-007b-4b9f-91da-90ae2f7ef56d.jpg?v=1735020790" },
        { id: 8, name: "Engagement Special Lehenga", category: "Ethnic", price: 3000, img: "https://ethnicsuits.in/wp-content/uploads/2025/01/bollywood-style-most-beautiful-replica-lehenga-choli-with-floral-embroidery-and-sequince-work-1.webp" },
        { id: 9, name: "Pink Princess Lehenga", category: "Ethnic", price: 2600, img: "https://i.pinimg.com/736x/a3/b9/16/a3b9160048f4b7573361fb7caad369d0.jpg" },
        { id: 10, name: "Golden Wedding Lehenga", category: "Ethnic", price: 3800, img: "https://vamadesigns.com/cdn/shop/files/VamaDesigns_Products_216.png?v=1747936964" },
        { id: 11, name: "Modern Fusion Lehenga", category: "Ethnic", price: 2400, img: "https://www.royalexport.in/product-img/bridesmaids-multicoloured-flor-1695810459.jpg" },
        { id: 12, name: "Traditional Silk Lehenga", category: "Ethnic", price: 2700, img: "https://cdn.sareeka.com/image/cache/data2024/orange-jacquard-silk-weaving-and-zari-work-lehenga-choli-for-women-287537-1000x1375.jpg" },
        { id: 13, name: "Designer Wedding Couture", category: "Ethnic", price: 5000, img: "https://www.shoppingworldyt.com/cdn/shop/files/rn-image_picker_lib_temp_85ed4c0e-4d13-45de-87c9-6218bcb878c5.jpg?v=1734463884" },
        { id: 14, name: "Festive Mirror Work Lehenga", category: "Ethnic", price: 2100, img: "https://clothsvilla.com/cdn/shop/products/1540_2048x.jpg?v=1697310781" },
        { id: 15, name: "Elegant Bridal Set Lehenga", category: "Ethnic", price: 4200, img: "https://i.pinimg.com/474x/f8/aa/3b/f8aa3bb44659860edae0401671346fab.jpg" },
        { id:16, name:"Bridal Lehenga", category:"Ethnic", price:3500, img:"https://www.royalexport.in/product-img/rani-pink-wedding-lehenga-with13-1742829077.jpg" },
        { id:17, name:"Pink Party Gown", category:"Party", price:2200, img:"https://diademstore.com/cdn/shop/files/BRGBLQPLC001MD_1_1746f0eb-c57b-41e6-ac99-af692807eb91copy.webp?v=1744102805" },
        { id:18, name:"Designer Saree", category:"Ethnic", price:1800, img:"https://i.pinimg.com/236x/27/bb/96/27bb96f0b232806fa8c59f3346d025d6.jpg" },
        { id:19, name:"Floral Summer Dress", category:"Western", price:1500, img:"https://images.unsplash.com/photo-1496747611176-843222e1e57c" },
        { id:20, name:"Wedding Lehenga Red", category:"Ethnic", price:3200, img:"https://surabhichopralabel.com/cdn/shop/files/audrey_5b6a42a9-ecd8-4195-ad31-2be09839d1e6.jpg?v=1728378538" },
        { id:21, name:"Black Evening Gown", category:"Party", price:2000, img:"https://shobitam.in/cdn/shop/files/MKJ_8020.jpg?v=1766234939&width=1080" },
        { id:22, name:"Cute Kids Dress", category:"Kids", price:900, img:"https://lagorii.com/cdn/shop/files/designer-multilayer-ruffled-maroon-gown-with-floral-embellishments-for-girls-lagorii-kids-1.jpg?v=1710335597" },
        { id:23, name:"Navratri Chaniya Choli", category:"Ethnic", price:1700, img:"https://buytwofast.com/wp-content/uploads/2024/07/ALC023F.jpg" },
        { id:24, name:"Marathi bridal outfit", category:"Western", price:700, img:"https://www.k4fashion.com/wp-content/uploads/2022/03/striking-us-with-the-marathi-warrior-look-marathi-bridal-nauvari-saree-designs.jpg" },
        { id:25, name:"Engagement Gown", category:"Party", price:2600, img:"https://roopkala.com/cdn/shop/files/Golden-Mirage-Embellished-Bridal-Gown-RKMLSI3162MS_1080x.jpg?v=1757316040" }
    ];


    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleSignup = () => {
        setIsSignup(false);
    };

    const addToCart = () => {
        if(!startDate || !endDate){
            alert("Select dates");
            return;
        }

        setCart([...cart, {...selectedOutfit, startDate, endDate}]);
        setSelectedOutfit(null);
    };

    const removeItem = (index) => {
        setCart(cart.filter((_, i) => i !== index));
    };

    const [showCheckout, setShowCheckout] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [category, setCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [wishlist, setWishlist] = useState([]);
    const [orders, setOrders] = useState([]);

    const fetchOrders = async () => {
        try {
            const res = await fetch("http://localhost:8081/bookings");
            const data = await res.json();
            setOrders(data);
        } catch {
            alert("Failed to load orders");
        }
    };


    const [viewItem, setViewItem] = useState(null)

    const [selectedSize, setSelectedSize] = useState("");
    const [availabilityMsg, setAvailabilityMsg] = useState("");

    const filteredOutfits = outfits.filter(item => {
        return (
            (category === "All" || item.category === category) &&
            item.name.toLowerCase().includes(search.toLowerCase())
        );

    });

    const getDays = () => {
        if (!startDate || !endDate) return 1;
        const d1 = new Date(startDate);
        const d2 = new Date(endDate);
        const diff = (d2 - d1) / (1000 * 60 * 60 * 24);
        return diff > 0 ? diff : 1;
    };

    return (
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-white min-h-screen">

            {/* NAVBAR */}
            <div className="bg-white/80 backdrop-blur-md shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

                <h1 className="text-2xl font-bold text-pink-600 tracking-wide">
                    JustRentIt ✨
                </h1>

                {loggedIn && (
                    <div className="flex items-center gap-4">

                        <button
                            onClick={() => setShowCart(true)}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition"
                        >
                            🛒 {cart.length}
                        </button>

                        <button
                            onClick={() => setLoggedIn(false)}
                            className="text-gray-500 hover:text-red-500"
                        >
                            Logout
                        </button>

                    </div>
                )}

            </div>


            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-center py-10 shadow">

                <h2 className="text-4xl font-bold tracking-wide">
                    Rent Your Dream Outfit 💖
                </h2>

                <p className="opacity-90 mt-2">
                    Wedding • Party • Festive • Everyday Glam
                </p>

            </div>

            {/* LOGIN */}
            {!loggedIn && (
                <div className="flex justify-center items-center h-[80vh]">
                    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden">


                        <h2 className="text-xl font-bold text-center mb-4 text-pink-600">
                            {isSignup ? "Create Account 💖" : "Welcome Back ✨"}
                        </h2>

                        <input
                            placeholder="Email"
                            className="border p-2 w-full mb-2 rounded"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            placeholder="Password"
                            className="border p-2 w-full mb-3 rounded"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            onClick={isSignup ? handleSignup : handleLogin}
                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full py-2 rounded-lg"
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </button>

                        <p
                            onClick={() => setIsSignup(!isSignup)}
                            className="text-center text-sm mt-3 text-blue-500 cursor-pointer"
                        >
                            {isSignup ? "Already have account?" : "New user? Create account"}
                        </p>

                    </div>
                </div>
            )}
            <div className="p-4 flex flex-col md:flex-row gap-3 items-center justify-between">

                {/* CATEGORY FILTER */}
                <div className="flex gap-2">
                    {["All","Ethnic","Party","Western"].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`px-3 py-1 rounded-full text-sm ${
                                category === cat
                                    ? "bg-pink-500 text-white"
                                    : "bg-gray-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* SEARCH */}
                <input
                    placeholder="Search outfits..."
                    className="border p-2 rounded w-full md:w-64"
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>



            {/* PRODUCTS */}
            {loggedIn && (
                <div className="p-8">

                    <h2 className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300">
                        Explore Outfits 💃
                    </h2>
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
  Trending
</span>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {filteredOutfits.map((item) => (
                            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-1 transition duration-300 overflow-hidden">

                                <img
                                    src={item.img}
                                    alt={item.name}
                                    onClick={() => setViewItem(item)}
                                    className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                                />


                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{item.name}</h3>

                                    <div className="flex justify-between items-center mt-3">
                                        <p className="font-bold text-pink-600">₹{item.price}</p>

                                        <button
                                            onClick={() => setSelectedOutfit(item)}
                                            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm hover:scale-105 transition"


                                        >
                                            Rent 💫
                                        </button>
                                        <button
                                            onClick={() => setWishlist([...wishlist, item])}
                                            className="text-red-500 cursor-pointer hover:scale-125 transition"
                                        >
                                            ❤️
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            )}
            {orders.length > 0 && (
                <div className="p-6">
                    <h2 className="text-xl font-bold text-pink-600 mb-3">
                        Your Orders 💖
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
                        {orders.map((item, i) => (
                            <div key={i} className="bg-white p-3 rounded shadow">
                                <p>Outfit ID: {item.outfitId}</p>
                                <p>{item.startDate} → {item.endDate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* DATE MODAL */}
            {selectedOutfit && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

                    <div className="bg-white p-6 rounded-2xl w-80 shadow-xl text-center">

                        <h3 className="font-bold text-lg mb-3 text-pink-600">
                            {selectedOutfit.name}
                        </h3>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="border p-2 w-full mb-2 rounded"
                        />

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="border p-2 w-full mb-3 rounded"
                        />

                        <button
                            onClick={addToCart}
                            className="bg-green-500 text-white w-full py-2 rounded-lg"
                        >
                            Add to Cart 🛒
                        </button>

                        <button
                            onClick={() => setSelectedOutfit(null)}
                            className="text-red-500 mt-2"
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            )}

            {/* CART */}
            {showCart && (
                <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-2xl p-6">

                    <h2 className="font-bold mb-4 text-lg text-pink-600">Your Cart 🛍️</h2>

                    <div className="flex justify-between items-center mb-3">
                        <h2 className="font-bold text-pink-600">Your Cart 🛍️</h2>

                        <button
                            onClick={() => setShowCart(false)}
                            className="text-red-500 text-lg font-bold"
                        >
                            ✕
                        </button>
                    </div>

                    {cart.map((item, i) => (
                        <div key={i} className="border-b py-2">
                            <p>{item.name}</p>
                            <p className="text-sm text-gray-500">
                                {item.startDate} → {item.endDate}
                            </p>

                            <button
                                onClick={() => removeItem(i)}
                                className="text-red-500 text-sm"
                            >
                                Remove
                            </button>
                            <button
                                onClick={() => {
                                    setShowCheckout(true);
                                    setShowCart(false);
                                }}
                                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full mt-4 py-2 rounded-lg"
                            >
                                Proceed to Checkout 💳
                            </button>
                            {cart.length === 0 && (
                                <p className="text-gray-500 text-center mt-10">
                                    Your cart is empty 🛍️
                                </p>
                            )}

                            {orders.length === 0 && (
                                <p className="text-gray-400 text-center">
                                    No orders yet
                                </p>

                            )}
                            <div className="mt-4 border-t pt-3">
                                <p className="flex justify-between">
                                    <span>Total Items</span>
                                    <span>{cart.length}</span>
                                </p>

                                <p className="flex justify-between font-bold text-pink-600">
                                    <span>Total Price</span>
                                    <span>₹{total}</span>
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            )}

            {showCheckout && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

                    <div className="bg-white p-6 rounded-2xl w-96 shadow-xl">

                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-xl font-bold text-purple-600">
                                Secure Payment 💜
                            </h2>

                            <button
                                onClick={() => setShowCheckout(false)}
                                className="text-red-500 text-lg font-bold"
                            >
                                ✕
                            </button>
                        </div>

                        <h2 className="text-xl font-bold mb-4 text-purple-600 text-center">
                            Secure Payment 💜
                        </h2>

                        {/* ORDER SUMMARY */}
                        <div className="bg-gray-100 p-4 rounded mb-3 text-sm">
                            {cart.map((item, i) => (
                                <div key={i} className="flex justify-between">
                                    <span>{item.name}</span>
                                    <span>₹{item.price}</span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between font-bold mb-4">
                            <span>Total</span>
                            <span>
          ₹{cart.reduce((sum, item) => sum + item.price, 0)}
        </span>
                        </div>

                        {/* USER DETAILS */}
                        <input placeholder="Full Name" className="border p-2 w-full mb-2 rounded" />
                        <input placeholder="Phone Number" className="border p-2 w-full mb-2 rounded" />
                        <input placeholder="Address" className="border p-2 w-full mb-3 rounded" />

                        {/* PAYMENT BUTTON */}
                        <button
                            onClick={async () => {
                                // backend booking save
                                for (let item of cart) {
                                    await fetch("http://localhost:8081/bookings", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify({
                                            outfitId: item.id,
                                            startDate: item.startDate,
                                            endDate: item.endDate
                                        })
                                    });
                                }

                                setCart([]);
                                setShowCheckout(false);
                                setShowSuccess(true);
                            }}
                            className="bg-purple-600 text-white w-full py-2 rounded-lg hover:bg-purple-700"
                        >
                            Pay with Razorpay 💳
                        </button>

                        <button
                            onClick={() => setShowCheckout(false)}
                            className="text-red-500 mt-2 w-full"
                        >
                            Cancel
                        </button>

                    </div>
                </div>
            )}

            {showSuccess && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

                    <div className="bg-white p-6 rounded-xl text-center shadow-lg">

                        <h2 className="text-green-600 font-bold text-lg">
                            Order Placed 🎉
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Your outfit is booked successfully 💖
                        </p>

                        <button
                            onClick={() => setShowSuccess(false)}
                            className="bg-black text-white mt-4 px-4 py-2 rounded"
                        >
                            Continue Shopping
                        </button>

                    </div>
                </div>
            )}

            {viewItem && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">

                    <div className="bg-white p-5 rounded-xl w-[90%] max-w-md max-h-[90vh] overflow-y-auto relative">

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setViewItem(null)}
                            className="absolute top-2 right-3 text-red-500 text-xl font-bold z-50"
                        >
                            ✕
                        </button>

                        {/* IMAGE */}
                        <img
                            src={viewItem.img}
                            alt={viewItem.name}
                            className="w-full h-64 object-cover rounded-lg hover:scale-110 transition duration-300"
                        />

                        {/* DETAILS */}
                        <div className="mt-4">
                            <h2 className="text-xl font-bold">{viewItem.name}</h2>
                            <p className="text-gray-500">{viewItem.category}</p>
                            <p className="text-pink-600 font-bold text-lg mt-2">
                                ₹{viewItem.price}
                                <p className="text-sm text-gray-500">
                                    {getDays()} day(s) × ₹{viewItem.price}
                                </p>

                                <p className="font-bold text-lg text-pink-600">
                                    Total: ₹{getDays() * viewItem.price}
                                </p>
                                <div className="mt-3">
                                    <p className="font-semibold mb-1">Select Size:</p>

                                    <div className="flex gap-2">
                                        {["S", "M", "L"].map(size => (
                                            <button
                                                key={size}
                                                onClick={() => setSelectedSize(size)}
                                                className={`px-3 py-1 rounded border ${
                                                    selectedSize === size
                                                        ? "bg-pink-500 text-white"
                                                        : "bg-gray-100"
                                                }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="border p-2 w-full mt-3 rounded"
                                />

                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="border p-2 w-full mt-2 rounded"
                                />

                                <button
                                    onClick={async () => {
                                        try {
                                            const res = await fetch(
                                                `http://localhost:8081/bookings/availability?outfitId=${viewItem.id}&startDate=${startDate}&endDate=${endDate}`
                                            );
                                            const data = await res.text();
                                            setAvailabilityMsg(data);
                                        } catch {
                                            setAvailabilityMsg("Error checking availability");
                                        }
                                    }}
                                    className="bg-blue-500 text-white w-full py-2 mt-2 rounded"
                                >
                                    Check Availability 🔍
                                </button>

                                <p className="text-center mt-2 text-sm text-green-600">
                                    {availabilityMsg}
                                </p>
                                <button
                                    onClick={() => {
                                        if (!selectedSize) {
                                            alert("Select size first");
                                            return;
                                        }

                                        if (!startDate || !endDate) {
                                            alert("Select dates");
                                            return;
                                        }

                                        setCart([
                                            ...cart,
                                            {
                                                ...viewItem,
                                                size: selectedSize,
                                                startDate,
                                                endDate
                                            }
                                        ]);

                                        setViewItem(null);
                                        setSelectedSize("");
                                        setAvailabilityMsg("");
                                    }}
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full py-2 mt-3 rounded-lg"
                                >
                                    Add to Cart 🛒
                                </button>
                            </p>
                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default App;