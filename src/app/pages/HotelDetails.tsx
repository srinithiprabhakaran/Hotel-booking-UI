import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Coffee,
  Dumbbell,
  Wind,
  Utensils,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const hotelImages = [
  "https://images.unsplash.com/photo-1662841540530-2f04bb3291e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1594130139005-3f0c0f0e7c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1630888728969-5e43f55a7a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ2MzE4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
];

const rooms = [
  {
    id: "1",
    name: "Deluxe Room",
    description: "Spacious room with king-size bed and city view",
    price: 23987,
    maxGuests: 2,
    size: "35 m²",
  },
  {
    id: "2",
    name: "Executive Suite",
    description: "Luxury suite with separate living area and premium amenities",
    price: 38097,
    maxGuests: 3,
    size: "55 m²",
  },
  {
    id: "3",
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and private terrace",
    price: 74617,
    maxGuests: 4,
    size: "120 m²",
  },
];

export function HotelDetails() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotelImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotelImages.length) % hotelImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            to="/hotels"
            className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to search results
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-[500px] bg-gray-900">
            <img
              src={hotelImages[currentImageIndex]}
              alt="Hotel"
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {hotelImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  Grand Luxury Resort & Spa
                </h1>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>123 Luxury Avenue, Paris, France</span>
                  <span className="text-gray-400">•</span>
                  <span>2.3 km from center</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                  />
                </button>
                <button className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-blue-600 transition-colors">
                  <Share2 className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-xl">
                9.2
              </div>
              <div>
                <div className="font-semibold text-lg">Excellent</div>
                <div className="text-gray-600">1,543 reviews</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">About this property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Experience unparalleled luxury at the Grand Luxury Resort & Spa. Our
                five-star property offers world-class amenities, exceptional service, and
                stunning views of the city. Each room is elegantly appointed with modern
                furnishings and premium bedding to ensure your comfort.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Located in the heart of Paris, our resort provides easy access to major
                attractions, shopping districts, and fine dining establishments. Whether
                you're traveling for business or leisure, our dedicated staff is committed
                to making your stay unforgettable.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Wifi, label: "Free WiFi" },
                  { icon: Car, label: "Free Parking" },
                  { icon: Coffee, label: "Restaurant" },
                  { icon: Dumbbell, label: "Fitness Center" },
                  { icon: Wind, label: "Air Conditioning" },
                  { icon: Utensils, label: "Room Service" },
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <amenity.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Available Rooms</h2>
              <div className="space-y-4">
                {rooms.map((room) => (
                  <div
                    key={room.id}
                    className="border border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                        <p className="text-gray-600 mb-3">{room.description}</p>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span>Max {room.maxGuests} guests</span>
                          <span>•</span>
                          <span>{room.size}</span>
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-sm text-gray-500 mb-1">From</div>
                        <div className="text-3xl font-bold text-blue-600 mb-1">
                          ${room.price}
                        </div>
                        <div className="text-sm text-gray-500 mb-3">per night</div>
                        <Link
                          to={`/booking/${id}`}
                          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                          Reserve
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold mb-6">Location</h2>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Map integration placeholder</p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Luxury Avenue, Paris, France
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="text-2xl font-semibold mb-6">Guest Reviews</h2>
              <div className="space-y-6">
                {[
                  {
                    name: "Sarah Johnson",
                    date: "March 15, 2026",
                    rating: 9.5,
                    comment:
                      "Absolutely stunning property! The staff was incredibly friendly and the room was spotless. The location is perfect for exploring the city.",
                  },
                  {
                    name: "Michael Chen",
                    date: "March 10, 2026",
                    rating: 9.0,
                    comment:
                      "Great hotel with excellent amenities. The breakfast buffet was amazing and the spa facilities were top-notch. Highly recommend!",
                  },
                  {
                    name: "Emma Wilson",
                    date: "March 5, 2026",
                    rating: 9.3,
                    comment:
                      "Perfect stay for our anniversary trip. The Presidential Suite exceeded our expectations. Will definitely be coming back!",
                  },
                ].map((review, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold">
                        {review.rating}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Starting from</div>
              <div className="text-3xl font-bold text-blue-600">₹23,987</div>
              <div className="text-sm text-gray-500">per night</div>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Contact Hotel
              </button>
              <Link
                to={`/booking/${id}`}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
