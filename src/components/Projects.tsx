import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import images from src/assets
import EcoMindsImg from "@/assets/EcoMinds.png";
import VolunteerConnectImg from "@/assets/VolunteerConnect.png"; // Replace with actual
import ResumeAnalyzerImg from "@/assets/ResumeAnalyzer.png"; // Replace with actual

const Projects = () => {
  const projects = [
    {
      title: "Eco-Minds",
      description:
        "An AI-powered multilingual chatbot designed for healthcare awareness, accessible via WhatsApp and SMS. Built to provide health information and guidance in multiple languages.",
      technologies: ["Rasa", "Docker", "NLP", "Python", "WhatsApp API"],
      category: "AI/ML",
      link: "https://github.com/TanmayKhedekar/SIH-Hackathon.git",
      github: "https://github.com/TanmayKhedekar/SIH-Hackathon.git",
      image: EcoMindsImg,
    },
    {
      title: "Volunteer Connect",
      description:
        "A comprehensive NGO-volunteer matching platform that connects volunteers with organizations based on skills, interests, and location. Full-stack application with robust backend.",
      technologies: ["Java", "PostgreSQL", "Docker", "Spring Boot", "React"],
      category: "Full-Stack",
      link: "https://github.com/yashtaggy/volunteer-connect.git",
      github: "https://github.com/yashtaggy/volunteer-connect.git",
      image: VolunteerConnectImg,
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Intelligent web application that analyzes resumes using AI to provide feedback on content, formatting, and keyword optimization. Features automated deployment pipeline.",
      technologies: ["Flask", "Docker", "CI/CD", "Jenkins", "Python", "ML"],
      category: "AI/ML",
      link: "https://github.com/yashtaggy/AI-Resume-Analyser.git",
      github: "https://github.com/yashtaggy/AI-Resume-Analyser.git",
      image: ResumeAnalyzerImg,
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-hover transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header with Image or Gradient */}
              <div className="h-48 relative overflow-hidden">
                {project.image ? (
                  <>
                    <div
                      className="absolute inset-0 bg-center bg-cover transform transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-primary"></div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/90 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              Interested in Collaboration?
            </h3>
            <p className="mb-6 text-primary-foreground/90">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                const element = document.querySelector("#contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
