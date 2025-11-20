import { GraduationCap, Calendar, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const educationData = [
  {
    degree: "Master of Science: Game Technology",
    institution: "ICAT Design And Media College",
    location: "Chennai, India",
    date: "Expected 08/2026",
    highlights: [
      "Ember: The Near Nowhere - Game Programmer",
      "Advanced game development techniques",
      "Unreal Engine specialization"
    ]
  },
  {
    degree: "Bachelor of Science: Game Design And Development",
    institution: "IIFA Lancaster Degree College",
    location: "Bengaluru, India",
    date: "08/2023",
    highlights: [
      "Graduation with Distinction",
      "8.4 CGPA",
      "Strong foundation in game development"
    ]
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-primary">Education</span>
        </h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <CardTitle className="text-2xl text-foreground">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-primary">
                        {edu.institution}
                      </p>
                      <p className="text-muted-foreground">
                        {edu.location}
                      </p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Award className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
