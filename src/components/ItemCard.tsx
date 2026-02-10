import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { Item } from "@/lib/mockData";

const statusConfig: Record<string, { label: string; className: string }> = {
  lost: { label: "Lost", className: "bg-lost text-lost-foreground" },
  found: { label: "Found", className: "bg-found text-found-foreground" },
  matched: { label: "AI Matched", className: "bg-matched text-matched-foreground" },
};

interface ItemCardProps {
  item: Item;
  index?: number;
}

const ItemCard = ({ item, index = 0 }: ItemCardProps) => {
  const status = statusConfig[item.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
    >
      <Card className="group cursor-pointer overflow-hidden border shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <Badge className={`${status.className} border-0 text-xs font-semibold`}>
              {status.label}
            </Badge>
          </div>
          {item.matchScore && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-card/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="h-3 w-3 text-matched" />
              {item.matchScore}% Match
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-heading text-base font-semibold text-card-foreground line-clamp-1">
            {item.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {item.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {item.date}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ItemCard;
