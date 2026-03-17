import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import { Reveal, Stagger, StaggerItem } from "./Motion";

const Projects = () => {
  const navigate = useNavigate();

  const projectOrder = [
    "fake-job-detector",
    "photomentor-ai",
    "safelink-ai",
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
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="rounded-full border-gray-400 text-gray-800 hover:bg-gray-100 hover:border-gray-500 transition-colors text-sm px-4 py-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/project-details#${project.id}`);
                        }}
                      >
                        View Details
                        <ExternalLink size={14} className="ml-2" />
                      </Button>
                      
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 transition-colors text-sm px-4 py-2"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={project.demoUrl} target="_blank" rel="noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-600 bg-transparent hover:bg-gray-900 text-black hover:text-white font-bold transition-all duration-200 text-sm px-4 py-2"
                        >
                          <Github size={14} className="text-black group-hover:text-white" />
                          Code
                        </a>
                      )}
                    </div>
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
