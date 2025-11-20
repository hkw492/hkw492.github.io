const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary">About</span> Me
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-8 md:p-10 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.1)] transition-all">
          <p className="text-lg text-foreground leading-relaxed">
            Dynamic game developer with a <span className="text-primary font-semibold">friendly, positive attitude</span>. 
            Skilled in <span className="text-primary font-semibold">gameplay mechanics design</span> and proficient in 
            object-oriented programming, I excel in teamwork and collaboration, consistently delivering innovative 
            solutions that enhance player experience and engagement. Committed to proactive skill development and 
            coding standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
