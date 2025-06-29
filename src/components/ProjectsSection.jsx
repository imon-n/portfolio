import { ArrowRight, ExternalLink, Github, Info } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Athletic-Hub",
    description: "Athletic-Hub is a modern web platform for creating, managing, and booking sports events with user authentication, event search, and a responsive UI",
    image: "/projects/event.png",
    tags: ["ReactJS", "Tailwind CSS", "Firebase"],
    demoUrl: "http://assignment-11-imon.surge.sh/",
    githubUrl: "https://github.com/imon-n/AthleticHub-client-side",
  },
  {
    id: 2,
    title: "PlantCare Platform",
    description: "PlantCare  A React-based app to manage and track your plant collection, Features include user authentication, plant add/update/view, beginner-friendly filters, and a clean, responsive UI with reusable components.",
    image: "/projects/PlantCare.png",
    tags: ["ReactJS", "Tailwind CSS", "Firebase"],
    demoUrl: "http://plantcareplatform.surge.sh/",
    githubUrl: "https://github.com/imon-n/PlantCareHub",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-base text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>


    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
          <div
              key={project.id}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <figure className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </figure>

              <div className="card-body p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge badge-outline badge-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="card-title text-lg font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="card-actions justify-start space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm rounded-md p-2 text-gray-700 hover:text-primary"
                    aria-label={`Demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm rounded-md p-2 text-gray-700 hover:text-primary"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm rounded-md p-2 text-gray-700 hover:text-primary"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <Info size={20} />
                  </a>
                </div>
              </div>
            </div>
      ))}
    </div>



        <div className="text-center mt-12">
          <a
            className="btn btn-primary btn-md inline-flex items-center gap-2 mx-auto"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/imon-n"
          >
            Visit My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
