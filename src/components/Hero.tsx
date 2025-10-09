import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground font-medium">Hi, I'm</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Yash Bharat <span className="bg-gradient-primary bg-clip-text text-transparent">Tagunde</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                AI & Cloud Computing Enthusiast
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
              BTech Final Year Computer Science student specializing in AI & Edge Computing. 
              Passionate about building intelligent applications, deploying scalable cloud solutions, 
              and leveraging DevOps practices to create impactful technology.
            </p>

            {/* Key Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {["AI/ML", "Cloud & DevOps", "Full-Stack Dev", "Python", "Java"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => handleNavClick("#projects")}
                className="bg-gradient-primary hover:shadow-hover transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a
                href="/YashTagunde_v4.pdf"
                download="YashTagundev4.pdf"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
              <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/yash-t-a4330b1b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-soft hover:shadow-hover"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/yashtaggy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-soft hover:shadow-hover"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:yashtagunde704@gmail.com"
                className="p-3 bg-card hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 shadow-soft hover:shadow-hover"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-60 blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-60 blur-2xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30"></div>
                <img
                  src={profilePicture}
                  alt="Yash Bharat Tagunde"
                  className="relative rounded-full w-full h-full object-cover shadow-hover border-4 border-background"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-card shadow-hover rounded-2xl p-4 animate-float" style={{ animationDelay: "0.5s" }}>
                <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">4+</p>
                <p className="text-sm text-muted-foreground">Years Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
