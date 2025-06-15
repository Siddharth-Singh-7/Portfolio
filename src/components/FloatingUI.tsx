
import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Github, Linkedin, Phone, MapPin, GraduationCap } from 'lucide-react';

export const FloatingUI = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex space-x-2 bg-black/20 backdrop-blur-md rounded-full px-4 py-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setActiveSection(activeSection === 'about' ? null : 'about')}
            className="text-white hover:bg-white/20"
          >
            About
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setActiveSection(activeSection === 'education' ? null : 'education')}
            className="text-white hover:bg-white/20"
          >
            Education
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setActiveSection(activeSection === 'contact' ? null : 'contact')}
            className="text-white hover:bg-white/20"
          >
            Contact
          </Button>
        </div>
      </div>

      {/* About Section */}
      {activeSection === 'about' && (
        <div className="fixed top-20 left-4 z-40 max-w-md">
          <Card className="bg-black/80 backdrop-blur-md border-purple-500/30 text-white">
            <CardHeader>
              <CardTitle className="text-purple-300">About Siddharth</CardTitle>
              <CardDescription className="text-gray-300">
                Passionate Computer Science Student
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-200 mb-4">
                I'm a dedicated computer science student with a passion for web development, 
                3D graphics, and creating innovative digital experiences. I love learning 
                new technologies and building projects that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-purple-600/50">Problem Solver</Badge>
                <Badge variant="secondary" className="bg-blue-600/50">Team Player</Badge>
                <Badge variant="secondary" className="bg-green-600/50">Quick Learner</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Education Section */}
      {activeSection === 'education' && (
        <div className="fixed top-20 right-4 z-40 max-w-md">
          <Card className="bg-black/80 backdrop-blur-md border-blue-500/30 text-white">
            <CardHeader>
              <CardTitle className="text-blue-300 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-200">Bachelor of Computer Science</h4>
                <p className="text-sm text-gray-300">University Name</p>
                <p className="text-xs text-gray-400">2022 - 2026 (Expected)</p>
                <p className="text-sm text-gray-200 mt-2">
                  Relevant Coursework: Data Structures, Algorithms, Web Development, 
                  Database Systems, Software Engineering
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-200">Achievements</h4>
                <ul className="text-sm text-gray-200 list-disc list-inside mt-1">
                  <li>Dean's List (GPA: 3.8/4.0)</li>
                  <li>Programming Club President</li>
                  <li>Hackathon Winner (2023)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 max-w-md">
          <Card className="bg-black/80 backdrop-blur-md border-green-500/30 text-white">
            <CardHeader>
              <CardTitle className="text-green-300">Get In Touch</CardTitle>
              <CardDescription className="text-gray-300">
                Let's connect and collaborate!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/20">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/20">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/20">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white/20">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                Available for internships and projects
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Instructions */}
      <div className="fixed bottom-4 right-4 z-40">
        <Card className="bg-black/60 backdrop-blur-md border-white/20 text-white max-w-xs">
          <CardContent className="p-3">
            <p className="text-xs text-gray-300">
              🖱️ Click and drag to rotate • 🔍 Scroll to zoom • ✨ Hover over elements to interact
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
