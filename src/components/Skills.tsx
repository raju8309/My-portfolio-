import { Reveal, Stagger, StaggerItem } from "./Motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML/CSS", "C/C++"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "FastAPI", "Node.js", "OpenCV", "TensorFlow", "ONNX", "pandas", "NumPy"],
  },
  {
    title: "AI/ML Tools",
    skills: ["NLP", "TF-IDF", "Logistic Regression", "BERT", "SBERT", "LLMs", "RAG", "Hugging Face", "PyTorch", "Deep Learning", "Computer Vision", "FER+"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Render", "Vercel", "CI/CD", "REST APIs", "CORS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "SQLite3"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-black">
            Technical <span className="text-black">Skills</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </Reveal>

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <StaggerItem
              key={category.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover-lift shadow-sm"
            >
              <h3 className="text-lg font-heading font-semibold mb-4 text-black">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Skills;
