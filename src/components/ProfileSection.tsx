
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExperienceTimeline, ExperienceProps } from "./ExperienceTimeline";
import { Upload, Mail, MapPin, Globe, Briefcase, Download, Edit, FilePlus } from "lucide-react";

// Sample experience data
const sampleExperiences: ExperienceProps[] = [
  {
    id: "1",
    title: "Senior Shopify Developer",
    company: "Allbirds",
    location: "Remote",
    startDate: "Jan 2022",
    endDate: null,
    isCurrent: true,
    description: "Led development of custom Shopify themes and apps. Optimized checkout flow and improved site performance by 40%. Implemented A/B testing framework for product pages.",
    skills: ["Shopify Plus", "Liquid", "JavaScript", "React", "Node.js"],
  },
  {
    id: "2",
    title: "Ecommerce Developer",
    company: "MVMT Watches",
    location: "Los Angeles, CA",
    startDate: "Mar 2020",
    endDate: "Dec 2021",
    isCurrent: false,
    description: "Built and maintained Shopify store generating $10M+ in annual revenue. Created custom apps for inventory management and customer loyalty program.",
    skills: ["Shopify", "JavaScript", "CSS", "Liquid", "APIs"],
  },
];

export const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const [uploadingCV, setUploadingCV] = useState(false);

  const handleFileUpload = () => {
    setUploadingCV(true);
    // Simulate file upload
    setTimeout(() => {
      setUploadingCV(false);
    }, 2000);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column - Profile Summary */}
      <div className="md:col-span-1">
        <Card className="sticky top-20">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white text-2xl font-semibold">
                  JD
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-accent p-1.5 border border-primary text-primary">
                  <Edit className="h-4 w-4" />
                </button>
              </div>
              
              <h2 className="mt-4 text-xl font-semibold">Jane Doe</h2>
              <p className="text-bgb-600">Senior Shopify Developer</p>
              
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                <Badge>Available for work</Badge>
                <Badge variant="outline">Remote</Badge>
              </div>
              
              <div className="mt-6 w-full space-y-3 text-sm">
                <div className="flex items-center text-bgb-600">
                  <Mail className="h-4 w-4 mr-2 text-bgb-400" />
                  <span>jane.doe@example.com</span>
                </div>
                <div className="flex items-center text-bgb-600">
                  <MapPin className="h-4 w-4 mr-2 text-bgb-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center text-bgb-600">
                  <Globe className="h-4 w-4 mr-2 text-bgb-400" />
                  <a href="#" className="text-primary hover:underline">
                    janedoe.com
                  </a>
                </div>
                <div className="flex items-center text-bgb-600">
                  <Briefcase className="h-4 w-4 mr-2 text-bgb-400" />
                  <span>4+ years experience</span>
                </div>
              </div>
              
              <div className="mt-6 w-full space-y-3">
                <h3 className="font-medium text-bgb-900">Skills</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Shopify", "JavaScript", "React", "Liquid", "Node.js", "CSS", "Shopify Plus", "APIs"].map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="bg-bgb-100 text-bgb-700"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 w-full pt-6 border-t border-border space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-bgb-900">Resume</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 text-primary"
                    onClick={handleFileUpload}
                  >
                    {uploadingCV ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-1.5">
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24">
                            <circle 
                              className="opacity-25" 
                              cx="12" 
                              cy="12" 
                              r="10" 
                              stroke="currentColor" 
                              strokeWidth="4"
                              fill="none"
                            />
                            <path 
                              className="opacity-75" 
                              fill="currentColor" 
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                        </span>
                        Uploading...
                      </span>
                    ) : (
                      <>
                        <Upload className="h-3.5 w-3.5 mr-1.5" />
                        Update
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-bgb-50 rounded-md">
                  <div className="flex items-center">
                    <div className="h-10 w-8 bg-bgb-200 rounded flex items-center justify-center text-bgb-600 mr-3">
                      <FilePlus className="h-4 w-4" />
                    </div>
                    <div className="text-sm">
                      <div className="font-medium">Jane_Doe_Resume.pdf</div>
                      <div className="text-bgb-500 text-xs">Updated 2 weeks ago</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-bgb-500">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right Column - Tabs */}
      <div className="md:col-span-2">
        <Tabs defaultValue="experience" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Work Experience</h2>
              <Button>Add Experience</Button>
            </div>
            <ExperienceTimeline experiences={sampleExperiences} editable={true} />
          </TabsContent>
          
          <TabsContent value="applications">
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-bgb-100 mx-auto flex items-center justify-center mb-4">
                <Briefcase className="h-8 w-8 text-bgb-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Applications Yet</h3>
              <p className="text-bgb-600 mb-6">
                You haven't applied to any jobs yet. Browse our job listings to find your next opportunity.
              </p>
              <Button>
                Browse Jobs
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="favorites">
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-bgb-100 mx-auto flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-bgb-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Favorite Brands</h3>
              <p className="text-bgb-600 mb-6">
                You haven't added any brands to your favorites yet. Browse brands to add them to your favorites.
              </p>
              <Button>
                Discover Brands
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
