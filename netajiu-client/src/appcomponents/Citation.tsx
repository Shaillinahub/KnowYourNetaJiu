import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import "./Citation.css";

interface Citation {
  url: string;
  label: string;
}

export default function Citation() {
  const citations: Citation[] = [
    {
      url: "https://elysia.dev/plugins/file",
      label: "Elysia File Plugin Documentation",
    },
    {
      url: "https://github.com/elysiajs/elysia/discussions/39",
      label: "Elysia File Upload Discussion",
    },
    {
      url: "https://www.mongodb.com/docs/manual/core/gridfs/",
      label: "MongoDB GridFS for Storing Files",
    },
  ];

  return (
    <Card className="citation_container mx-auto">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Citations</h2>
        <ul className="space-y-2">
          {citations.map((citation, index) => (
            <li key={index} className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {citation.label}
              </a>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
