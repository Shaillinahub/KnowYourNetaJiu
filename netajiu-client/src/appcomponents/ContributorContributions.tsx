import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContributorContributions() {
  return (
    <Card className="stats_container">
      <CardHeader>
        <CardTitle className="text-xl font-black">Your Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="opinion_block_container">
          {[1, 2, 3].map((num, index) => (
            <Card key={index} className="opinion_block">
              <CardTitle className="text-lg">
                The Oli government bans tik tok,overshadowing major blah..
              </CardTitle>
              <span className="text-xs">
                The Oli government bans tik tok,overshadowing major blah.. and
                blahh...
              </span>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
