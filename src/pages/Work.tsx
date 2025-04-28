
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: "Project 1", category: "websites", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
  { id: 2, title: "Project 2", category: "ecommerce", image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" },
  { id: 3, title: "Project 3", category: "applications", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6" },
  { id: 4, title: "Project 4", category: "portfolio", image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" },
  { id: 5, title: "Project 5", category: "websites", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" },
  { id: 6, title: "Project 6", category: "applications", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { id: 7, title: "Project 7", category: "ecommerce", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" },
  { id: 8, title: "Project 8", category: "portfolio", image: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "applications", label: "Web Applications" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "portfolio", label: "Portfolio" },
];

const ProjectCard = ({ title, image }: { title: string; image: string }) => (
  <Card className="overflow-hidden">
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardFooter className="p-4">
      <h3 className="text-xl font-medium">{title}</h3>
    </CardFooter>
  </Card>
);

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="Our Work" 
          subtitle="Explore our latest projects" 
        />

        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className="min-w-24"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  image={project.image}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-12 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10 h-10 rounded-full p-0"
                  >
                    {page}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
