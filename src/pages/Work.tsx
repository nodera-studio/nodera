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
  // State for filters, sorting, and pagination
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [sortOption, setSortOption] = useState('recommended');
  
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

  // Custom sort order for recommended projects
  const recommendedOrder = [
    'Nous CMS', 
    'Release Creator', 
    'Panorama Deluxe Residence', 
    'Furnihaus', 
    'Reno', 
    'Casa Nera', 
    'Tulsa Flowers', 
    'Location Matcher', 
    'Restaurant Discret', 
    'Geosistem'
  ];

  // Helper function to extract date for sorting
  const getDateValue = (dateStr: string): number => {
    if (dateStr === 'Ongoing') return Date.now(); // Ongoing projects are most recent
    
    const months: {[key: string]: number} = {
      'Jan': 0, 'January': 0,
      'Feb': 1, 'February': 1,
      'Mar': 2, 'March': 2,
      'Apr': 3, 'April': 3,
      'May': 4,
      'Jun': 5, 'June': 5,
      'Jul': 6, 'July': 6,
      'Aug': 7, 'August': 7,
      'Sep': 8, 'Sept': 8, 'September': 8,
      'Oct': 9, 'October': 9,
      'Nov': 10, 'November': 10,
      'Dec': 11, 'December': 11
    };
    
    const parts = dateStr.split(' ');
    if (parts.length === 2) {
      const month = months[parts[0]] || 0;
      const year = parseInt(parts[1], 10);
      return new Date(year, month, 1).getTime();
    }
    
    return 0; // Default value for unparseable dates
  };

  // Sort and filter projects
  const filteredAndSortedProjects = projectsData
    // First filter projects
    .filter(project => {
      // Filter by search query
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by selected categories
      const matchesCategory = selectedCategories.length === 0 || 
                            selectedCategories.includes(project.category);
      
      return matchesSearch && matchesCategory;
    })
    // Then sort projects
    .sort((a, b) => {
      switch (sortOption) {
        case 'recommended':
          return recommendedOrder.indexOf(a.title) - recommendedOrder.indexOf(b.title);
        case 'newest':
          return getDateValue(b.date) - getDateValue(a.date);
        case 'oldest':
          return getDateValue(a.date) - getDateValue(b.date);
        case 'a-z':
          return a.title.localeCompare(b.title);
        case 'z-a':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  // Calculate how many projects to display
  const initialProjectCount = 4;
  const displayedProjects = showAllProjects 
    ? filteredAndSortedProjects 
    : filteredAndSortedProjects.slice(0, initialProjectCount);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="relative flex-grow pt-[60px]">
        {/* Hero Section */}
        <WorkHero />
        
        {/* Filter Bar - With 10px gap top and bottom */}
        <div className="bg-white pt-[10px]" style={{ boxShadow: 'none' }}>
          <div className="container mx-auto px-[10px]">
            <FilterBar 
              categories={categories}
              selectedCategories={selectedCategories}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onCategoryToggle={handleCategoryToggle}
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </div>
        </div>
        
        {/* Project Grid Section - With exactly 10px left and right padding */}
        <section className="bg-white">
          <div className="container mx-auto px-[10px] pt-[10px] pb-16 md:pb-24">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
              <AnimatePresence>
                {displayedProjects.map((project, index) => (
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
            {!showAllProjects && filteredAndSortedProjects.length > initialProjectCount && (
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
            {filteredAndSortedProjects.length === 0 && (
              <div className="mt-12 text-center py-10">
                <p className="text-xl text-gray-500">No projects match your filters.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategories([]);
                    setSortOption('recommended');
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
          <div className="container mx-auto px-[10px]">
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
