import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Types based on MongoDB Schema
interface Origin {
  ward: number;
  municipality: string;
  district: string;
  province: string;
  country: string;
}

interface DateOfBirth {
  date: Date;
  age: number;
}

interface Party {
  _id: string;
  name: string;
  symbol?: string;
}

interface Politician {
  _id: string;
  fullname: string;
  dob: DateOfBirth;
  origin: Origin;
  party: Party;
  summary: string;
  activity: string[]; // Array of activity IDs
}

interface PoliticianCardProps {
  politician: Politician;
}

export default function PoliticianCard({
  politician = {
    _id: "1",
    fullname: "Hon. Sumana Shrestha",
    dob: {
      date: new Date(),
      age: 45,
    },
    origin: {
      ward: 1,
      municipality: "Kathmandu",
      district: "Kathmandu",
      province: "Bagmati",
      country: "Nepal",
    },
    party: {
      _id: "1",
      name: "UML",
      symbol: "/placeholder.svg?height=24&width=24",
    },
    summary: "Member of Parliament",
    activity: [],
  },
}: PoliticianCardProps) {
  return (
    <Card className="max-w-sm mx-auto bg-white shadow-lg">
      <CardHeader className="flex flex-col items-center space-y-4 pt-6">
        <div className="relative w-24 h-24">
          <img
            src="/placeholder.svg?height=96&width=96"
            alt={politician.fullname}
            // fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="text-center space-y-1.5">
          <h2 className="text-xl font-semibold text-gray-900">
            {politician.fullname}
          </h2>
          <p className="text-sm text-gray-600">{politician.summary}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-sm text-gray-600">Party:</span>
          <Badge variant="secondary" className="flex items-center space-x-1">
            {politician.party.symbol && (
              <img
                src={politician.party.symbol}
                alt={`${politician.party.name} symbol`}
                width={16}
                height={16}
              />
            )}
            <span>{politician.party.name}</span>
          </Badge>
        </div>
        <div className="mt-4 text-sm text-gray-600 text-center">
          <p>
            {politician.origin.municipality}, {politician.origin.district}
          </p>
          <p>
            {politician.origin.province}, {politician.origin.country}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
