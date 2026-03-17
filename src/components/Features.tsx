import { BrainCircuit, ShieldCheck, Zap } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2 text-black">
              Core <span className="text-black">Features</span>
            </h2>
            <p className="text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
              A quick look at what my projects are designed to do: deliver intelligent experiences, reliable systems, and real-world impact.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3">
            <StaggerItem className="rounded-2xl border border-gray-200 bg-white p-6 hover-lift shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl border border-gray-200 bg-gray-100 p-2">
                  <BrainCircuit className="text-gray-600" size={20} />
                </div>
                <h3 className="font-heading font-bold text-black">AI-Driven Intelligence</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                LLMs, computer vision, and ML pipelines that turn data into actionable guidance and decisions.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-gray-200 bg-white p-6 hover-lift shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl border border-gray-200 bg-gray-100 p-2">
                  <Zap className="text-gray-600" size={20} />
                </div>
                <h3 className="font-heading font-bold text-black">Performance & UX</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Low-latency backends and clean interfaces built for fast iteration, responsiveness, and clarity.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-2xl border border-gray-200 bg-white p-6 hover-lift shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-xl border border-gray-200 bg-gray-100 p-2">
                  <ShieldCheck className="text-gray-600" size={20} />
                </div>
                <h3 className="font-heading font-bold text-black">Reliability & Deployment</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dockerized services, CI/CD workflows, and robust fallbacks to keep systems stable in production.
              </p>
            </StaggerItem>
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Features;
