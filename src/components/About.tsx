import { GraduationCap, Award, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "BTech Computer Science",
      specialization: "AI & Edge Computing",
      institution: "MIT ADT University, Pune",
      period: "2022 - 2026",
      grade: "CGPA: 8.02/10",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "PVG's Muktangan Jr. College, Pune",
      period: "2022",
      grade: "71.67%",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtriya Mandal's Eng. School, Pune",
      period: "2020",
      grade: "81.20%",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate technologist with a drive to innovate and create impactful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Bio Card */}
          <Card className="lg:col-span-2 p-8 hover:shadow-hover transition-all duration-300 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              My Journey
            </h3>
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I'm Yash Bharat Tagunde, a 4th-year Computer Science undergraduate at MIT ADT University, 
                specializing in AI & Edge Computing. With a strong foundation in programming and a passion 
                for artificial intelligence, I've dedicated myself to mastering cutting-edge technologies.
              </p>
              <p>
                My journey in tech has led me to explore various domains including machine learning, 
                deep learning, cloud computing, and DevOps. I've gained hands-on experience through 
                internships and personal projects, always seeking to apply theoretical knowledge to 
                solve real-world problems.
              </p>
              <p>
                Currently working as a Product Developer at SETV Global, I'm deploying AI applications 
                on Microsoft Azure and contributing to innovative solutions that make a difference. 
                My goal is to continue growing as a technologist while creating meaningful impact through 
                intelligent, scalable applications.
              </p>
            </div>
          </Card>

          {/* Highlights Card */}
          <Card className="p-8 hover:shadow-hover transition-all duration-300 animate-fade-in space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-secondary" />
                <h4 className="text-lg font-semibold">Certifications</h4>
              </div>
              <p className="text-foreground/80">DELF B2 in French Language</p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Languages className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-semibold">Languages</h4>
              </div>
              <p className="text-foreground/80">English (Fluent), French (DELF B2), Hindi, Marathi</p>
            </div>

            <div className="pt-4 border-t border-border">
              <h4 className="text-lg font-semibold mb-3">Key Strengths</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Problem Solving</li>
                <li>• Team Collaboration</li>
                <li>• Adaptability</li>
                <li>• Communication</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Education Timeline */}
        <div className="animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center">Education Timeline</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-all duration-300 border-l-4 border-l-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
                    {edu.specialization && (
                      <p className="text-sm text-accent font-medium mt-1">{edu.specialization}</p>
                    )}
                    <p className="text-foreground/70 mt-2">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground font-medium">{edu.period}</p>
                    <p className="text-lg font-bold text-secondary mt-1">{edu.grade}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
