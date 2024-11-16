import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Eye } from 'lucide-react'

enum OpinionFlag {
  NEUTRAL = 'neutral',
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  CONTROVERSIAL = 'controversial',
}

const flagColorScheme: Record<OpinionFlag, string> = {
//   [OpinionFlag.NEUTRAL]: 'from-transparent to-gray-200/80',
  [OpinionFlag.POSITIVE]: 'from-transparent to-emerald-200/80',
  [OpinionFlag.NEGATIVE]: 'from-transparent to-rose-200/80',
  [OpinionFlag.CONTROVERSIAL]: 'from-transparent to-black-500/200',
}

interface OpinionCardProps {
  subtitle?: string
  title: string
  description: string
  author: {
    name: string
    avatar: string
  }
  views: number
  flag: OpinionFlag
}

export default function OpinionCard({
  subtitle = "About Politician's Name",
  title = "KP Oli bans tiktok",
  description = "The extensively forecasted Version of React 18 has emerged finally. Its company has ultimately disclosed...",
  author = {
    name: "Author123",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  views = 122,
  flag = OpinionFlag.CONTROVERSIAL
}: OpinionCardProps) {
  const isControversial = flag === OpinionFlag.CONTROVERSIAL

  return (
    <Card className={`relative overflow-hidden backdrop-blur-xl ${isControversial ? 'bg-black/50' : 'bg-white/100'} shadow-lg`}>
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${flagColorScheme[flag]} -z-10`}
        style={{ backdropFilter: 'blur(0px)' }}
      />
      
      <CardHeader className="space-y-4">
        <p className={`${isControversial ? 'text-gray-400' : 'text-gray-600'}`}>{subtitle}</p>
        <h2 className={`text-3xl font-bold ${isControversial ? 'text-white' : 'text-gray-800'}`}>{title}</h2>
      </CardHeader>

      <CardContent>
        <p className={`text-lg ${isControversial ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </CardContent>

      <CardFooter className={`flex items-center justify-between border-t ${isControversial ? 'border-gray-700' : 'border-gray-200/30'} mt-4 pt-4`}>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 bg-emerald-500">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className={isControversial ? 'text-gray-300' : 'text-gray-600'}>{author.name}</span>
        </div>
   
      </CardFooter>
    </Card>
  )
}