import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">
              Get in <span className="text-black">Touch</span>
            </h2>
            <p className="text-gray-700 text-lg mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </Reveal>

          {/* Contact Info */}
          <Stagger className="grid sm:grid-cols-2 gap-6 mb-12">
            <StaggerItem>
              <a
                href="mailto:rajukotturi175@gmail.com"
                className="bg-white border border-gray-200 rounded-2xl p-6 hover-lift flex items-center gap-4 group shadow-sm"
              >
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                  <Mail className="text-gray-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-black font-medium">rajukotturi175@gmail.com</p>
                </div>
              </a>
            </StaggerItem>

            <StaggerItem>
              <a
                href="tel:603-600-1255"
                className="bg-white border border-gray-200 rounded-2xl p-6 hover-lift flex items-center gap-4 group shadow-sm"
              >
                <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                  <Phone className="text-gray-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-black font-medium">603-600-1255</p>
                </div>
              </a>
            </StaggerItem>
          </Stagger>

          {/* Social Links */}
          <Reveal delay={0.08}>
            <div className="flex justify-center gap-4 mb-8">
              <a
                href="https://github.com/raju8309"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors group shadow-sm"
              >
                <Github className="text-gray-600 group-hover:text-black transition-colors" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raju-kotturi-609674304/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors group shadow-sm"
              >
                <Linkedin className="text-gray-600 group-hover:text-black transition-colors" size={24} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <Button variant="glow" size="lg" asChild>
              <a href="mailto:rajukotturi175@gmail.com">
                <Mail size={18} />
                Let's Connect
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
