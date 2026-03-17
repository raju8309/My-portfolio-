import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/data/profile.png";
import { Reveal } from "./Motion";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <Reveal className="space-y-4 lg:space-y-6 px-4 lg:px-0">
            <div>
              <p className="text-gray-300 text-base sm:text-lg font-medium mb-2">Hello,</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight">
                Raju here! <span className="animate-wave">👋</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg lg:max-w-xl">
              I'm a <span className="text-white font-medium">AI Engineer</span> with <span className="text-white font-medium">2+ years of experience</span>, built through an internship and multiple end-to-end projects.
              I work across <span className="text-white font-medium">LLMs / GenAI</span>, <span className="text-white font-medium">RAG</span>, <span className="text-white font-medium">embeddings</span>, <span className="text-white font-medium">fine-tuning</span>, <span className="text-white font-medium">classical ML</span>, <span className="text-white font-medium">NLP</span>, <span className="text-white font-medium">Deep Learning</span>, <span className="text-white font-medium">Computer Vision</span>, and <span className="text-white font-medium">MLOps</span>—from experimentation to deployment and monitoring.
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I completed my Master's in IT at the University of New Hampshire and I'm focused on building production-ready systems.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 lg:gap-4 pt-2 lg:pt-4">
              <a
                href="https://github.com/raju8309"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/raju-kotturi-609674304/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <Linkedin size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 lg:gap-4 pt-2">
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="https://drive.google.com/file/d/1GScAtR-Xo3rffvMTSkPnrBA17XpNGMOJ/view?usp=sharing" target="_blank" rel="noreferrer">
                  <FileText size={18} />
                  Resume
                </a>
              </Button>
              <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:rajukotturi175@gmail.com">
                  <Mail size={18} />
                  rajukotturi175@gmail.com
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Right Content - Profile Image */}
          <Reveal className="relative flex justify-center lg:justify-end" delay={0.12}>
            <div className="flex justify-center">
              <div className="
                w-[260px] h-[340px]
                sm:w-[300px] sm:h-[380px]
                md:w-[340px] md:h-[440px]
                lg:w-[380px] lg:h-[500px]
                rounded-[32px] overflow-hidden
              ">
                <img
                  src={profileImage}
                  alt="Raju Kotturi profile"
                  className="w-full h-full object-cover object-center scale-[1.06] transition-transform duration-700 ease-out hover:scale-[1.12]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
