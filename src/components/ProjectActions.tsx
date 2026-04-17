import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

interface ProjectActionsProps {
  projectId: string;
  demoUrl?: string;
  githubUrl?: string;
  size?: "sm" | "md";
  onNavigate?: () => void;
}

export const ProjectActions = ({
  projectId,
  demoUrl,
  githubUrl,
  size = "md",
  onNavigate,
}: ProjectActionsProps) => {
  const navigate = useNavigate();

  const iconSize = size === "sm" ? 12 : 14;
  const textSize = size === "sm" ? "text-xs" : "text-sm";
  const px = size === "sm" ? "px-3" : "px-4";
  const py = size === "sm" ? "py-1" : "py-2";

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-gray-400 text-gray-800 hover:bg-gray-100 hover:border-gray-500 transition-colors ${textSize} ${px} ${py}`}
        onClick={(e) => {
          e.stopPropagation();
          onNavigate?.();
          navigate(`/project-details#${projectId}`);
        }}
      >
        View Details
        <ExternalLink size={iconSize} className="ml-1 sm:ml-2" />
      </Button>

      {demoUrl && (
        <Button
          variant="outline"
          size="sm"
          className={`rounded-full border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600 transition-colors ${textSize} ${px} ${py}`}
          asChild
          onClick={(e) => e.stopPropagation()}
        >
          <a href={demoUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={iconSize} className="mr-1 sm:mr-2" />
            Demo
          </a>
        </Button>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-600 bg-transparent hover:bg-gray-900 text-black hover:text-white font-bold transition-all duration-200 ${textSize} ${px} ${py}`}
        >
          <Github size={iconSize} />
          Code
        </a>
      )}
    </div>
  );
};

export default ProjectActions;
