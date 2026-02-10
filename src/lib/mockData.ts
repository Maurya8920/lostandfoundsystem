export type ItemStatus = "lost" | "found" | "matched";
export type ItemCategory = "electronics" | "documents" | "accessories" | "bags" | "keys" | "clothing" | "other";

export interface Item {
  id: string;
  title: string;
  description: string;
  category: ItemCategory;
  status: ItemStatus;
  location: string;
  date: string;
  imageUrl: string;
  reportedBy: string;
  matchScore?: number;
}

export const categories: { value: ItemCategory; label: string; icon: string }[] = [
  { value: "electronics", label: "Electronics", icon: "📱" },
  { value: "documents", label: "Documents", icon: "📄" },
  { value: "accessories", label: "Accessories", icon: "⌚" },
  { value: "bags", label: "Bags", icon: "👜" },
  { value: "keys", label: "Keys", icon: "🔑" },
  { value: "clothing", label: "Clothing", icon: "👕" },
  { value: "other", label: "Other", icon: "📦" },
];

export const mockItems: Item[] = [
  {
    id: "1",
    title: "iPhone 15 Pro - Space Black",
    description: "Found near the college cafeteria. Has a clear case with stickers on the back.",
    category: "electronics",
    status: "found",
    location: "Central Campus Cafeteria",
    date: "2026-02-08",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=300&fit=crop",
    reportedBy: "Rahul M.",
  },
  {
    id: "2",
    title: "Brown Leather Wallet",
    description: "Lost my wallet somewhere between the library and parking lot. Contains ID and cards.",
    category: "accessories",
    status: "lost",
    location: "University Library Area",
    date: "2026-02-07",
    imageUrl: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=300&fit=crop",
    reportedBy: "Priya S.",
    matchScore: 87,
  },
  {
    id: "3",
    title: "MacBook Air M2 - Midnight",
    description: "Left my laptop in lecture hall B-204 during the evening session.",
    category: "electronics",
    status: "lost",
    location: "Lecture Hall B-204",
    date: "2026-02-06",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    reportedBy: "Amit K.",
  },
  {
    id: "4",
    title: "Car Keys with Red Keychain",
    description: "Found a set of car keys with a distinctive red keychain near the south gate.",
    category: "keys",
    status: "found",
    location: "South Gate Entrance",
    date: "2026-02-09",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop",
    reportedBy: "Security Desk",
  },
  {
    id: "5",
    title: "Blue Backpack - JanSport",
    description: "Found a blue JanSport backpack with books and a water bottle inside.",
    category: "bags",
    status: "matched",
    location: "Student Center",
    date: "2026-02-05",
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    reportedBy: "Campus Security",
    matchScore: 94,
  },
  {
    id: "6",
    title: "Prescription Glasses - Ray-Ban",
    description: "Lost my prescription Ray-Ban glasses, black frame, in the gym area.",
    category: "accessories",
    status: "lost",
    location: "Campus Gymnasium",
    date: "2026-02-09",
    imageUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
    reportedBy: "Neha R.",
  },
];

export const stats = [
  { label: "Items Recovered", value: "12,450+", icon: "🎯" },
  { label: "Active Listings", value: "340", icon: "📋" },
  { label: "AI Match Rate", value: "89%", icon: "🤖" },
  { label: "Communities", value: "150+", icon: "🏘️" },
];
