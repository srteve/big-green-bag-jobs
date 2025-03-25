
import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Check, Users, Star, Trophy } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const PremiumServices = () => {
  const { toast } = useToast();

  const handleServiceInquiry = (serviceName: string) => {
    toast({
      title: "Service Inquiry Received",
      description: `We'll contact you soon about our ${serviceName} service.`,
      duration: 5000,
    });
  };

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-nebula-500 to-coral-500 bg-clip-text text-transparent">
            Premium Talent Acquisition Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock exceptional talent with our premium services designed specifically for leading retail brands.
          </p>
        </section>

        {/* Featured Service */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-nebula-100 to-coral-100 rounded-xl opacity-30"></div>
          <Card className="border-2 border-nebula-300 relative overflow-hidden bg-card/60 backdrop-blur-sm">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-nebula-500 to-coral-500 text-white py-1 px-4 rounded-bl-lg font-medium">
              Exclusive Offer
            </div>
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Award className="h-8 w-8 text-nebula-500" />
                Curated Talent Selection
              </CardTitle>
              <CardDescription className="text-lg">
                Our flagship service for brands seeking top-tier Shopify talent
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                  <ul className="space-y-3">
                    {[
                      "We receive and review 100+ resumes from our talent pool",
                      "Our experts thoroughly vet each candidate's experience and skills",
                      "We conduct preliminary interviews with promising candidates",
                      "You receive a shortlist of 10 exceptional candidates",
                      "We facilitate the final interview process for your chosen candidates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-nebula-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-muted rounded-lg">
                    <div className="text-3xl font-bold mb-2">$500</div>
                    <p className="text-muted-foreground">One-time service fee</p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-nebula-500" />
                        <span>Access to premium talent pool</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-nebula-500" />
                        <span>90% hiring success rate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-nebula-500" />
                        <span>30-day satisfaction guarantee</span>
                      </li>
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      onClick={() => handleServiceInquiry("Curated Talent Selection")}
                    >
                      Get Started
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Over 50 brands have used this service</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Additional Premium Services */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Additional Premium Services</h2>
            <p className="text-muted-foreground">Tailored solutions for retail brands seeking excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Talent Strategy Consultation",
                description: "Develop a comprehensive talent acquisition strategy tailored to your brand's unique needs and growth objectives.",
                icon: Briefcase,
                price: "$1,200",
                features: [
                  "Custom talent acquisition roadmap",
                  "Competitor talent analysis",
                  "Skill gap assessment",
                  "Recruitment process optimization"
                ]
              },
              {
                title: "Executive Talent Search",
                description: "Specialized headhunting service for senior Shopify experts and e-commerce leadership roles.",
                icon: Star,
                price: "$2,500",
                features: [
                  "Access to passive candidate network",
                  "Comprehensive background verification",
                  "Cultural fit assessment",
                  "Salary negotiation support"
                ]
              },
              {
                title: "Team Augmentation Program",
                description: "Build an entire Shopify development or marketing team with our comprehensive team staffing service.",
                icon: Users,
                price: "$3,500",
                features: [
                  "Team composition planning",
                  "Sequential role fulfillment",
                  "Team integration support",
                  "90-day performance guarantee"
                ]
              },
              {
                title: "Skill Certification Program",
                description: "Verify the skills of your candidates with our rigorous assessment and certification process.",
                icon: Trophy,
                price: "$300/candidate",
                features: [
                  "Technical skills assessment",
                  "Practical project challenges",
                  "Code quality evaluation",
                  "Detailed performance report"
                ]
              },
              {
                title: "Retention Consultancy",
                description: "Strategies and best practices to retain your top e-commerce talent in a competitive market.",
                icon: Award,
                price: "$1,800",
                features: [
                  "Compensation benchmarking",
                  "Career development planning",
                  "Work environment assessment",
                  "Employee satisfaction monitoring"
                ]
              },
              {
                title: "Rapid Scaling Solution",
                description: "For brands experiencing rapid growth needing to quickly scale their Shopify operations team.",
                icon: Briefcase,
                price: "$4,000",
                features: [
                  "Priority candidate sourcing",
                  "Accelerated vetting process",
                  "Temporary talent provision",
                  "Long-term staffing strategy"
                ]
              }
            ].map((service, index) => (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <service.icon className="h-6 w-6 text-nebula-500" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="font-bold text-2xl mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-nebula-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleServiceInquiry(service.title)}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Comparison */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-2">Service Comparison</h2>
            <p className="text-muted-foreground">Find the right service for your specific needs</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Service Feature</TableHead>
                  <TableHead>Standard Listing</TableHead>
                  <TableHead>Curated Selection</TableHead>
                  <TableHead>Executive Search</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { feature: "Number of candidates", standard: "Unlimited applications", curated: "10 pre-vetted candidates", executive: "3-5 executive candidates" },
                  { feature: "Candidate screening", standard: "Self-service", curated: "Expert vetting", executive: "In-depth assessment" },
                  { feature: "Timeline", standard: "Varies", curated: "2 weeks", executive: "4-6 weeks" },
                  { feature: "Skill verification", standard: "Basic", curated: "Comprehensive", executive: "Extensive" },
                  { feature: "Interview support", standard: "Not included", curated: "Basic coordination", executive: "Full support" },
                  { feature: "Success guarantee", standard: "None", curated: "30-day", executive: "90-day" },
                ].map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.feature}</TableCell>
                    <TableCell>{row.standard}</TableCell>
                    <TableCell>{row.curated}</TableCell>
                    <TableCell>{row.executive}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted p-8 rounded-xl text-center space-y-6">
          <h2 className="text-3xl font-bold">Custom Service Requirements?</h2>
          <p className="text-lg max-w-2xl mx-auto">
            We understand that every brand has unique talent needs. Contact us for a tailored service package designed specifically for your requirements.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-nebula-500 to-coral-500 hover:from-nebula-600 hover:to-coral-600"
            onClick={() => handleServiceInquiry("Custom Service")}
          >
            Contact Our Team
          </Button>
        </section>
      </motion.div>
    </Layout>
  );
};

export default PremiumServices;
