import { Gamepad2, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Featured <span className="text-primary">Project</span>
        </h2>
        
        <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-neon-blue/20 flex items-center justify-center flex-shrink-0">
                <Gamepad2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <CardTitle className="text-3xl text-foreground">
                  Ember: The Near Nowhere
                </CardTitle>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                    <Code className="w-3 h-3 mr-1" />
                    Game Programmer
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                    Unreal Engine
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                    Master's Project
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A major game development project as part of my Master's degree at ICAT Design And Media College. 
              Served as the Game Programmer, implementing core gameplay mechanics, systems programming, and 
              technical features using Unreal Engine. This project showcases advanced game development 
              techniques and professional-level programming standards.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
