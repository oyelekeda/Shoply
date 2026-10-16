import { useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: product });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all duration-300">
      <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
        />

        <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-2 rounded-full shadow-sm capitalize">
          {product.category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="text-yellow-400 text-sm">★★★★★</div>
          <span className="text-xs text-gray-400">
            {product.rating?.rate || "4.5"}
          </span>
        </div>

        <h3 className="font-bold text-gray-900 text-lg line-clamp-2 min-h-[56px]">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-end justify-between mt-6">
          <div>
            <p className="text-xs text-gray-400 uppercase">Price</p>
            <p className="text-2xl font-bold text-gray-900">${product.price}</p>
          </div>

          <button
            onClick={handleAdd}
            className={`w-11 h-11 text-white rounded-xl flex items-center justify-center transition shadow-lg shadow-blue-600/20 ${
              added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;