import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { ProjectActions } from "./ProjectActions";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Projects = () => {
  const navigate = useNavigate();

  const projectOrder = [
    "fake-job-detector",
    "aria-customer-support",
    "clinical-ai",
  ];

  const orderedProjects = projectOrder
    .map(id => projects.find(p => p.id === id))
    .filter(Boolean);

  return (
    <section id="projects" className="py-24 bg-gray-100 bg-dotted">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-heading mb-4 text-black">
            Projects
          </h2>
        </Reveal>

        <div>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {orderedProjects.map((project, index) => (
              <StaggerItem
                key={project.id}
              >
                <div 
                  className="bg-gray-50 border border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => navigate(`/project-details#${project.id}`)}
                >
                  {/* Project Image */}
                  <div className="h-48 w-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-bold font-heading mb-4 text-black">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed line-clamp-3">
                      {project.subtitle}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <ProjectActions
                      projectId={project.id}
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                      size="md"
                    />
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default Projects;
