
import React, { useState } from 'react';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FilterBarProps {
  categories: string[];
  selectedCategories: string[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onCategoryToggle: (category: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  categories,
  selectedCategories,
  searchQuery,
  onSearchChange,
  onCategoryToggle,
}) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="w-full bg-white sticky top-0 z-20 shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8 py-4">
        {/* Search and filter toggle */}
        <div className="flex items-center gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-full rounded-full bg-gray-50 border-gray-200 focus-visible:ring-gray-300"
            />
          </div>
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
