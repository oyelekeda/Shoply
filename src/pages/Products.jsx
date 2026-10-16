import { useCallback, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const searchRef = useRef(null);
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(() => {
    setQuery(searchRef.current.value);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold uppercase tracking-widest text-sm mb-5">
              Welcome to Shoply
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Discover products
              <span className="text-blue-500"> you'll love.</span>
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-relaxed">
              Explore our collection of quality products carefully selected for
              style, comfort and everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#products"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20"
              >
                Shop Now →
              </a>

              <a
                href="#products"
                className="border border-white/10 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold transition"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">20+</p>
            <p className="text-gray-400 text-sm mt-1">Products</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">4.8</p>
            <p className="text-gray-400 text-sm mt-1">Average Rating</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-gray-400 text-sm mt-1">Quality</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-gray-400 text-sm mt-1">Support</p>
          </div>
        </div>
      </section>

      <section id="products" className="bg-gray-100 rounded-t-[3rem] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
                Our Collection
              </p>
              <h2 className="text-4xl font-bold text-gray-900 mt-2">
                Featured Products
              </h2>
              <p className="text-gray-500 mt-3">
                Find something you'll love from our collection.
              </p>
            </div>

            <input
              type="text"
              ref={searchRef}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full md:w-80 bg-white border border-gray-300 rounded-xl px-5 py-3 outline-none focus:border-blue-500"
            />
          </div>

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-xl text-center">
              {error}
            </div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 py-20">
              No products match your search.
            </p>
          )}

          {!loading && !error && filteredProducts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;