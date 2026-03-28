import { SearchBar } from "../components/SearchBar";
import { Sparkles, Shield, HeadphonesIcon } from "lucide-react";

export function Home() {
  return (
    <div>
      <section
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1561501900-3701fa6a0864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Find Your Perfect Stay
            </h1>
            <p className="text-xl text-white/90">
              Book unique homes, hotels, and experiences around the world
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose StayHub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">
                We ensure you get the best deals on all our listed properties
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Your personal information and payments are completely secure
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our customer service team is available around the clock
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Destinations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Paris, France",
                properties: "1,234 properties",
                image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                name: "Bali, Indonesia",
                properties: "987 properties",
                image: "https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
              {
                name: "Santorini, Greece",
                properties: "654 properties",
                image: "https://images.unsplash.com/photo-1554366347-897a5113f6ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              },
            ].map((destination, index) => (
              <div
                key={index}
                className="relative h-72 rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {destination.name}
                  </h3>
                  <p className="text-white/90">{destination.properties}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
