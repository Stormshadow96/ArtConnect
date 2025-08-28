import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Home, Users, MessageSquare, Bell, Sun, Moon, Upload, X, ArrowLeft } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { Post } from '@/components/post'
import { ConnectionsList } from '@/components/connections-list'
import { MessagesList } from '@/components/messages-list'
import { NotificationsList } from '@/components/notifications-list'
import { cn } from '@/lib/utils'

export default function ArtConnect() {
  const { theme, setTheme } = useTheme()
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alice', content: 'Quick tip: Always start with basic shapes!', media: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60', mediaType: 'image', likes: 15 },
    { id: 2, author: 'Bob', content: 'Check out my brush technique for concept art', media: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60', mediaType: 'image', likes: 23 },
  ])
  const [newPost, setNewPost] = useState({ content: '', media: null, mediaType: null })
  const [showConnections, setShowConnections] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.content.trim() || newPost.media) {
      setPosts([
        ...posts,
        { 
          id: posts.length + 1, 
          author: 'You', 
          content: newPost.content, 
          media: newPost.media || '', 
          mediaType: newPost.mediaType || '', 
          likes: 0 
        }
      ])
      setNewPost({ content: '', media: null, mediaType: null })
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewPost({
          ...newPost,
          media: reader.result as string,
          mediaType: file.type.startsWith('image') ? 'image' : 'video'
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleConnections = () => {
    setShowConnections(!showConnections)
    setActiveTab('connections')
  }

  const goToHome = () => {
    setActiveTab('home')
    setShowConnections(false)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        )
      case 'messages':
        return <MessagesList />
      case 'notifications':
        return <NotificationsList />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-pink-100 to-purple-200 dark:from-pink-900 dark:to-purple-950 text-gray-900 dark:text-gray-100 overflow-hidden">
      <nav className="w-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-r border-pink-200 dark:border-purple-800 flex flex-col items-center py-8 space-y-6">
        <Button 
          variant="ghost" 
          size="icon" 
          className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white text-2xl font-bold mb-4 hover:from-pink-500 hover:to-purple-600" 
          onClick={goToHome}
        >
          AC
        </Button>
        
        {/* Navigation Buttons */}
        <NavButton 
          icon={<Home className="h-6 w-6" />} 
          isActive={activeTab === 'home'} 
          onClick={() => setActiveTab('home')} 
          label="Home"
        />
        <NavButton 
          icon={<Users className="h-6 w-6" />} 
          isActive={activeTab === 'connections'} 
          onClick={toggleConnections} 
          label="Connections"
        />
        <NavButton 
          icon={<MessageSquare className="h-6 w-6" />} 
          isActive={activeTab === 'messages'} 
          onClick={() => setActiveTab('messages')} 
          label="Messages"
        />
        <NavButton 
          icon={<Bell className="h-6 w-6" />} 
          isActive={activeTab === 'notifications'} 
          onClick={() => setActiveTab('notifications')} 
          label="Notifications"
        />
        
        {/* Theme Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="mt-auto rounded-full bg-white dark:bg-gray-800 text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900 shadow-md" 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </nav>

      <main className="flex-1 p-8 overflow-auto">
        <div className="flex items-center justify-between mb-8">
          {activeTab !== 'home' && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full bg-white dark:bg-gray-800 text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900 shadow-md" 
              onClick={goToHome}
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          )}
          <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 flex-grow">
            ArtConnect
          </h1>
          {activeTab !== 'home' && <div className="w-10" />}
        </div>
        
        {activeTab === 'home' && (
          <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
            <CardContent className="pt-6">
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <Textarea
                  placeholder="Share your anime-inspired art or tips..."
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  className="bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                />
                <div className="flex items-center space-x-2">
                  <Input
                    type="file"
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => document.getElementById('file-upload')?.click()} 
                    className="bg-white dark:bg-gray-800 border-pink-400 dark:border-purple-600 text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900 shadow-md"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Media
                  </Button>
                  {newPost.media && (
                    <span className="text-sm text-pink-600 dark:text-purple-400">
                      {newPost.mediaType === 'image' ? 'Image' : 'Video'} selected
                    </span>
                  )}
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-md"
                  >
                    Post
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {renderContent()}
      </main>

      {showConnections && <ConnectionsList onClose={toggleConnections} />}
    </div>
  )
}

interface NavButtonProps {
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
  label: string
}

function NavButton({ icon, isActive, onClick, label }: NavButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative rounded-full bg-white dark:bg-gray-800 text-pink-600 dark:text-purple-400 shadow-md",
        isActive ? "bg-pink-100 dark:bg-purple-900 ring-2 ring-pink-500 dark:ring-purple-500" : "hover:bg-pink-100 dark:hover:bg-purple-900",
      )}
      onClick={onClick}
    >
      {icon}
      {isActive && (
        <span className="absolute -right-1 -top-1 w-3 h-3 bg-pink-500 dark:bg-purple-500 rounded-full" />
      )}
    </Button>
  )
}
