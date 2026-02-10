import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <MapPin className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-heading text-lg font-bold">FindIt</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link to="/browse" className="hover:text-foreground transition-colors">Browse</Link>
          <Link to="/report" className="hover:text-foreground transition-colors">Report</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 FindIt. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
