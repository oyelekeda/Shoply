import { Link, NavLink, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Layout = () => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <nav className="border-b border-white/10 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-xl">🛍️</span>
            </div>
            <h1 className="text-white text-xl font-bold">
              Shop<span className="text-blue-500">ly</span>
            </h1>
          </Link>

          <div className="flex items-center gap-8 text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white transition"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              className="relative bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full transition"
            >
              🛒 Cart
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-slate-950 text-gray-400 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl font-bold">
                Shop<span className="text-blue-500">ly</span>
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed">
                Your destination for quality products and a simple shopping
                experience.
              </p>
            </div>

            <div className="flex gap-10 text-sm">
              <div>
                <h3 className="text-white font-semibold mb-3">Shop</h3>
                <Link to="/" className="block mb-2 hover:text-white">
                  Products
                </Link>
                <Link to="/cart" className="block hover:text-white">
                  Cart
                </Link>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-3">Support</h3>
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

export default Layout;