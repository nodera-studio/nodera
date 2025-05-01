
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage
} from "@/components/ui/breadcrumb";
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items?: {
    label: string;
    href?: string;
    isCurrent?: boolean;
  }[];
}

const BreadcrumbNav: React.FC<BreadcrumbProps> = ({ items }) => {
  const location = useLocation();
  
  // Hide breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }
  
  // Generate breadcrumbs based on current path if not provided
  const breadcrumbItems = items || generateBreadcrumbs(location.pathname);
  
  return (
    <Breadcrumb className="my-4 font-comfortaa">
      <BreadcrumbList>
        {/* Always add Home as the first item */}
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        
        <BreadcrumbSeparator>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>
        
        {breadcrumbItems.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {item.isCurrent ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={item.href || '#'}>{item.label}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            
            {index < breadcrumbItems.length - 1 && (
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

// Helper function to generate breadcrumbs based on current path
const generateBreadcrumbs = (path: string) => {
  // Remove leading slash and split by /
  const pathSegments = path.split('/').filter(segment => segment);
  
  const breadcrumbs = [];
  let currentPath = '';
  
  for (let i = 0; i < pathSegments.length; i++) {
    const segment = pathSegments[i];
    currentPath += `/${segment}`;
    
    // Convert kebab-case or path to Title Case for display
    const label = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      label,
      href: currentPath,
      isCurrent: i === pathSegments.length - 1
    });
  }
  
  return breadcrumbs;
};

export default BreadcrumbNav;
