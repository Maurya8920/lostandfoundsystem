import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/lib/mockData";
import { Upload, MapPin, Calendar, Send } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ReportPage = () => {
  const [type, setType] = useState<"lost" | "found">("lost");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Item reported successfully! We'll notify you of any AI matches.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-2xl px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-heading text-3xl font-bold text-foreground">
            Report an Item
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fill in the details and our AI will start searching for matches
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="mt-8 p-6 shadow-card">
            {/* Type toggle */}
            <div className="mb-6 flex rounded-lg bg-muted p-1">
              <button
                onClick={() => setType("lost")}
                className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                  type === "lost"
                    ? "bg-lost text-lost-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I Lost Something
              </button>
              <button
                onClick={() => setType("found")}
                className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
                  type === "found"
                    ? "bg-found text-found-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I Found Something
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="title">Item Name</Label>
                <Input id="title" placeholder="e.g., Black iPhone 15 Pro" className="mt-1.5" required />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {c.icon} {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the item in detail — color, brand, distinguishing features..."
                  className="mt-1.5"
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="location">
                    <MapPin className="mr-1 inline h-3.5 w-3.5" />
                    Location
                  </Label>
                  <Input id="location" placeholder="Where was it lost/found?" className="mt-1.5" required />
                </div>
                <div>
                  <Label htmlFor="date">
                    <Calendar className="mr-1 inline h-3.5 w-3.5" />
                    Date
                  </Label>
                  <Input id="date" type="date" className="mt-1.5" required />
                </div>
              </div>

              <div>
                <Label>Upload Photo</Label>
                <div className="mt-1.5 flex items-center justify-center rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary/50">
                  <div className="text-center">
                    <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      Drag & drop or click to upload
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Better photos = better AI matching
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="contact">Contact Info</Label>
                <Input id="contact" type="email" placeholder="your@email.com" className="mt-1.5" required />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="h-4 w-4" />
                Submit Report
              </Button>
            </form>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
