import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, User, ChevronUp } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 100;

      // Find active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-yellow-100">
      {/* Header/Navigation */}
      <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-yellow-400 cursor-pointer hover:scale-105 transition-transform" onClick={scrollToTop}>
              Portfolio
            </span>
            <div className="flex gap-6">
              {['about', 'skills', 'experience', 'projects'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize transition-all hover:text-red-400 ${
                    activeSection === section ? 'text-red-400 border-b-2 border-red-400' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="relative group">
              <img
                src="https://media.licdn.com/dms/image/v2/C5603AQG27gQ7dyFk7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1635859361280?e=1746057600&v=beta&t=WwkQ73oVmNVNSD5PMp0PhQpjpMid5Af8Ael0r7FjY20?auto=format&fit=crop&w=200&h=200"
                alt="Profile"
                className="w-40 h-40 rounded-full mb-8 ring-4 ring-red-500 group-hover:ring-yellow-400 transition-all duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-yellow-400 animate-fadeIn">Deven Parab</h1>
            <p className="text-xl text-yellow-200 mb-8 animate-slideUp">Information Technology Student</p>
            <p className="max-w-2xl text-yellow-100 mb-8 animate-slideUp delay-200">
              Proficient in programming, database management, and network administration, with strong troubleshooting and IT support
              skills. Highly skilled at handling diverse tasks and excelling in working long hours. Possess excellent communication and
              organizational abilities, ensuring efficient workflow.
            </p>
            <div className="flex gap-6 animate-slideUp delay-300">
              <a
                href="https://github.com/devenparab12"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-yellow-400 hover:text-red-400 transition-all hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/deven-parab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-yellow-400 hover:text-red-400 transition-all hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:devenparab17@gmail.com"
                className="p-2 text-yellow-400 hover:text-red-400 transition-all hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-red-950/20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-red-500 animate-pulse" size={32} />
            <h2 className="text-3xl font-bold text-yellow-400">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                category: 'Development', 
                skills: ['Java', 'Python', 'JavaScript', 'Node.js', 'HTML/CSS', 'PHP'] 
              },
              { 
                category: 'Tools & Technologies', 
                skills: ['MySQL', 'Apache', 'NetBeans', 'Google Suite', 'Microsoft Office'] 
              },
              { 
                category: 'Professional Skills', 
                skills: ['UI/UX Design', 'Database Management', 'Technical Support', 'Problem Solving', 'Team Collaboration'] 
              },
            ].map((group) => (
              <div
                key={group.category}
                className="group bg-red-950/30 rounded-lg p-6 border border-red-900/50 hover:bg-red-950/40 transition-all hover:scale-105 hover:border-red-500/50"
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-400 group-hover:text-red-400 transition-colors">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-yellow-400/10 rounded-full text-yellow-200 hover:bg-red-500/20 hover:text-red-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="text-red-500" size={32} />
            <h2 className="text-3xl font-bold text-yellow-400">Work Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                role: 'Intramural Sports Official',
                company: 'University Of Toledo',
                period: 'Jan 2025 - Present',
                description: 'Planned and executed sporting events, ensuring compliance with rules and regulations. Coordinated logistics and provided a safe playing environment. Enforced rules and maintained order during games.'
              },
              {
                role: 'Academics and HR Intern',
                company: 'Vidyalankar Institute of International Education',
                period: 'Nov 2022 - Feb 2023',
                description: 'Managed databases and coordinated events, increasing student participation by 30%. Developed and executed event strategies while maintaining professional communication with stakeholders.'
              },
              {
                role: 'Project Intern',
                company: 'Tata Communications',
                period: 'May 2022 - Jul 2022',
                description: 'Developed a project management system and implemented cloud-based tools to improve team productivity. Created Python-based projects to automate processes and enhance workflow efficiency.'
              }
            ].map((job, index) => (
              <div
                key={index}
                className="group bg-red-950/30 rounded-lg p-6 border border-red-900/50 hover:bg-red-950/40 transition-all hover:translate-x-2"
              >
                <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-red-400 transition-colors">
                  {job.role}
                </h3>
                <p className="text-red-400 group-hover:text-yellow-400 transition-colors">{job.company}</p>
                <p className="text-yellow-200/70 text-sm mb-4">{job.period}</p>
                <p className="text-yellow-100 group-hover:text-yellow-200 transition-colors">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-red-950/20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-red-500" size={32} />
            <h2 className="text-3xl font-bold text-yellow-400">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Web Shop Cart',
                description: 'An Electronics Shopping Website built with NetBeans, Java, and Apache. Features include item selection, secure confirmation process, real-time inventory checks, and automated email notifications.',
                tech: ['Java', 'Apache', 'NetBeans'],
                link: '#'
              },
              {
                title: 'Toledo Humane Society Database',
                description: 'A comprehensive database management system using Uniform Server, PHP, HTML, and CSS. Handles animal intake, treatment, adoptions, and volunteer registrations with real-time validation.',
                tech: ['PHP', 'MySQL', 'HTML/CSS'],
                link: '#'
              },
              {
                title: 'Banking Website',
                description: 'A secure online banking application with features for account management, balance checking, and fund transfers. Built with MySQL, JavaScript, Node.js, and modern web technologies.',
                tech: ['Node.js', 'MySQL', 'JavaScript'],
                link: '#'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-red-950/30 rounded-lg p-6 border border-red-900/50 hover:bg-red-950/40 transition-all hover:-translate-y-2"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-yellow-400 group-hover:text-red-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:text-red-300 transform hover:scale-110 transition-all"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-yellow-100 mb-4 group-hover:text-yellow-200 transition-colors">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-400/10 rounded-full text-yellow-200 text-sm group-hover:bg-red-500/20 group-hover:text-red-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-6">
        <div className="container mx-auto text-center text-yellow-200/70">
          <p>© 2024 Deven Parab. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-red-500 text-yellow-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-red-600 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App;
