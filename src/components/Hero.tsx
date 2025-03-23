
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchIcon, BriefcaseIcon } from "lucide-react";

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <div className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12">
      {/* Background circles */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px]"
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        variants={bgVariants}
      >
        <div className="absolute w-full h-full rounded-full bg-primary/5 animate-pulse-slow" />
        <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/3 animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute w-1/2 h-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/2 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={staggerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent text-primary">
              <span className="w-2 h-2 mr-2 rounded-full bg-primary animate-pulse" />
              For Shopify Experts
            </span>
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-bgb-900 mb-6"
          >
            Your next <span className="text-primary">ecommerce</span> career move
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-bgb-600 max-w-2xl mx-auto mb-8"
          >
            Connecting talented Shopify professionals with the best retail brands around the world.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <BriefcaseIcon className="mr-2 h-5 w-5" />
              Browse Jobs
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <SearchIcon className="mr-2 h-5 w-5" />
              Search Brands
            </Button>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col items-center"
          >
            <p className="text-sm text-bgb-500 mb-4">Trusted by top Shopify brands</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {["Allbirds", "Gymshark", "MVMT", "Kylie Cosmetics", "Bombas"].map((brand, i) => (
                <div 
                  key={brand}
                  className="text-bgb-400 font-medium text-lg opacity-75 hover:opacity-100 transition-opacity"
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
