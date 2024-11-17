import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatDistanceToNow } from "date-fns";
import "./Comments.css";

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  createdAt: Date;
  replies: Comment[];
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: { name: "John Doe", avatar: "/placeholder.svg?height=40&width=40" },
      content:
        "Have you tried using the `onFile` hook in Elysia? It might help with your file upload issue.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      replies: [
        {
          id: 3,
          user: {
            name: "Alice Johnson",
            avatar: "/placeholder.svg?height=40&width=40",
          },
          content:
            "Good suggestion! I've had success with that approach before.",
          createdAt: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
          replies: [],
        },
      ],
    },
    {
      id: 2,
      user: {
        name: "Jane Smith",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "Make sure you have the correct middleware setup for file uploads in your Elysia configuration.",
      createdAt: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      replies: [],
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const handleAddComment = (
    e: React.FormEvent,
    parentId: number | null = null,
  ) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now(),
        user: {
          name: "Current User",
          avatar: "/placeholder.svg?height=40&width=40",
        },
        content: newComment.trim(),
        createdAt: new Date(),
        replies: [],
      };

      if (parentId === null) {
        setComments([...comments, newCommentObj]);
      } else {
        setComments(
          comments.map((comment) =>
            comment.id === parentId
              ? { ...comment, replies: [...comment.replies, newCommentObj] }
              : comment,
          ),
        );
      }

      setNewComment("");
      setReplyingTo(null);
    }
  };

  const CommentComponent = ({
    comment,
    parentId = null,
  }: {
    comment: Comment;
    parentId?: number | null;
  }) => (
    <div className="flex gap-4">
      <Avatar className="w-10 h-10">
        <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
        <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{comment.user.name}</span>
          <span className="text-sm text-muted-foreground">
            {formatDistanceToNow(comment.createdAt)} ago
          </span>
        </div>
        <p className="text-sm">{comment.content}</p>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setReplyingTo(comment.id)}
            className="text-muted-foreground hover:text-primary"
          >
            Reply
          </Button>
        </div>
        {replyingTo === comment.id && (
          <form
            onSubmit={(e) => handleAddComment(e, comment.id)}
            className="mt-2 flex gap-2"
          >
            <Input
              type="text"
              placeholder="Add a reply..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="sm">
              Post
            </Button>
          </form>
        )}
        {comment.replies.length > 0 && (
          <div className="mt-4 space-y-4 pl-4 border-l-2 border-gray-200">
            {comment.replies.map((reply) => (
              <CommentComponent
                key={reply.id}
                comment={reply}
                parentId={comment.id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <Card className="comments_container mx-auto mt-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <CommentComponent key={comment.id} comment={comment} />
          ))}
        </div>
        <form onSubmit={(e) => handleAddComment(e)} className="mt-6 flex gap-2">
          <Input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1"
          />
          <Button type="submit">Post</Button>
        </form>
      </CardContent>
    </Card>
  );
}
