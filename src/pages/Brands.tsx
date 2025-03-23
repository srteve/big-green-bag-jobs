
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { BrandCard, BrandProps } from "@/components/BrandCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Sample brands data
const brandsData: BrandProps[] = [
  {
    id: "1",
    name: "Allbirds",
    logo: "",
    category: "Footwear & Apparel",
    location: "San Francisco, CA",
    employeeCount: "500-1000",
    yearFounded: 2016,
    jobCount: 3,
    tags: ["Sustainable", "D2C", "Fashion"],
    isFeatured: true,
  },
  {
    id: "2",
    name: "Gymshark",
    logo: "",
    category: "Fitness Apparel",
    location: "United Kingdom",
    employeeCount: "1000+",
    yearFounded: 2012,
    jobCount: 5,
    tags: ["Fitness", "Apparel", "Global"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "MVMT",
    logo: "",
    category: "Watches & Accessories",
    location: "Los Angeles, CA",
    employeeCount: "100-500",
    yearFounded: 2013,
    jobCount: 2,
    tags: ["Accessories", "Fashion", "D2C"],
  },
  {
    id: "4",
    name: "Kylie Cosmetics",
    logo: "",
    category: "Beauty & Cosmetics",
    location: "California",
    employeeCount: "100-500",
    yearFounded: 2015,
    jobCount: 4,
    tags: ["Beauty", "Cosmetics", "Celebrity"],
  },
  {
    id: "5",
    name: "Bombas",
    logo: "",
    category: "Socks & Apparel",
    location: "New York, NY",
    employeeCount: "100-500",
    yearFounded: 2013,
    jobCount: 3,
    tags: ["Apparel", "Social Good", "D2C"],
  },
  {
    id: "6",
    name: "Away",
    logo: "",
    category: "Travel & Luggage",
    location: "New York, NY",
    employeeCount: "100-500",
    yearFounded: 2015,
    jobCount: 2,
    tags: ["Travel", "Luggage", "D2C"],
  },
];

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
    setSearchTerm("");
    setLocation("");
    setCategory("");
  };

  // Filter brands based on search term, location, and category
  const filteredBrands = brandsData.filter(brand => {
    const matchesSearch = 
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesLocation = 
      !location || brand.location.toLowerCase().includes(location.toLowerCase());
      
    const matchesCategory = 
      !category || brand.category === category;
    
    const matchesFilters = 
      activeFilters.length === 0 || 
      activeFilters.some(filter => 
        brand.tags.some(tag => tag === filter)
      );
      
    return matchesSearch && matchesLocation && matchesCategory && matchesFilters;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bgb-900 mb-4">Top Shopify Brands</h1>
          <p className="text-xl text-bgb-600 max-w-2xl mx-auto">
            Discover and follow your favorite Shopify-powered retailers
          </p>
        </div>
        
        {/* Search bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bgb-400" />
              <Input
                placeholder="Search brands by name or category"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="relative md:w-1/4">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bgb-400" />
              <Input
                placeholder="Location"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="md:w-1/4">
              <Select value={category} onValueChange={(value) => setCategory(value)}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Filter className="mr-2 h-4 w-4 text-bgb-400" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {Array.from(new Set(brandsData.map(brand => brand.category))).map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Popular Tags */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-bgb-700 mb-2">Popular tags</h3>
            <div className="flex flex-wrap gap-2">
              {["D2C", "Fashion", "Beauty", "Sustainable", "Apparel", "Fitness", "Home", "Food & Beverage"].map(tag => (
                <Badge 
                  key={tag}
                  variant={activeFilters.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    activeFilters.includes(tag) 
                      ? "bg-primary hover:bg-primary/90" 
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => toggleFilter(tag)}
                >
                  {tag}
                  {activeFilters.includes(tag) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </Badge>
              ))}
              {activeFilters.length > 0 && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="h-6 text-xs px-2 text-bgb-500 hover:text-bgb-700"
                >
                  Clear all
                </Button>
              )}
            </div>
          </div>
        </div>
        
        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-bgb-600">
            Showing <span className="font-semibold text-bgb-900">{filteredBrands.length}</span> brands
          </p>
          <Select defaultValue="alphabetical">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alphabetical">Alphabetical</SelectItem>
              <SelectItem value="jobs">Most Jobs</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Brands list */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBrands.map((brand) => (
            <BrandCard key={brand.id} {...brand} />
          ))}
        </div>
        
        {filteredBrands.length === 0 && (
          <div className="text-center py-12 border rounded-lg bg-white">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-bgb-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-bgb-400" />
            </div>
            <h3 className="text-lg font-medium mb-1">No brands found</h3>
            <p className="text-bgb-600 mb-6">
              Try adjusting your search or filters to find more brands
            </p>
            <Button onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
        
        {filteredBrands.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More Brands
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Brands;
