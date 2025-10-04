import { Cloud, Code, Bot, Palette, Database, Cog } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Deployment Solutions",
      description: "Deploy and scale applications on AWS and Azure with automated CI/CD pipelines, containerization using Docker, and infrastructure as code practices.",
      features: ["Azure & AWS Integration", "Docker Containerization", "CI/CD Pipeline Setup", "Infrastructure Automation"],
    },
    {
      icon: Code,
      title: "Full-Stack Web Development",
      description: "Build responsive, modern web applications using React, Flask, and robust database solutions with seamless API integrations.",
      features: ["React Frontend", "Flask Backend", "Database Design", "RESTful APIs"],
    },
    {
      icon: Bot,
      title: "AI-Powered Applications",
      description: "Develop intelligent applications leveraging machine learning, deep learning, NLP, and generative AI to solve complex problems.",
      features: ["Machine Learning Models", "NLP Integration", "Generative AI", "Deep Learning Solutions"],
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Design and optimize database architectures using MySQL and PostgreSQL with efficient query optimization and data modeling.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Performance Tuning"],
    },
    {
      icon: Cog,
      title: "DevOps & Automation",
      description: "Implement DevOps best practices with automated testing, continuous integration, deployment pipelines, and monitoring solutions.",
      features: ["Jenkins CI/CD", "Automated Testing", "GitOps Workflows", "Monitoring & Logging"],
    },
    {
      icon: Palette,
      title: "Technical Consultation",
      description: "Provide expert guidance on technology stack selection, architecture design, and best practices for scalable application development.",
      features: ["Architecture Planning", "Tech Stack Selection", "Code Review", "Best Practices"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="bg-gradient-primary bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
