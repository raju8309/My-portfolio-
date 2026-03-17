import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Reveal, StaggerItem } from "./Motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  showLabel?: boolean;
  label?: string;
}

const ProjectCard = ({ project, showLabel = false, label }: ProjectCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {showLabel && label && (
        <div className="text-center">
          <span className="text-sm text-gray-600 font-medium">{label}</span>
        </div>
      )}
      
      <div 
        className="bg-gray-50 border border-gray-300 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
        onClick={() => navigate(`/project-details#${project.id}`)}
      >
        {/* Project Image */}
        <div className="h-64 w-full overflow-hidden bg-gray-200 flex items-center justify-center">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold font-heading mb-3 text-black">
            {project.title}
          </h3>
          
          <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
            {project.subtitle}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 3).map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full border-gray-400 text-gray-800 hover:bg-gray-100 hover:border-gray-500 transition-colors text-xs px-3 py-1"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/project-details#${project.id}`);
              }}
            >
              View Details
              <ExternalLink size={12} className="ml-1" />
            </Button>
            
            {project.demoUrl && (
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 transition-colors text-xs px-3 py-1"
                asChild
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={12} className="mr-1" />
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
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-600 bg-transparent hover:bg-gray-900 text-black hover:text-white font-bold transition-all duration-200 text-xs px-3 py-1"
              >
                <Github size={12} className="text-black group-hover:text-white" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
