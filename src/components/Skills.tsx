import { CustomProgress } from "@/components/ui/custom-progress";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

const Skills = () => {
  const isMobile = useIsMobile();

  const technicalSkills = [
    { name: "Dot Net core", level: 90 },
    { name: "SQL ", level: 85 },
    { name: "Angular ", level: 70 },
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Python", level: 70 },
    { name: "AI Agent, N8N & AI Automation", level: 75 },
    { name: "Docker & Kubernetes", level: 70 },
    { name: "Git", level: 95 },

  ];

  const otherSkills = [
    { name: "Fullstack Development", level: 80 },
    { name: "SEO", level: 80 },
    { name: "Technical Writing", level: 85 },
    { name: "Problem Solving", level: 90 },
  ];

  const tools = [
    "VS Code",
    "Git & GitHub",
    "Figma",
    "Postman",
    "Docker",
    "N8N",
    "Jira",
    "Notion",
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with over the years.
          </p>
          <Separator className="mt-8 max-w-md mx-auto bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    {!isMobile && (
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    )}
                  </div>
                  <CustomProgress 
                    value={skill.level} 
                    className="h-2" 
                    indicatorClassName="bg-gradient-to-r from-tech-purple to-tech-blue" 
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Other Skills</h3>
              <div className="space-y-6">
                {otherSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      {!isMobile && (
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      )}
                    </div>
                    <CustomProgress 
                      value={skill.level} 
                      className="h-2" 
                      indicatorClassName="bg-gradient-to-r from-tech-blue to-tech-teal" 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Tools & Software</h3>
              <div className="grid grid-cols-2 gap-4">
                {tools.map((tool) => (
                  <Card key={tool} className="glass-card border-primary/10">
                    <CardContent className="p-4 flex items-center justify-center">
                      <span className="text-sm">{tool}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-tech-blue/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;
