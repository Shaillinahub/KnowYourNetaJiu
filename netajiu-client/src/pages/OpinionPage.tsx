import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowBigUp, ArrowBigDown, Clock } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import "./OpinionPage.css";
import Comments from "../appcomponents/Comments";
import Citation from "../appcomponents/Citation";

interface PostProps {
  title?: string;
  content?: string;
  modifiedAt?: Date;
  askedAt?: Date;
  views?: number;
}

export default function OpinionPage({
  title = "The Oli government bans tik tok,over shadowing major blah..",
  content = "Hello there! As a marketing manager in the SaaS industry, you might be looking for innovative ways to engage your audience. I bet generative AI has crossed your mind as an option for creating content. Well, let me share from my firsthand experience. Google encourages high-quality blogs regardless of whether they're written by humans or created using artificial intelligence like ChatGPT. Here's what matters: producing original material with expertise and trustworthiness based on Google E-E-A-T principles. This means focusing more on people-first writing rather than primarily employing AI tools to manipulate search rankings. There comes a time when many experienced professionals want to communicate their insights but get stuck due to limited writing skills – that’s where Generative AI can step in. So, together, we’re going explore how this technology could help us deliver valuable content without sounding robotic or defaulting into mere regurgitations of existing materials (spoiler alert common pitfalls!). Hang tight - it’ll be a fun learning journey!",
  modifiedAt = new Date(Date.now() - 1000 * 60 * 60 * 24 * 60), // 2 months ago
  askedAt = new Date(Date.now() - 1000 * 60 * 60 * 24 * 90), // 3 months ago
}: PostProps) {
  const [votes, setVotes] = useState(0);

  const handleVote = (value: number) => {
    setVotes((current) => current + value);
  };

  return (
    <div className="opinionPage_container">
      <Card className="opinion_container mx-auto">
        <div className="p-6">
          <div className="flex gap-6">
            {/* Voting Section */}
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleVote(1)}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowBigUp className="h-6 w-6" />
                <span className="sr-only">Upvote</span>
              </Button>
              <span className="text-xl font-medium">{votes}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleVote(-1)}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowBigDown className="h-6 w-6" />
                <span className="sr-only">Downvote</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground"
              >
                <Clock className="h-5 w-5" />
                <span className="sr-only">History</span>
              </Button>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <h1 className="text-xl font-semibold">{title}</h1>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <span>Posted {formatDistanceToNow(askedAt)} ago</span>
                  <span>•</span>
                  <span>Modified {formatDistanceToNow(modifiedAt)} ago</span>
                </div>
              </div>
              <div className="prose prose-sm dark:prose-invert">
                <p>{content}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Citation />
      <Comments />
    </div>
  );
}
