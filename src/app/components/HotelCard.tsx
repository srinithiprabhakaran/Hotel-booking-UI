import { Star, MapPin, Heart } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  distance: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  stars: number;
}

export function HotelCard({
  id,
  name,
  location,
  distance,
  rating,
  reviews,
  price,
  image,
  stars,
}: HotelCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-3 flex gap-1">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>

      <div className="p-4">
        <Link to={`/hotels/${id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
          <span className="text-gray-400">•</span>
          <span>{distance}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white px-2 py-1 rounded-lg font-semibold text-sm">
              {rating}
            </div>
            <div className="text-sm">
              <div className="font-medium text-gray-900">Excellent</div>
              <div className="text-gray-500">{reviews} reviews</div>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between pt-4 border-t border-gray-200">
          <div>
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-2xl font-bold text-blue-600">₹{price}</div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
          <Link
            to={`/booking/${id}`}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
