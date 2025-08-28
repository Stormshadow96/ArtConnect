import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Heart, Share2, Send } from "lucide-react"
import { useState } from "react"

interface Comment {
  id: number
  author: string
  content: string
  timestamp: Date
}

interface PostProps {
  post: {
    id: number
    author: string
    content: string
    media: string
    mediaType: string
    likes: number
  }
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [showComments, setShowComments] = useState(false)
  const [newComment, setNewComment] = useState('')
  const [liked, setLiked] = useState(false)

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'You',
        content: newComment,
        timestamp: new Date()
      }
      setComments([...comments, comment])
      setNewComment('')
    }
  }

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 p-6">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
              {post.author[0]}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{post.author}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {post.mediaType === 'image' && (
          <img 
            src={post.media} 
            alt="User uploaded content" 
            className="w-full h-auto mb-4 rounded-lg shadow-lg" 
          />
        )}
        {post.mediaType === 'video' && (
          <video 
            src={post.media} 
            controls 
            className="w-full h-auto mb-4 rounded-lg shadow-lg" 
          />
        )}
        <p className="mb-4">{post.content}</p>
        <div className="flex items-center space-x-4 mb-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900 ${
              liked ? 'bg-pink-100 dark:bg-purple-900' : ''
            }`}
            onClick={() => setLiked(!liked)}
          >
            <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
            {post.likes + (liked ? 1 : 0)}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900 ${
              showComments ? 'bg-pink-100 dark:bg-purple-900' : ''
            }`}
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            {comments.length}
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>

        {showComments && (
          <div className="space-y-4 mt-6 border-t border-pink-200 dark:border-purple-800 pt-6">
            {comments.map((comment) => (
              <div 
                key={comment.id} 
                className="flex items-start space-x-3"
              >
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="text-sm bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                    {comment.author[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 bg-pink-50 dark:bg-purple-900/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-pink-600 dark:text-purple-400">
                      {comment.author}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {comment.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="mt-1 text-sm">{comment.content}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center space-x-3 mt-6">
              <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="resize-none bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                rows={1}
              />
              <Button
                onClick={handleAddComment}
                disabled={!newComment.trim()}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}