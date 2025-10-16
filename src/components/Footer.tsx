import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/download.png"
                alt="Elwak Islamic Centre Logo"
                className="h-10 w-auto rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                Elwak Islamic Centre
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Making a difference in communities through compassion, action, and sustainable change.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
              <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Services
              </Link>
            </nav>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get Involved</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/donate" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Donate
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:MAIBRA24@YAHOO.COM"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>MAIBRA24@YAHOO.COM</span>
              </a>

              <a
                href="https://wa.me/254722839934"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+254 722 83 99 34</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=ELWAK+South,+Mandera,+Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  ELWAK South<br />
                  Mandera, Kenya
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elwak Islamic Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
