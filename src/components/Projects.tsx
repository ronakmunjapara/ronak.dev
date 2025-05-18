
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
  title: "Chat GPT Prompt Master",
  description: "Access 15,000+ categorized AI prompts with one click. Save time and boost productivity with ready-to-use prompts.",
  tags: ["Chrome Extension", "AI", "Productivity", "GPT"],
  github: "",
  live: "https://chromewebstore.google.com/detail/chat-gpt-prompt-master/jhkogielgfidmpmehdfcdegiophmpdip", // Replace with actual URL
  image: "/promptmaster.svg",
},
  {
  title: "FastGPT",
  description: "An AI-powered tool built with TypeScript for fast, intelligent interactions.",
  tags: ["TypeScript", "AI", "LLM", "Chatbot"],
  github: "https://github.com/ronakmunjapara/FastGPT",
  live: "https://fast-gpt-blue-two.vercel.app/",
  image: "/fastgpt.svg",
},

{
  title: "UnitConverter",
  description: "Free online tool to convert between hundreds of units including length, weight, temperature, and more.",
  tags: ["TypeScript", "Converter", "Utilities", "Web App"],
  github: "https://github.com/ronakmunjapara/UnitConverter",
  live: "https://unit-converter-puce.vercel.app/",
  image: "/uinitcoverter.svg",
},
{
  title: "FileSearchMaster",
  description: "A search engine that helps users find their files quickly and easily using TypeScript and advanced filtering.",
  tags: ["TypeScript", "Search", "File Utility", "Web App"],
  github: "https://github.com/ronakmunjapara/FileSearchMaster",
  live: "https://file-search-master.netlify.app/",
  image: "/filesearchMaster.svg",
},
{
  title: "Text-to-Speech Converter",
  description: "Convert any written text into speech instantly. Choose from multiple voices and improve web accessibility.",
  tags: ["Chrome Extension", "Accessibility", "TTS", "Voice"],
  
  live: "https://chromewebstore.google.com/detail/text-to-speech-converter/jjillmfokiepkhmldihkbfcomecdbgab", // Replace with actual URL
  image: "/tts.svg",
},
{
  title: "EyeShield - Blue Light Protection",
  description: "Protect your eyes from harmful blue light with a customizable warm overlay for comfortable browsing.",
  tags: ["Chrome Extension", "Health", "Blue Light", "Overlay"],
  
  live: "https://chromewebstore.google.com/detail/eyeshield-blue-light-prot/mjlmdgjmiackppcnkpepikipdnmjfaho", // Replace with actual URL
  image: "/eyesheild.svg",
}

];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, personal projects, and open-source contributions.
          </p>
          <Separator className="mt-8 max-w-md mx-auto bg-primary/30" />
        </div>

       <div className="grid md:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <Card key={index} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
      <div className="h-48 bg-secondary/50 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center opacity-70 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild variant="ghost" size="sm">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
        </Button>
        
        {project.live && (
          <Button asChild variant="ghost" size="sm">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  ))}
</div>

        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a 
              href="https://github.com/ronakmunjapara" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>See More on GitHub</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-tech-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;
