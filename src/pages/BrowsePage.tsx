import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ItemCard from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { mockItems, categories, type ItemStatus } from "@/lib/mockData";
import { Search, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const statusFilters: { value: ItemStatus | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "lost", label: "Lost" },
  { value: "found", label: "Found" },
  { value: "matched", label: "Matched" },
];

const BrowsePage = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<ItemStatus | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filtered = mockItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Browse Items
          </h1>
          <p className="mt-2 text-muted-foreground">
            Search through lost and found items in your community
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="mt-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items by name, description..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-1 mr-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
            {statusFilters.map((s) => (
              <Button
                key={s.value}
                variant={statusFilter === s.value ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter(s.value)}
              >
                {s.label}
              </Button>
            ))}
            <span className="mx-2 border-l" />
            <Button
              variant={categoryFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setCategoryFilter("all")}
            >
              All Categories
            </Button>
            {categories.map((c) => (
              <Button
                key={c.value}
                variant={categoryFilter === c.value ? "default" : "outline"}
                size="sm"
                onClick={() => setCategoryFilter(c.value)}
              >
                {c.icon} {c.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mt-8">
          <p className="mb-4 text-sm text-muted-foreground">
            {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, i) => (
                <ItemCard key={item.id} item={item} index={i} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search className="h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                No items found
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BrowsePage;
