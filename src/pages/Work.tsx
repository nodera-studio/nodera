import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkHero from '../components/work/WorkHero';
import ProjectCard from '../components/work/ProjectCard';
import FilterBar from '../components/work/FilterBar';
import { projectsData, getUniqueCategories } from '../data/projectsData';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Work: React.FC = () => {
  // State for filters and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Get the unique categories from the data
  const categories = getUniqueCategories();

  // Handle category toggle
  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  // Filter projects based on search query and selected categories
  const filteredProjects = projectsData.filter(project => {
    // Filter by search query
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by selected categories
    const matchesCategory = selectedCategories.length === 0 || 
                          selectedCategories.includes(project.category);
    
    return matchesSearch && matchesCategory;
  });

  // Calculate how many projects to display
  const initialProjectCount = 4;
  const displayedProjects = showAllProjects 
    ? filteredProjects 
    : filteredProjects.slice(0, initialProjectCount);

  // Adjust initial display to show 2 web apps and 2 websites when no filters are applied
  useEffect(() => {
    if (searchQuery === '' && selectedCategories.length === 0 && !showAllProjects) {
      // No need to do anything specific here as we'll handle the selection logic in the JSX
    }
  }, [searchQuery, selectedCategories, showAllProjects]);

  // Get the initial 4 projects - 2 websites and 2 web apps
  const getInitialProjects = () => {
    if (searchQuery === '' && selectedCategories.length === 0 && !showAllProjects) {
      const webApps = projectsData.filter(p => p.category === 'Web Application').slice(0, 2);
      const websites = projectsData.filter(p => p.category === 'Website').slice(0, 2);
      return [...webApps, ...websites];
    }
    return displayedProjects;
  };

  const projectsToDisplay = getInitialProjects();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <WorkHero />
        
        {/* Filter Bar - With significantly increased top padding to avoid code tab overlap */}
        <div className="sticky top-0 z-20 bg-white shadow-sm pt-20">
          <div className="container mx-auto py-3">
            <FilterBar 
              categories={categories}
              selectedCategories={selectedCategories}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onCategoryToggle={handleCategoryToggle}
            />
          </div>
        </div>
        
        {/* Project Grid Section - With 10px gap from filter bar */}
        <section className="bg-white">
          <div className="container mx-auto px-4 md:px-8 pt-3 pb-16 md:pb-24">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              <AnimatePresence>
                {projectsToDisplay.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Load More Button - Only show if there are more projects to load */}
            {!showAllProjects && filteredProjects.length > initialProjectCount && (
              <div className="mt-12 text-center">
                <Button 
                  onClick={() => setShowAllProjects(true)}
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-6"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Load More Projects
                </Button>
              </div>
            )}
            
            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <div className="mt-12 text-center py-10">
                <p className="text-xl text-gray-500">No projects match your filters.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategories([]);
                  }}
                  variant="link"
                  className="mt-2"
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Client Logos Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-comfortaa font-bold text-center mb-12">Trusted by Leading Brands</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 max-w-4xl mx-auto">
              {/* Client logos would go here */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-gray-400 text-xs">Client Logo</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
