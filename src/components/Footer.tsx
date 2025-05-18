import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/ronakmunjapara",
      icon: <Github className="h-4 w-4" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ronakmunjapara",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ronakmunjapara",
      icon: <Twitter className="h-4 w-4" />,
    },
    {
      name: "Email",
      url: "mailto:munjapararonak1@gmail.com",
      icon: <Mail className="h-4 w-4" />,
    },
  ];

  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-gradient">Ronak.dev</a>
            <p className="text-sm text-muted-foreground mt-2">
              Building free and open-source software
            </p>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <Separator className="my-6 bg-secondary/30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ronak Munjapara. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
