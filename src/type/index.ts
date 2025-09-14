export interface Category {
  id: string;
  name: string;
  subcategories: string[];
  image: string;
}

export interface Artist {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  bio: string;
}

export interface Booking {
  id: string;
  userName: string;
  email: string;
  phone: string;
  artist: Artist;
  category: string;
  dateTime: Date;
}
