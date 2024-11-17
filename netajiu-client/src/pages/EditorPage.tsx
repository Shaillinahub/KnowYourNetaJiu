import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Bold, Italic, List, ImageIcon, Link, Code } from "lucide-react";
import { useState } from "react";
import "./EditorPage.css";

export default function EditorPage() {
  const [title, setTitle] = useState("");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full h-auto",
        },
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  });

  const addImage = () => {
    const url = window.prompt("Enter image URL");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <Card className="editorpage_container w-full mx-auto">
      <CardHeader>
        <input
          type="text"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-3xl font-bold focus:outline-none border-none"
        />
      </CardHeader>
      <CardContent>
        <div className="border rounded-lg">
          <div className="border-b p-2 flex gap-2 bg-muted/50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive("bold") ? "bg-muted" : ""}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive("italic") ? "bg-muted" : ""}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={editor?.isActive("bulletList") ? "bg-muted" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const url = window.prompt("Enter URL");
                if (url) {
                  editor?.chain().focus().setLink({ href: url }).run();
                }
              }}
              className={editor?.isActive("link") ? "bg-muted" : ""}
            >
              <Link className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={addImage}>
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
              className={editor?.isActive("codeBlock") ? "bg-muted" : ""}
            >
              <Code className="h-4 w-4" />
            </Button>
          </div>
          <EditorContent editor={editor} className="min-h-[300px] p-4" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">Save Draft</Button>
        <Button>Publish</Button>
      </CardFooter>
    </Card>
  );
}
