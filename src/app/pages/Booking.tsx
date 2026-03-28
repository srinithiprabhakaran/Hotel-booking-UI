import { useState } from "react";
import { useParams, Link } from "react-router";
import { CheckCircle2, Calendar, Users, CreditCard, Lock } from "lucide-react";

export function Booking() {
  const { id } = useParams();
  const [bookingComplete, setBookingComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingComplete(true);
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg p-12 max-w-2xl w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Your reservation has been successfully completed. A confirmation email
            has been sent to your email address with all the booking details.
          </p>
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="grid grid-cols-2 gap-6 text-left">
              <div>
                <div className="text-sm text-gray-500 mb-1">Booking ID</div>
                <div className="font-semibold">BK-{Math.random().toString(36).substr(2, 9).toUpperCase()}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Hotel</div>
                <div className="font-semibold">Grand Luxury Resort & Spa</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Check-in</div>
                <div className="font-semibold">March 30, 2026</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Check-out</div>
                <div className="font-semibold">April 3, 2026</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Return Home
            </Link>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View Booking Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Guest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Any special requirements or requests..."
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6">Room Selection</h2>
                <div className="space-y-3">
                  {[
                    { name: "Deluxe Room", price: 23987 },
                    { name: "Executive Suite", price: 38097 },
                    { name: "Presidential Suite", price: 74617 },
                  ].map((room) => (
                    <label
                      key={room.name}
                      className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-600 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="room"
                          className="w-5 h-5 text-blue-600"
                          defaultChecked={room.name === "Deluxe Room"}
                        />
                        <span className="font-medium">{room.name}</span>
                      </div>
                      <span className="font-semibold text-blue-600">
                        ₹{room.price}/night
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="1234 5678 9012 3456"
                      />
                      <CreditCard className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <input type="checkbox" required className="mt-1" />
                  <p className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link to="#" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link to="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                Complete Booking
              </button>
            </form>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Booking Summary</h2>

              <div className="mb-6">
                <img
                  src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hotel"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg mb-1">
                  Grand Luxury Resort & Spa
                </h3>
                <p className="text-sm text-gray-600">Paris, France</p>
              </div>

              <div className="space-y-4 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-gray-500">Check-in</div>
                    <div className="font-medium">March 30, 2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-gray-500">Check-out</div>
                    <div className="font-medium">April 3, 2026</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="text-gray-500">Guests</div>
                    <div className="font-medium">2 Adults</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 py-6 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">₹23,987 x 4 nights</span>
                  <span className="font-medium">₹95,948</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service fee</span>
                  <span className="font-medium">₹4,814</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Taxes</span>
                  <span className="font-medium">₹11,537</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-semibold text-lg">Total</span>
                  <span className="text-2xl font-bold text-blue-600">₹112,299</span>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-900">
                  <p className="font-medium mb-1">Free cancellation</p>
                  <p className="text-blue-700">
                    Cancel before March 27 for a full refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
