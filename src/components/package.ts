import image1 from '../assets-webp/PackageImage/image1.webp'
import image2 from '../assets-webp/PackageImage/image2.webp'
import image3 from '../assets-webp/PackageImage/image3.webp'
import image4 from '../assets-webp/PackageImage/image4.webp'
import image6 from '../assets-webp/PackageImage/image6.webp'
import image7 from '../assets-webp/PackageImage/image7.webp'
import image8 from '../assets-webp/PackageImage/image8.webp'
import image10 from '../assets-webp/PackageImage/image10.webp'
import image12 from '../assets-webp/PackageImage/image12.webp'

export interface PackageType {
  type: string;
  price: string;
}

export interface TourDetails {
  id: number;
  category: string;
  imageUrl: string | { src: string; height: number; width: number };
  title: string;
  time: string;
  included: string[];
  packages: PackageType[];
}

export const details: TourDetails[] = [{
    id: 1,
    category: "char dham",
    imageUrl: image1,
    title: "Char Dham Group Tour from Haridwar/Dehradun",
    time: "9N/10D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹19,499/pp" },
        { type: "Deluxe", price: "₹24,499/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 2,
    category: "char dham",
    imageUrl: image2,
    title: "Char Dham Private Tour from Haridwar/Dehradun",
    time: "8N/9D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹19,499/pp" },
        { type: "Deluxe", price: "₹24,499/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 3,
    category: "char dham",
    imageUrl: image3,
    title: "Char Dham Private Tour from Delhi",
    time: "11N/12D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹29,999/pp" },
        { type: "Deluxe", price: "₹64,999/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 4,
    category: "char dham",
    imageUrl: image4,
    title: "Char Dham Helicopter Tour from Dehradun",
    time: "5N/6D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹2.20L/pp" },
        { type: "Deluxe", price: "price on request" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 6,
    category: "do dham",
    imageUrl: image6,
    title: "Kedarnath Badrinath Private tour by Road from Haridwar/Dehradun",
    time: "4N/5D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹12,999/pp" },
        { type: "Deluxe", price: "₹17,999/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 7,
    category: "do dham",
    imageUrl: image7,
    title: "Kedarnath Badrinath Private tour by Road from Delhi",
    time: "5N/6D ",
    included: ["🍛meals", "🚗sightseeing"],
    packages: [
        { type: "Economic", price: "₹ 14,999/pp" },
        { type: "Deluxe", price: "₹19,999/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 8,
    category: "do dham",
    imageUrl: image8,
    title: "Kedarnath Badrinath by Helicopter from Dehradun",
    time: "2D/1N",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹1,30,000/pp" },
        { type: "Deluxe", price: "price on request" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 10,
    category: "kedarnath dham",
    imageUrl: image10,
    title: "Kedarnath Yatra From Haridwar / Dehradun",
    time: "3N/4D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹9,999/pp" },
        { type: "Deluxe", price: "₹14,999/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}, {
    id: 12,
    category: "kedarnath dham",
    imageUrl: image12,
    title: "Kedarnath Yatra From Delhi",
    time: "4N/5D",
    included: ["🍛meals", "🚗sightseeing", "🏨hotel"],
    packages: [
        { type: "Economic", price: "₹12,999/pp" },
        { type: "Deluxe", price: "₹17,999/pp" },
        { type: "Premium", price: "Price on request" }
    ]
}];
