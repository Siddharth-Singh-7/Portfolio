
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Award, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

interface Achievement {
  title: string;
  organization: string;
  position: string;
  description: string;
  year: string;
  gradient: string;
  icon: any;
  details?: string;
  photos?: string[];
  skills?: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  gradient: string;
  details?: string;
  photos?: string[];
  features?: string[];
  challenges?: string[];
  github?: string;
  demo?: string;
}

interface DetailedOverviewProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'achievement' | 'project';
  data: Achievement | Project;
}

export const DetailedOverview = ({ isOpen, onClose, type, data }: DetailedOverviewProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const isAchievement = type === 'achievement';
  const achievement = isAchievement ? data as Achievement : null;
  const project = !isAchievement ? data as Project : null;

  const photos = data.photos || [];
  
  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  // Reset photo index when dialog opens
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCurrentPhotoIndex(0);
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 border border-gray-700/50 text-white">
        <DialogHeader>
          <DialogTitle className={`text-2xl font-bold bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent`}>
            {data.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Info */}
          <div className="flex flex-wrap gap-4 items-center">
            {isAchievement && achievement && (
              <>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  {achievement.position}
                </Badge>
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4" />
                  {achievement.year}
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Award className="w-4 h-4" />
                  {achievement.organization}
                </div>
              </>
            )}
            {!isAchievement && project && (
              <>
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`${project.status === "Completed" ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}
                >
                  {project.status}
                </Badge>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">Description</h3>
            <p className="text-gray-300 leading-relaxed">{data.description}</p>
          </div>

          {/* Detailed Information */}
          {((isAchievement && achievement?.details) || (!isAchievement && project?.details)) && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Details</h3>
              <p className="text-gray-300 leading-relaxed">
                {isAchievement ? achievement?.details : project?.details}
              </p>
            </div>
          )}

          {/* Technologies/Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              {isAchievement ? 'Skills Demonstrated' : 'Technologies Used'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(isAchievement ? achievement?.skills || [] : project?.technologies || []).map((item, index) => (
                <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project-specific sections */}
          {!isAchievement && project && (
            <>
              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Key Features</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Challenges & Solutions</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Photos with Navigation */}
          {photos && photos.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2 text-white">Gallery</h3>
              <div className="relative">
                <img
                  src={photos[currentPhotoIndex]}
                  alt={`${data.title} photo ${currentPhotoIndex + 1}`}
                  className="w-full h-96 object-cover rounded-lg border border-gray-700/50"
                />
                
                {photos.length > 1 && (
                  <>
                    <Button
                      onClick={prevPhoto}
                      size="icon"
                      variant="outline"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 border-gray-600 hover:bg-gray-800"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <Button
                      onClick={nextPhoto}
                      size="icon"
                      variant="outline"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 border-gray-600 hover:bg-gray-800"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-sm text-white">
                      {currentPhotoIndex + 1} / {photos.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
