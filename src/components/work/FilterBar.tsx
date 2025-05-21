
import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Search, Filter, ArrowDownAZ, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface FilterBarProps {
  categories: string[];
  selectedCategories: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategoryToggle: (category: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategories,
  searchQuery,
  onSearchChange,
  onCategoryToggle,
  sortOption,
  onSortChange,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const sortOptions = [
    { value: 'recommended', label: 'Recommended' },
    { value: 'newest', label: 'Date: Newest First' },
    { value: 'oldest', label: 'Date: Oldest First' },
    { value: 'a-z', label: 'Title: A-Z' },
    { value: 'z-a', label: 'Title: Z-A' },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] py-4" style={{ boxShadow: 'none' }}>
      <div className="container mx-auto px-[10px]">
        {/* Search, sort and filter controls - centered */}
        <div className="flex items-center justify-center gap-3">
          {/* Sort dropdown */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-gray-700"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <ArrowDownAZ className="h-4 w-4" />
              <span className="hidden sm:inline">Sort</span>
              <ChevronDown className="h-3 w-3" />
            </Button>
            
            {showSortOptions && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-md z-10 w-48">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                      sortOption === option.value ? 'bg-gray-50 font-medium' : ''
                    }`}
                    onClick={() => {
                      onSortChange(option.value);
                      setShowSortOptions(false);
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Search input */}
          <div className="relative w-full max-w-[300px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-full h-9 rounded-full bg-white border-transparent hover:bg-white focus:bg-white focus-visible:bg-white focus:ring-0 focus:border-transparent focus-visible:border-transparent shadow-none focus:shadow-none focus-visible:shadow-none"
            />
          </div>
          
          {/* Filter button */}
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 text-gray-700"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>

        {/* Category filters */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 pb-1 overflow-hidden"
          >
            <p className="text-sm text-gray-500 mb-2">Filter by category:</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "accent" : "outline"}
                  size="sm"
                  className="rounded-full"
                  onClick={() => onCategoryToggle(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
