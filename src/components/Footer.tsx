import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3">
              Yash Tagunde
            </h3>
            <p className="text-muted-foreground">
              Building intelligent solutions with AI, Cloud, and Modern Web Technologies
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Skills", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/yashtaggy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yash-t-a4330b1b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashtagunde704@gmail.com"
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Yash Bharat Tagunde.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
