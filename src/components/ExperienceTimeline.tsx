
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Edit2 } from "lucide-react";

export interface ExperienceProps {
  id: string;
  title: string;
  company: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
  description: string;
  skills: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceProps[];
  editable?: boolean;
}

export const ExperienceTimeline = ({
  experiences,
  editable = false,
}: ExperienceTimelineProps) => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.isCurrent ? new Date() : new Date(a.endDate || "");
    const dateB = b.isCurrent ? new Date() : new Date(b.endDate || "");
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="relative">
      {/* Timeline vertical line */}
      <div className="absolute top-0 left-6 bottom-0 w-px bg-border ml-2.5 hidden sm:block" />

      <div className="space-y-6">
        {sortedExperiences.map((experience, index) => (
          <div key={experience.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute top-0 left-6 mt-5 -ml-2.5 h-5 w-5 rounded-full border border-primary bg-background hidden sm:flex items-center justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-primary" />
            </div>

            <div className="sm:pl-12">
              <Card className={`overflow-hidden transition-all duration-300 ${
                index === 0 ? "border-primary/30 shadow-md" : ""
              }`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-md overflow-hidden bg-bgb-100 flex items-center justify-center border border-bgb-200">
                        {experience.logo ? (
                          <img
                            src={experience.logo}
                            alt={`${experience.company} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-lg font-bold text-primary">
                            {experience.company.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-bgb-900">
                          {experience.title}
                        </h3>
                        <p className="text-bgb-600">{experience.company}</p>
                        <div className="flex items-center text-sm text-bgb-500 mt-1">
                          <Calendar className="h-3.5 w-3.5 mr-1.5" />
                          <span>
                            {experience.startDate} -{" "}
                            {experience.isCurrent
                              ? "Present"
                              : experience.endDate}
                          </span>
                          <span className="mx-2 text-bgb-300">•</span>
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {editable && (
                      <Button variant="ghost" size="sm" className="text-bgb-500 hover:text-bgb-700">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="mt-4 text-sm text-bgb-700 whitespace-pre-line">
                    {experience.description}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-bgb-100 text-bgb-700 hover:bg-bgb-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
