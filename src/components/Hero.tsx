
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SearchIcon, BriefcaseIcon, SparklesIcon } from "lucide-react";

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

  return (
    <div className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        variants={staggerVariants}
      >
        <motion.div variants={itemVariants} className="inline-block mb-4">
          <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium rounded-full bg-gradient-candy text-white">
            <SparklesIcon className="h-4 w-4 mr-2" />
            For Shopify Experts
          </span>
        </motion.div>
        
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          Your next <span className="text-gradient">ecommerce</span> career move
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
          <Button size="lg" className="w-full sm:w-auto bg-gradient-candy hover:opacity-90 transition-opacity">
            <BriefcaseIcon className="mr-2 h-5 w-5" />
            Browse Jobs
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-nebula-200 text-nebula-700 hover:bg-nebula-50">
            <SearchIcon className="mr-2 h-5 w-5" />
            Search Brands
          </Button>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 flex flex-col items-center"
        >
          <p className="text-sm text-bgb-500 mb-6">Trusted by top Shopify brands</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
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
  );
};
