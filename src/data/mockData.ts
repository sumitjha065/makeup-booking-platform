import { Category, Artist } from "@/types";

export const categories: Category[] = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    subcategories: [
      "Traditional Bridal",
      "Contemporary Bridal",
      "Destination Wedding Looks",
    ],
    image: "/images/bridal.jpg",
  },
  {
    id: "party",
    name: "Party & Glam Makeup",
    subcategories: ["Cocktail Party", "Red Carpet Glam", "Evening Party Looks"],
    image: "/images/party.jpg",
  },
  {
    id: "casual",
    name: "Casual / Everyday Makeup",
    subcategories: ["Office Look", "Minimal/Natural", "Day Out/Brunch"],
    image: "/images/casual.jpg",
  },
  {
    id: "fashion",
    name: "Fashion & Editorial Makeup",
    subcategories: ["Runway", "Photoshoot Makeup", "Creative/High Fashion"],
    image: "/images/fashion.jpg",
  },
  {
    id: "festive",
    name: "Festive / Cultural Makeup",
    subcategories: [
      "Diwali/Eid/Christmas Looks",
      "Navratri/Garba",
      "Regional Styles",
    ],
    image: "/images/festive.jpg",
  },
  {
    id: "specialty",
    name: "Specialty Makeup",
    subcategories: ["HD/Camera Ready", "Airbrush Makeup", "Theatrical/Stage"],
    image: "/images/specialty.jpg",
  },
];

export const artists: Artist[] = [
  {
    id: "artist1",
    name: "Priya Sharma",
    category: "bridal",
    price: 15000,
    rating: 4.8,
    reviewCount: 124,
    image:
      "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Specialized in traditional Indian bridal makeup with 8 years of experience. Expert in creating timeless looks for your special day.",
  },
  {
    id: "artist2",
    name: "Ayesha Khan",
    category: "party",
    price: 8000,
    rating: 4.7,
    reviewCount: 98,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Glam makeup expert for parties and festive occasions. Specializes in sangeet and reception looks.",
  },
  {
    id: "artist3",
    name: "Neha Patel",
    category: "casual",
    price: 3500,
    rating: 4.5,
    reviewCount: 67,
    image:
      "https://images.pexels.com/photos/3625519/pexels-photo-3625519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Natural makeup specialist for everyday office and casual looks. Enhancing your natural beauty with minimal products.",
  },
  {
    id: "artist4",
    name: "Riya Mehta",
    category: "traditional",
    price: 12000,
    rating: 4.9,
    reviewCount: 152,
    image:
      "https://images.pexels.com/photos/3756676/pexels-photo-3756676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Expert in traditional Indian makeup styles for mehndi and cultural ceremonies. Creating authentic regional looks.",
  },
  {
    id: "artist5",
    name: "Sanjana Reddy",
    category: "festive",
    price: 7500,
    rating: 4.6,
    reviewCount: 89,
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Festive makeup specialist for Diwali, Eid, and other Indian celebrations. Creating dazzling festival looks.",
  },
  {
    id: "artist6",
    name: "Divya Singh",
    category: "specialty",
    price: 18000,
    rating: 4.8,
    reviewCount: 112,
    image:
      "https://images.pexels.com/photos/4153145/pexels-photo-4153145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "HD and airbrush makeup specialist for camera-ready looks. Bollywood style makeup expert.",
  },
  {
    id: "artist7",
    name: "Ananya Das",
    category: "bridal",
    price: 17000,
    rating: 4.9,
    reviewCount: 135,
    image:
      "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Destination wedding makeup specialist with expertise in both traditional and contemporary bridal looks.",
  },
  {
    id: "artist8",
    name: "Fatima Ali",
    category: "party",
    price: 6500,
    rating: 4.4,
    reviewCount: 78,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Party makeup artist creating stunning looks for sangeet and special Indian occasions.",
  },
  {
    id: "artist9",
    name: "Pooja Gupta",
    category: "casual",
    price: 3000,
    rating: 4.7,
    reviewCount: 92,
    image:
      "https://images.pexels.com/photos/3625519/pexels-photo-3625519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Everyday makeup expert for natural office and brunch looks. Specializes in quick and elegant daily makeup.",
  },
  {
    id: "artist10",
    name: "Meera Joshi",
    category: "traditional",
    price: 11000,
    rating: 4.8,
    reviewCount: 145,
    image:
      "https://images.pexels.com/photos/3756676/pexels-photo-3756676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Traditional makeup artist specializing in regional Indian styles and cultural ceremony makeup.",
  },
  {
    id: "artist11",
    name: "Sunita Menon",
    category: "festive",
    price: 7000,
    rating: 4.9,
    reviewCount: 167,
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Festive makeup expert for all Indian celebrations. Specializes in creating glamorous Diwali and Eid looks.",
  },
  {
    id: "artist12",
    name: "Nandini Rao",
    category: "specialty",
    price: 20000,
    rating: 4.7,
    reviewCount: 123,
    image:
      "https://images.pexels.com/photos/4153145/pexels-photo-4153145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Theatrical and Bollywood style makeup artist with film industry experience. HD makeup specialist.",
  },
];
