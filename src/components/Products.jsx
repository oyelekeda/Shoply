import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data: products, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <div className="min-h-screen bg-slate-950">

    
      <nav className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🛍️</span>
            </div>

            <h1 className="text-white text-xl font-bold">
              Shop<span className="text-blue-500">ly</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">
              Home
            </a>

            <a href="#" className="text-blue-400">
              Products
            </a>

            <a href="#" className="hover:text-white transition">
              Categories
            </a>

            <a href="#" className="hover:text-white transition">
              About
            </a>
          </div>

          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition">
            🛒 Cart
          </button>
        </div>
      </nav>


      
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
              Explore our collection of quality products carefully selected
              for style, comfort and everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20">
                Shop Now →
              </button>

              <button className="border border-white/10 hover:bg-white/5 text-white px-7 py-3.5 rounded-xl font-semibold transition">
                Explore Collection
              </button>

            </div>

          </div>

        </div>
      </section>


      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">20+</p>
            <p className="text-gray-400 text-sm mt-1">
              Products
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">4.8</p>
            <p className="text-gray-400 text-sm mt-1">
              Average Rating
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-gray-400 text-sm mt-1">
              Quality
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-gray-400 text-sm mt-1">
              Support
            </p>
          </div>

        </div>

      </section>


      <section className="bg-gray-100 rounded-t-[3rem] px-6 py-20">

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

            <button className="w-fit border border-gray-300 bg-white hover:bg-gray-50 px-5 py-3 rounded-xl text-sm font-medium">
              View All →
            </button>

          </div>


          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
          )}


          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 p-5 rounded-xl text-center">
              {error}
            </div>
          )}


     
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-2xl transition-all duration-300"
                >

                
                  <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">

                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />

                 
                    <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-semibold px-3 py-2 rounded-full shadow-sm capitalize">
                      {product.category}
                    </span>

                  
                    <button className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition">
                      ♡
                    </button>

                  </div>


                  
                  <div className="p-6">

                    <div className="flex items-center gap-2 mb-3">

                      <div className="text-yellow-400 text-sm">
                        ★★★★★
                      </div>

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
                        <p className="text-xs text-gray-400 uppercase">
                          Price
                        </p>

                        <p className="text-2xl font-bold text-gray-900">
                          ${product.price}
                        </p>
                      </div>


                      <button className="w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition shadow-lg shadow-blue-600/20">
                        +
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>

      </section>


   
      <footer className="bg-slate-950 text-gray-400 px-6 py-12">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>
              <h2 className="text-white text-2xl font-bold">
                Shop<span className="text-blue-500">ly</span>
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-relaxed">
                Your destination for quality products and a simple
                shopping experience.
              </p>
            </div>

            <div className="flex gap-10 text-sm">

              <div>
                <h3 className="text-white font-semibold mb-3">
                  Shop
                </h3>

                <p className="mb-2">Products</p>
                <p className="mb-2">Categories</p>
                <p>New Arrivals</p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">
                  Support
                </h3>

                <p className="mb-2">Contact</p>
                <p className="mb-2">FAQ</p>
                <p>Help Center</p>
              </div>

            </div>

          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-sm">
            © 2026 Shoply. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
};

export default Products;