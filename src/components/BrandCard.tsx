
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ExternalLink, Users } from "lucide-react";

export interface BrandProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  location: string;
  employeeCount: string;
  yearFounded: number;
  jobCount: number;
  tags: string[];
  isFeatured?: boolean;
}

export const BrandCard = ({
  id,
  name,
  logo,
  category,
  location,
  employeeCount,
  yearFounded,
  jobCount,
  tags,
  isFeatured = false,
}: BrandProps) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover-lift ${
        isFeatured 
          ? "border-primary/30 bg-accent/30" 
          : "border-border"
      }`}
    >
      {isFeatured && (
        <div className="bg-primary text-white text-xs py-1 px-3 text-center">
          Featured Brand
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-4">
            <div className="w-16 h-16 rounded-md overflow-hidden bg-bgb-100 flex items-center justify-center border border-bgb-200">
              {logo ? (
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-2xl font-bold text-primary">
                  {name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-bgb-900">{name}</h3>
              <p className="text-bgb-600 text-sm">{category}</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs py-0">
                  Since {yearFounded}
                </Badge>
                <Badge 
                  variant="outline" 
                  className="text-xs py-0 flex items-center gap-1"
                >
                  <Users className="h-3 w-3" />
                  {employeeCount}
                </Badge>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={favorite ? "text-primary hover:text-primary" : "text-bgb-400 hover:text-bgb-700"}
            onClick={() => setFavorite(!favorite)}
            aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`h-5 w-5 transition-all ${favorite ? "fill-primary" : ""}`}
            />
          </Button>
        </div>

        <div className="mt-4">
          <div className="text-sm text-bgb-500 mb-2">
            {location}
          </div>
          <div className="flex flex-wrap gap-2 mt-3 mb-4">
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
          <div className="bg-bgb-50 rounded-md p-3 mt-4">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-bgb-600">Current openings: </span>
                <span className="font-medium text-bgb-900">{jobCount} positions</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 text-primary">
                <ExternalLink className="h-3.5 w-3.5 mr-1" />
                View Jobs
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
