
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl text-left">
          <p className="text-md font-medium text-primary mb-4 opacity-90">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Ronak <span className="text-gradient">Munjapara</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Full Stack Developer & AI Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl">
            A passionate software engineer from India who creates free and open-source software.
            I believe that everyone should have access to high-quality software, regardless of their financial situation.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-muted-foreground">Check out my profiles:</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/ronakmunjapara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://dev.to/ronakmunjapara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/ronakmunjapara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group">
          <span className="text-sm mb-2 group-hover:text-primary transition-colors">Scroll Down</span>
          <ArrowDown className="h-5 w-5 group-hover:text-primary transition-colors" />
        </a>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-tech-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-tech-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
