
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A little about my background, who I am, and what I'm passionate about.
          </p>
          <Separator className="mt-8 max-w-md mx-auto bg-primary/30" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm <span className="font-semibold">Ronak Munjapara</span>, a software engineer from India who specializes in
              full-stack development with a focus on creating intuitive, user-friendly applications.
            </p>

            <p>
              I'm deeply passionate about exploring new technologies and integrating artificial intelligence into
              practical solutions that solve real-world problems. My goal is to make technology accessible to everyone,
              which is why I'm committed to developing free and open-source software.
            </p>

            <p>
              Beyond coding, I maintain a disciplined lifestyle and am a fitness enthusiast. I believe that balancing
              physical well-being with mental work leads to better problem-solving abilities and creativity in software
              development.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <span className="font-medium">Pronouns:</span>
              <span>he/him</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card p-6 hover:bg-primary/5 transition-colors duration-300">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" />
                    <path d="M19.4 15C19.1277 15.8031 19.2583 16.6718 19.7 17.4C20.0667 18.0577 20.0667 18.8423 19.7 19.5C19.3333 20.1577 18.6667 20.5 18 20.5C17.6976 20.4987 17.4016 20.4236 17.1334 20.28C16.865 20.1364 16.6328 19.9278 16.45 19.67C16.0174 19.0373 15.3332 18.6706 14.6 18.67C13.8669 18.6707 13.1828 19.0373 12.75 19.67C12.5679 19.9289 12.3357 20.1382 12.0669 20.2818C11.7981 20.4254 11.5014 20.5 11.2 20.5C10.8961 20.5 10.598 20.425 10.3286 20.2801C10.0591 20.1352 9.82685 19.9238 9.65 19.67C9.21724 19.0373 8.53311 18.6706 7.8 18.67C7.06689 18.6706 6.38276 19.0373 5.95 19.67C5.76321 19.9278 5.53097 20.1364 5.26259 20.28C4.99421 20.4236 4.69814 20.4987 4.4 20.5C3.73333 20.5 3.06667 20.1577 2.7 19.5C2.33333 18.8423 2.33333 18.0577 2.7 17.4C3.14171 16.6718 3.27231 15.8031 3 15C2.72769 14.1969 2.14171 13.5282 1.3 13.2C0.516116 12.88 0 12.28 0 11.5C0 10.72 0.516116 10.12 1.3 9.8C2.14171 9.47185 2.72769 8.80308 3 8C3.27231 7.19692 3.14171 6.32815 2.7 5.6C2.33333 4.94231 2.33333 4.15769 2.7 3.5C3.06667 2.84231 3.73333 2.5 4.4 2.5C4.69814 2.50131 4.99421 2.57641 5.26259 2.72003C5.53097 2.86364 5.76321 3.07222 5.95 3.33C6.38276 3.96274 7.06689 4.32941 7.8 4.33C8.53311 4.32941 9.21724 3.96274 9.65 3.33C9.83217 3.07113 10.0644 2.86185 10.3332 2.71823C10.602 2.57462 10.8986 2.5 11.2 2.5C11.5014 2.5 11.7981 2.57462 12.0669 2.71823C12.3357 2.86185 12.5679 3.07113 12.75 3.33C13.1828 3.96274 13.8669 4.32941 14.6 4.33C15.3332 4.32941 16.0174 3.96274 16.45 3.33C16.6328 3.07222 16.865 2.86364 17.1334 2.72003C17.4016 2.57641 17.6976 2.50131 18 2.5C18.6667 2.5 19.3333 2.84231 19.7 3.5C20.0667 4.15769 20.0667 4.94231 19.7 5.6C19.2583 6.32815 19.1277 7.19692 19.4 8C19.6723 8.80308 20.2583 9.47185 21.1 9.8C21.8839 10.12 22.4 10.72 22.4 11.5C22.4 12.28 21.8839 12.88 21.1 13.2C20.2583 13.5282 19.6723 14.1969 19.4 15Z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Committed to creating accessible software for everyone
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:bg-primary/5 transition-colors duration-300">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" />
                    <path d="M16 8L2 22" />
                    <path d="M17.5 15H9" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Software Design</h3>
                <p className="text-sm text-muted-foreground">
                  Creating intuitive and user-friendly applications
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:bg-primary/5 transition-colors duration-300">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
                    <path d="M15 9H9V15H15V9Z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">AI Enthusiast</h3>
                <p className="text-sm text-muted-foreground">
                  Exploring cutting-edge AI technologies and applications
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-6 hover:bg-primary/5 transition-colors duration-300">
              <CardContent className="p-0 flex flex-col items-center text-center">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 20V10" />
                    <path d="M12 20V4" />
                    <path d="M6 20V14" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Fitness</h3>
                <p className="text-sm text-muted-foreground">
                  Balancing tech work with physical well-being
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-tech-teal/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
