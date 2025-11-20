import { Code2, Lightbulb, Users, Zap, GamepadIcon, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Users,
    title: "Friendly & Positive",
    description: "Collaborative team player with excellent communication"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always expanding knowledge and staying current"
  },
  {
    icon: Code2,
    title: "Coding Standards",
    description: "Committed to clean, maintainable code"
  },
  {
    icon: GamepadIcon,
    title: "Gameplay Mechanics",
    description: "Expert in designing engaging game systems"
  },
  {
    icon: Zap,
    title: "OOP Proficiency",
    description: "Strong foundation in object-oriented programming"
  },
  {
    icon: Lightbulb,
    title: "Game Engine Expert",
    description: "Proficient in Unreal Engine development"
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary">Skills</span> & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
