
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHero from '../components/PageHero';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

const ProjectCard = ({ title, image }: { title: string; image: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <motion.img 
            src={image} 
            alt={title}
            className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <CardFooter className="p-4">
          <h3 className="text-xl font-medium">{title}</h3>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

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

  // Reset to page 1 when changing category
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />

      <main className="relative flex-grow pt-[60px]">
        <PageHero 
          title="Our Work" 
          subtitle="Explore our latest projects" 
        />

        <section className="py-6 sm:py-10 md:py-16 px-4 sm:px-6">
          <div className="container mx-auto">
            <div className="mb-6 sm:mb-10">
              <div className="w-full">
                <div className="flex justify-start sm:justify-center gap-2 pb-2 overflow-x-auto scrollbar-hide scroll-smooth">
                  {categories.map((category) => (
                    <motion.div
                      key={category.id}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        variant={activeCategory === category.id ? "primary" : "outline"}
                        onClick={() => setActiveCategory(category.id)}
                        className="min-w-[90px] sm:min-w-[120px] whitespace-nowrap text-sm h-9 sm:h-10 shadow-sm transition-all duration-200"
                      >
                        {category.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + currentPage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
              >
                {currentProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {totalPages > 1 && (
              <div className="flex justify-center mt-8 sm:mt-10 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "primary" : "outline"}
                    size="sm"
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full p-0 shadow-sm transition-all duration-200"
                  >
                    {page}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-10 sm:py-14 px-4 sm:px-6 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Have a project in mind?</h2>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 transition-all duration-300">
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      
      <style>
        {`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        `}
      </style>
    </div>
  );
};

export default Work;
