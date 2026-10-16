import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, dispatch, totalItems, totalPrice } = useCart();

  return (
    <section className="bg-gray-100 rounded-t-[3rem] px-6 py-16 min-h-[70vh] mt-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Your Cart</h1>

        {cart.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">Add something you'll love.</p>
            <Link
              to="/"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Browse Products
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 flex gap-4 items-center"
                >
                  <div className="w-24 h-24 bg-gray-50 rounded-xl p-2 shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 capitalize">
                      {item.category}
                    </p>
                    <p className="font-bold text-gray-900 mt-1">${item.price}</p>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            payload: { id: item.id, qty: item.qty - 1 },
                          })
                        }
                        className="w-8 h-8 hover:bg-gray-100 rounded-l-lg"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() =>
                          dispatch({
                            type: "UPDATE_QTY",
                            payload: { id: item.id, qty: item.qty + 1 },
                          })
                        }
                        className="w-8 h-8 hover:bg-gray-100 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: item.id })
                      }
                      className="text-xs text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={() => dispatch({ type: "CLEAR" })}
                className="text-sm text-gray-500 hover:text-red-500"
              >
                Clear cart
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="block text-center w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;