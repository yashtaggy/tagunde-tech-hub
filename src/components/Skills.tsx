import { Code, Brain, Cloud, Smartphone, MessageSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "text-primary",
      skills: [
        { name: "Python", level: 85 },
        { name: "Java", level: 85 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "SQL", level: 90 },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "text-accent",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Deep Learning (CNNs, RNNs)", level: 65 },
        { name: "Generative AI", level: 70 },
        { name: "Natural Language Processing", level: 70 },
        { name: "Data Structures & Algorithms", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-secondary",
      skills: [
        { name: "Microsoft Azure", level: 85 },
        { name: "AWS", level: 80 },
        { name: "Docker", level: 85 },
        { name: "Jenkins", level: 70 },
        { name: "CI/CD Pipelines", level: 80 },
        { name: "Infrastructure as Code", level: 65 },
      ],
    },
    {
      title: "App Development",
      icon: Smartphone,
      color: "text-primary",
      skills: [
        { name: "Flask", level: 80 },
        { name: "React", level: 80 },
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "RESTful APIs", level: 60 },
      ],
    },
    {
      title: "Soft Skills",
      icon: MessageSquare,
      color: "text-accent",
      skills: [
        { name: "Communication", level: 80 },
        { name: "Teamwork", level: 85 },
        { name: "Problem Solving", level: 80 },
        { name: "Adaptability", level: 90 },
        { name: "Leadership", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through continuous learning and hands-on practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-primary/10 ${category.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground/80">{skill.name}</span>
                        <span className="text-sm font-bold text-primary">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover:shadow-hover transition-all duration-300">
            <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">5+</p>
            <p className="text-muted-foreground">Programming Languages</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-hover transition-all duration-300">
            <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10+</p>
            <p className="text-muted-foreground">Technologies Mastered</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-hover transition-all duration-300">
            <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">3+</p>
            <p className="text-muted-foreground">Major Projects Completed</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
