
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FeaturedJobs } from "@/components/FeaturedJobs";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  BarChart3, 
  Lock, 
  Users, 
  Zap,
  CheckCircle
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedJobs />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-accent/30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bgb-900 mb-4">
              The Shopify Jobs Platform
            </h2>
            <p className="text-lg text-bgb-600 max-w-2xl mx-auto">
              Connect with the world's best Shopify brands and take your ecommerce career to the next level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Growth Opportunities",
                description: "Access exclusive jobs with high-growth Shopify brands looking for top talent"
              },
              {
                icon: Lock,
                title: "Verified Employers",
                description: "All brands are verified to ensure legitimate opportunities"
              },
              {
                icon: Users,
                title: "Community of Experts",
                description: "Join a network of Shopify professionals and grow your career"
              },
              {
                icon: Zap,
                title: "Fast Application Process",
                description: "Apply to multiple positions with your saved profile information"
              },
              {
                icon: CheckCircle,
                title: "Skill Matching",
                description: "Our intelligent matching connects you with roles that fit your expertise"
              },
              {
                icon: ChevronRight,
                title: "Career Resources",
                description: "Access guides and resources specifically for Shopify careers"
              }
            ].map((feature, i) => (
              <div 
                key={feature.title} 
                className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-bgb-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bgb-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to accelerate your Shopify career?
                </h2>
                <p className="text-bgb-300 mb-8 text-lg">
                  Create your profile today and get matched with top Shopify brands.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Create Profile
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white/20 hover:bg-white/10"
                  >
                    Browse Jobs
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/70 p-8 md:p-12 flex items-center justify-center hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm transform rotate-6"></div>
                  <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-sm transform -rotate-3"></div>
                  <div className="relative bg-white rounded-xl p-6 shadow-lg z-10">
                    <div className="w-full max-w-sm">
                      <div className="flex justify-between items-center mb-6">
                        <div className="h-10 w-10 rounded-md bg-shopify flex items-center justify-center text-white font-semibold">
                          S
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                          New • 2h ago
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-1">
                        Shopify App Developer
                      </h3>
                      <p className="text-bgb-600 text-sm mb-4">
                        Shopify • Remote
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        <span className="inline-block bg-bgb-100 rounded-full px-3 py-1 text-xs font-medium text-bgb-700">
                          React
                        </span>
                        <span className="inline-block bg-bgb-100 rounded-full px-3 py-1 text-xs font-medium text-bgb-700">
                          Node.js
                        </span>
                        <span className="inline-block bg-bgb-100 rounded-full px-3 py-1 text-xs font-medium text-bgb-700">
                          Shopify API
                        </span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
