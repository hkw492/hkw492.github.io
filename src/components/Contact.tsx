import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hemanthkumar492@icloud.com",
    href: "mailto:hemanthkumar492@icloud.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 80726 44359",
    href: "tel:+918072644359"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hosur, Tamil Nadu",
    href: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hemanthkumar492",
    href: "https://www.linkedin.com/in/hemanthkumar492"
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "hkw492.github.io",
    href: "https://hkw492.github.io"
  }
];

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <Card className="bg-card border-border">
          <CardContent className="p-8 md:p-10">
            <div className="grid gap-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border text-center">
              <Button 
                size="lg" 
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all"
                onClick={() => window.location.href = 'mailto:hemanthkumar492@icloud.com'}
              >
                <Mail className="w-4 h-4" />
                Send Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
