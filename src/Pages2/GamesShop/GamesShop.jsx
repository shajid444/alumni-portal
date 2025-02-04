import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        title: "The Olympic Collection - Latin Crest T-Shirt - White",
        image: "https://i.ibb.co.com/8bBY359/eouc7bgasamuaizvyvsg.jpg",
    },
    {
        id: 2,
        title: "The Olympic Collection Primary Logo Graphic T-Shirt - White",
        image: "https://i.ibb.co.com/qDtPstv/gbsokho33b4bkjom3dof.jpg"

    },
    {
        id: 3,
        title: "Paris 2024 Olympics Plush Mascot - 24cm",
        image: "https://i.ibb.co.com/kH9S4cN/mdcxijvsbudmep1zke9l.jpg",
    },
    {
        id: 4,
        title: "The Olympic Collection Bobble Beanie - White",
        image: "https://i.ibb.co.com/YTLCSdC/ue17kjx2mr5oxeho2uyc.jpg",
    },
    {
        id: 5,
        title: "The Olympic Collection - Latin Crest T-Shirt - White",
        image: "https://i.ibb.co.com/pbLnxGG/y4iqsxobcoij5bmgghde.jpg",
    },
    {
        id: 6,
        title: "The Olympic Collection Primary Logo Graphic T-Shirt - White",
        image: "https://i.ibb.co.com/4M2JZTP/yjz23wspegiandkotwps.jpg",
    },
    {
        id: 7,
        title: "Paris 2024 Olympics Plush Mascot - 24cm",
        image: "https://via.placeholder.com/200x200",
    },
    {
        id: 8,
        title: "The Olympic Collection Bobble Beanie - White",
        image: "https://via.placeholder.com/200x200",
    },
    // Add more products here
];

const ITEMS_PER_PAGE = 4;

const GamesShop = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const paginatedProducts = products.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">THE GAMES SHOP</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paginatedProducts.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <Link to='/payment' className="bg-black text-white px-4 py-2 rounded">
                            Shop Now
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`mx-2 px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50" : "hover:bg-gray-200"
                        }`}
                >
                    &larr;
                </button>
                <span className="text-lg font-semibold">
                    {currentPage} / {totalPages}
                </span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`mx-2 px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50" : "hover:bg-gray-200"
                        }`}
                >
                    &rarr;
                </button>
            </div>
        </div>
    );
};

export default GamesShop;
