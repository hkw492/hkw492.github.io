import { Mail, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-neon-blue to-primary bg-clip-text text-transparent animate-pulse">
                H K HEMANTH KUMAR
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              Game Programmer
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dynamic game developer with a passion for creating immersive experiences. 
            Specialized in Unreal Engine and gameplay mechanics design.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
              onClick={() => window.location.href = 'mailto:hemanthkumar492@icloud.com'}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('https://www.linkedin.com/in/hemanthkumar492', '_blank')}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2 border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.open('https://hkw492.github.io', '_blank')}
            >
              <Globe className="w-4 h-4" />
              Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
