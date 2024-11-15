import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TitleParagraphProps {
  title: string;
  content: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function TitleParagraph({
  title,
  content,
  titleClassName = "text-2xl font-bold text-primary",
  contentClassName = "text-base text-muted-foreground",
}: TitleParagraphProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className={titleClassName}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={contentClassName}>{content}</p>
      </CardContent>
    </Card>
  );
}
 