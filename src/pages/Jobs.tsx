
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { JobCard, JobProps } from "@/components/JobCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Sliders, 
  ChevronDown,
  Filter,
  X
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

// Sample jobs data
const jobsData: JobProps[] = [
  {
    id: "1",
    title: "Senior Shopify Developer",
    company: "Allbirds",
    logo: "",
    location: "Remote",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    posted: "2 days ago",
    tags: ["Shopify", "JavaScript", "React", "Liquid"],
    isFeatured: true,
  },
  {
    id: "2",
    title: "Ecommerce Marketing Manager",
    company: "Gymshark",
    logo: "",
    location: "Remote, US",
    salary: "$85,000 - $105,000",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Marketing", "SEO", "Shopify", "Analytics"],
    isFeatured: true,
  },
  {
    id: "3",
    title: "Shopify Store Manager",
    company: "MVMT",
    logo: "",
    location: "Los Angeles, CA",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    posted: "1 week ago",
    tags: ["Ecommerce", "Shopify", "Management"],
  },
  {
    id: "4",
    title: "Front-end Developer (Shopify)",
    company: "Kylie Cosmetics",
    logo: "",
    location: "Remote",
    salary: "$80,000 - $95,000",
    type: "Contract",
    posted: "2 weeks ago",
    tags: ["JavaScript", "HTML/CSS", "Shopify", "Liquid"],
  },
  {
    id: "5",
    title: "Shopify Theme Developer",
    company: "Bombas",
    logo: "",
    location: "New York, NY",
    salary: "$85,000 - $110,000",
    type: "Full-time",
    posted: "3 days ago",
    tags: ["Shopify", "Theme Development", "JavaScript", "Liquid"],
  },
  {
    id: "6",
    title: "Ecommerce Operations Specialist",
    company: "Away",
    logo: "",
    location: "Remote",
    salary: "$65,000 - $75,000",
    type: "Full-time",
    posted: "5 days ago",
    tags: ["Operations", "Shopify", "Inventory", "Customer Service"],
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);
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
    setJobType("");
  };

  // Filter jobs based on search term, location, and job type
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesLocation = 
      !location || job.location.toLowerCase().includes(location.toLowerCase());
      
    const matchesJobType = 
      !jobType || job.type === jobType;
      
    return matchesSearch && matchesLocation && matchesJobType;
  });

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-bgb-900 mb-4">Find Your Next Shopify Role</h1>
          <p className="text-xl text-bgb-600 max-w-2xl mx-auto">
            Browse ecommerce jobs from top Shopify brands
          </p>
        </div>
        
        {/* Search bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bgb-400" />
              <Input
                placeholder="Search job title, company, or skills"
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
              <Select value={jobType} onValueChange={(value) => setJobType(value)}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-bgb-400" />
                    <SelectValue placeholder="Job Type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={() => setFiltersOpen(!filtersOpen)} variant="outline" className="md:w-auto">
              <Sliders className="mr-2 h-4 w-4" />
              Filters
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </Button>
          </div>
          
          {filtersOpen && (
            <div className="mt-4 p-6 border rounded-md bg-white animate-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Salary Range
                  </h3>
                  <div className="space-y-2">
                    {["$0 - $50k", "$50k - $80k", "$80k - $100k", "$100k - $130k", "$130k+"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`salary-${range}`}
                          checked={activeFilters.includes(range)}
                          onCheckedChange={() => toggleFilter(range)}
                        />
                        <label 
                          htmlFor={`salary-${range}`} 
                          className="text-sm text-bgb-700 cursor-pointer"
                        >
                          {range}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Experience Level
                  </h3>
                  <div className="space-y-2">
                    {["Entry Level", "Mid Level", "Senior", "Director", "Executive"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`level-${level}`}
                          checked={activeFilters.includes(level)}
                          onCheckedChange={() => toggleFilter(level)}
                        />
                        <label 
                          htmlFor={`level-${level}`} 
                          className="text-sm text-bgb-700 cursor-pointer"
                        >
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Skills
                  </h3>
                  <div className="space-y-2">
                    {["Shopify", "JavaScript", "React", "Liquid", "Marketing", "Design"].map((skill) => (
                      <div key={skill} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`skill-${skill}`}
                          checked={activeFilters.includes(skill)}
                          onCheckedChange={() => toggleFilter(skill)}
                        />
                        <label 
                          htmlFor={`skill-${skill}`} 
                          className="text-sm text-bgb-700 cursor-pointer"
                        >
                          {skill}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end mt-6 pt-4 border-t">
                <Button variant="outline" size="sm" onClick={clearFilters} className="mr-2">
                  <X className="mr-1 h-4 w-4" />
                  Clear All
                </Button>
                <Button size="sm">
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
          
          {/* Active filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {activeFilters.map(filter => (
                <Badge 
                  key={filter}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1"
                >
                  {filter}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => toggleFilter(filter)}
                  />
                </Badge>
              ))}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearFilters}
                className="h-6 text-xs text-bgb-500 hover:text-bgb-700"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
        
        {/* Results info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-bgb-600">
            Showing <span className="font-semibold text-bgb-900">{filteredJobs.length}</span> jobs
          </p>
          <Select defaultValue="relevance">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Most Relevant</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Highest Salary</SelectItem>
              <SelectItem value="salary-low">Lowest Salary</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Job list */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        
        {filteredJobs.length === 0 && (
          <div className="text-center py-12 border rounded-lg bg-white">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-bgb-100 rounded-full mb-4">
              <Search className="h-8 w-8 text-bgb-400" />
            </div>
            <h3 className="text-lg font-medium mb-1">No jobs found</h3>
            <p className="text-bgb-600 mb-6">
              Try adjusting your search or filters to find more opportunities
            </p>
            <Button onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        )}
        
        {filteredJobs.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mx-auto">
              Load More Jobs
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Jobs;
