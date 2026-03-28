import { useState } from "react";
import { HotelCard } from "../components/HotelCard";
import { Filter, SlidersHorizontal, MapIcon, List } from "lucide-react";
import * as Slider from "@radix-ui/react-slider";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

const hotels = [
  {
    id: "1",
    name: "Grand Luxury Resort & Spa",
    location: "Paris, France",
    distance: "2.3 km from center",
    rating: 9.2,
    reviews: 1543,
    price: 23987,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 5,
  },
  {
    id: "2",
    name: "Seaside Paradise Hotel",
    location: "Bali, Indonesia",
    distance: "1.5 km from center",
    rating: 9.5,
    reviews: 2134,
    price: 16517,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 5,
  },
  {
    id: "3",
    name: "Mountain View Boutique",
    location: "Swiss Alps, Switzerland",
    distance: "3.1 km from center",
    rating: 8.9,
    reviews: 876,
    price: 28967,
    image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 4,
  },
  {
    id: "4",
    name: "Urban Chic Hotel",
    location: "New York, USA",
    distance: "0.8 km from center",
    rating: 9.1,
    reviews: 1876,
    price: 21497,
    image: "https://images.unsplash.com/photo-1630587148265-761cbd139043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 5,
  },
  {
    id: "5",
    name: "Tropical Beach Resort",
    location: "Maldives",
    distance: "5.2 km from center",
    rating: 9.7,
    reviews: 3245,
    price: 41417,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 5,
  },
  {
    id: "6",
    name: "Historic City Center Inn",
    location: "Rome, Italy",
    distance: "0.5 km from center",
    rating: 8.7,
    reviews: 1234,
    price: 14857,
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 4,
  },
  {
    id: "7",
    name: "Desert Oasis Resort",
    location: "Dubai, UAE",
    distance: "4.3 km from center",
    rating: 9.3,
    reviews: 2567,
    price: 33117,
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxsdXh1cnklMjBob3RlbHxlbnwxfHx8fDE3NzQ2MzE4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 5,
  },
  {
    id: "8",
    name: "Riverside Retreat",
    location: "Prague, Czech Republic",
    distance: "1.2 km from center",
    rating: 8.8,
    reviews: 987,
    price: 12367,
    image: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bHV4dXJ5JTIwaG90ZWx8ZW58MXx8fHwxNzc0NjMxODI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    stars: 4,
  },
];

export function HotelListing() {
  const [priceRange, setPriceRange] = useState([0, 42000]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hotels in Paris
          </h1>
          <p className="text-gray-600">234 properties found</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-600 transition-colors"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
          <div className="flex gap-2 ml-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-blue-600 transition-colors">
              <MapIcon className="w-5 h-5" />
              Map View
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {showFilters && (
            <aside className="w-80 bg-white rounded-xl shadow-md p-6 h-fit sticky top-24">
              <h2 className="text-lg font-semibold mb-6">Filter by</h2>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider.Root
                  className="relative flex items-center select-none touch-none w-full h-5"
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={500}
                  step={10}
                  minStepsBetweenThumbs={1}
                >
                  <Slider.Track className="bg-gray-200 relative grow rounded-full h-1">
                    <Slider.Range className="absolute bg-blue-600 rounded-full h-full" />
                  </Slider.Track>
                  <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </Slider.Root>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Star Rating</h3>
                <div className="space-y-3">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox.Root className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center hover:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600">
                        <Checkbox.Indicator>
                          <CheckIcon className="w-4 h-4 text-white" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <span className="text-gray-700">{stars} Stars</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-medium mb-4">Amenities</h3>
                <div className="space-y-3">
                  {["Free WiFi", "Swimming Pool", "Parking", "Air Conditioning", "Restaurant", "Gym"].map(
                    (amenity) => (
                      <label key={amenity} className="flex items-center gap-3 cursor-pointer">
                        <Checkbox.Root className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center hover:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600">
                          <Checkbox.Indicator>
                            <CheckIcon className="w-4 h-4 text-white" />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <span className="text-gray-700">{amenity}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-4">Property Type</h3>
                <div className="space-y-3">
                  {["Hotel", "Resort", "Apartment", "Villa", "Hostel"].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <Checkbox.Root className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center hover:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600">
                        <Checkbox.Indicator>
                          <CheckIcon className="w-4 h-4 text-white" />
                        </Checkbox.Indicator>
                      </Checkbox.Root>
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>
          )}

          <div className="flex-1">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 lg:grid-cols-2 gap-6"
                  : "space-y-6"
              }
            >
              {hotels.map((hotel) => (
                <HotelCard key={hotel.id} {...hotel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
