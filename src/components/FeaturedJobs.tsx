
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { JobCard, JobProps } from "./JobCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

// Sample job data
const featuredJobs: JobProps[] = [
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
    isFeatured: true,
  },
];

export const FeaturedJobs = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.23, 1, 0.32, 1] 
      }
    }
  };

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bgb-900">Featured Positions</h2>
          <p className="mt-4 text-lg text-bgb-600 max-w-2xl mx-auto">
            Discover top Shopify ecommerce roles from leading retail brands
          </p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
        >
          {featuredJobs.map((job) => (
            <motion.div key={job.id} variants={itemVariants}>
              <JobCard {...job} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button className="group">
            View All Jobs
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
