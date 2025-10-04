import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      role: "Product Developer Internship",
      company: "SETV Global",
      location: "Hyderabad (Remote)",
      period: "Sep 2025 - Present",
      description: "Working on AI application deployment and infrastructure automation using Microsoft Azure.",
      responsibilities: [
        "Deployed AI applications using Microsoft Azure cloud platform",
        "Prepared technical documentation and stakeholder communications",
        "Applied problem-solving and automation to enhance development processes",
        "Collaborated with cross-functional teams to deliver scalable solutions",
      ],
      technologies: ["Python", "Azure", "Docker", "Infrastructure as Code", "AI/ML"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building real-world solutions and gaining hands-on industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-hover transition-all duration-300 animate-fade-in-up"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.role}</h3>
                  <p className="text-xl font-semibold text-foreground mb-3">{exp.company}</p>
                  <div className="flex flex-wrap gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="h-8 w-8" />
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-semibold text-lg mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-sm mb-3 text-muted-foreground">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-primary text-primary-foreground">
            <p className="text-lg">
             Open to new opportunities and collaborations in AI, Cloud Computing, and Full-Stack Development
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
