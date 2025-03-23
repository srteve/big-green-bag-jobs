
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, MapPin, Clock, Briefcase } from "lucide-react";

export interface JobProps {
  id: string;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  tags: string[];
  isFeatured?: boolean;
}

export const JobCard = ({
  id,
  title,
  company,
  logo,
  location,
  salary,
  type,
  posted,
  tags,
  isFeatured = false,
}: JobProps) => {
  const [saved, setSaved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`overflow-hidden transition-all duration-300 hover-lift ${
        isFeatured 
          ? "border-primary/30 bg-accent/30" 
          : "border-border"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isFeatured && (
        <div className="bg-primary text-white text-xs py-1 px-3 text-center">
          Featured Position
        </div>
      )}
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-bgb-100 flex items-center justify-center border border-bgb-200">
                {logo ? (
                  <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold text-primary">
                    {company.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-medium text-lg text-bgb-900 leading-tight">
                  {title}
                </h3>
                <p className="text-bgb-600">{company}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className={`text-bgb-400 ${
                saved ? "text-primary hover:text-primary" : "hover:text-bgb-700"
              }`}
              onClick={() => setSaved(!saved)}
              aria-label={saved ? "Unsave job" : "Save job"}
            >
              <Bookmark
                className={`h-5 w-5 transition-all ${saved ? "fill-primary" : ""}`}
              />
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap gap-y-2">
            <div className="flex items-center text-sm text-bgb-500 mr-4">
              <MapPin className="h-4 w-4 mr-1 text-bgb-400" />
              {location}
            </div>
            <div className="flex items-center text-sm text-bgb-500 mr-4">
              <Briefcase className="h-4 w-4 mr-1 text-bgb-400" />
              {type}
            </div>
            <div className="flex items-center text-sm text-bgb-500">
              <Clock className="h-4 w-4 mr-1 text-bgb-400" />
              {posted}
            </div>
          </div>

          <div className="mt-3 text-sm font-medium text-bgb-700">
            {salary}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-bgb-100 text-bgb-700 hover:bg-bgb-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className={`flex border-t border-border transition-opacity ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
          <Button
            variant="ghost"
            className="flex-1 rounded-none py-3 text-bgb-600 hover:text-bgb-900 hover:bg-bgb-50"
          >
            Quick View
          </Button>
          <div className="w-px bg-border" />
          <Button
            variant="ghost"
            className="flex-1 rounded-none py-3 text-primary hover:text-primary hover:bg-accent/50"
          >
            Apply Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
