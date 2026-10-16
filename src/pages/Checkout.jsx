import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const fields = [
  { name: "fullName", label: "Full Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "address", label: "Delivery Address", type: "text" },
];

const Checkout = () => {
  const { cart, dispatch, totalItems, totalPrice } = useCart();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const [ordered, setOrdered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.address.trim()) newErrors.address = "Address is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      dispatch({ type: "CLEAR" });
      setOrdered(true);
    }
  };

  return (
    <section className="bg-gray-100 rounded-t-[3rem] px-6 py-16 min-h-[70vh] mt-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Checkout</h1>

        {ordered && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900">Order placed!</h2>
            <p className="text-gray-500 mt-2">Thanks for shopping with Shoply.</p>
            <Link
              to="/"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        )}

        {!ordered && cart.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>
            <Link
              to="/"
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Browse Products
            </Link>
          </div>
        )}

        {!ordered && cart.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="md:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 space-y-5"
            >
              {fields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className={`w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-500 ${
                      errors[field.name] ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition shadow-lg shadow-blue-600/20"
              >
                Place Order
              </button>
            </form>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit">
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="border-t border-gray-200 mt-5 pt-5 flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Checkout;