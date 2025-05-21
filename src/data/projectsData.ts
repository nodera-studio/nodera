
// Define the Project interface
export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  subcategory: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  date: string;  // Added date field
}

// Projects data array
export const projectsData: Project[] = [
  // Web Applications
  {
    id: 1,
    title: "Nous CMS",
    slug: "nous-cms",
    category: "Web Application",
    subcategory: "Web Application",
    description: "Museums telling better stories, simplified. An intuitive CMS that turns complex content into engaging mobile guides—no technical headaches for staff, just rich experiences for visitors.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Nous CMS application interface",
    date: "Ongoing"
  },
  {
    id: 2,
    title: "Release Creator",
    slug: "release-creator",
    category: "Web Application",
    subcategory: "Web Application",
    description: "Development chaos, beautifully organized. Visual release tracking that improves team communication and automates deployments, letting everyone focus on building great products.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Release Creator tracking interface",
    date: "Dec 2024"
  },
  {
    id: 3,
    title: "Reno",
    slug: "reno-app",
    category: "Web Application",
    subcategory: "Web Application",
    description: "Evolution that users actually notice. Performance enhancements and an interface redesign that delivered higher engagement and a platform ready for whatever comes next.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Reno application interface",
    date: "May 2024"
  },
  {
    id: 4,
    title: "Location Matcher",
    slug: "location-matcher",
    category: "Web Application",
    subcategory: "Web Application",
    description: "Turning reinsurance data complexity into visual clarity. Specialized workflows and visualization tools that reveal the patterns hidden in sprawling property datasets.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Location Matcher visualization",
    date: "Oct 2023"
  },
  
  // Websites
  {
    id: 5,
    title: "Furnihaus",
    slug: "furnihaus",
    category: "Website",
    subcategory: "Website",
    description: "Craftsmanship deserves a beautiful showcase. A platform connecting talented artisans with design enthusiasts, where every scroll reveals another reason to appreciate handcrafted quality.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Furnihaus website showcase",
    date: "May 2025"
  },
  {
    id: 6,
    title: "Tulsa Flowers",
    slug: "tulsa-flowers",
    category: "Online Store",
    subcategory: "E-commerce Website",
    description: "Bringing floral artistry from shop to doorstep. A seamless online shopping experience that feels as personal as walking into the store—without leaving the couch.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Tulsa Flowers e-commerce website",
    date: "February 2025"
  },
  {
    id: 7,
    title: "Casa Nera",
    slug: "casa-nera",
    category: "Website",
    subcategory: "Web Application & Website",
    description: "Rustic charm meets modern convenience. A showcase for a unique restaurant and cabin retreat with a booking system that turns interest into confirmed reservations in moments.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Casa Nera website",
    date: "January 2024"
  },
  {
    id: 8,
    title: "Restaurant Discret",
    slug: "restaurant-discret",
    category: "Website",
    subcategory: "Website & Booking Interface",
    description: "Where taste begins with the eyes. An elegant restaurant presence with integrated booking that transforms interest into reservations without interrupting the culinary journey.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Restaurant Discret booking interface",
    date: "June 2023"
  },
  {
    id: 9,
    title: "Panorama Deluxe Residence",
    slug: "panorama-deluxe",
    category: "Website",
    subcategory: "Website & Reservation Interface",
    description: "Luxury in the details. Beyond showcasing accommodations, this hotel platform gives guests control over their experience with specialized amenity booking.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Panorama Deluxe Residence website",
    date: "July 2022"
  },
  {
    id: 10,
    title: "Geosistem",
    slug: "geosistem",
    category: "Website",
    subcategory: "Website",
    description: "Precision meets presentation. Complex topography services translated into visually compelling content that helps technical clients understand specialized offerings with clarity.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    imageAlt: "Geosistem website services page",
    date: "Sept 2022"
  }
];

// Get unique categories
export const getUniqueCategories = (): string[] => {
  return Array.from(new Set(projectsData.map(project => project.category)));
};

