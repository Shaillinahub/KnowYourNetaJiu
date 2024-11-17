import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContributorProfileStats() {
  return (
    <Card className="stats_container">
      <CardHeader>
        <CardTitle className="text-xl font-black">View Your Stats</CardTitle>
      </CardHeader>
      <CardContent className="text-center flex justify-center">
        <div className="stat_block_container">
          <div className="stat_block">
            <h1 className="text-5xl font-black">10</h1>
            <span className="font-medium">Your Opinions</span>
          </div>
          <div className="stat_block">
            <h1 className="text-5xl font-black">10</h1>
            <span className="font-medium">Comments</span>
          </div>
          <div className="stat_block">
            <h1 className="text-5xl font-black">10</h1>
            <span className="font-medium">Total Upvotes</span>
          </div>
          <div className="stat_block">
            <h1 className="text-5xl font-black">10</h1>
            <span className="font-medium">Total Downvotes </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
