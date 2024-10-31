import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { X } from 'lucide-react'

interface ConnectionsListProps {
  onClose: () => void
}

export function ConnectionsList({ onClose }: ConnectionsListProps) {
  return (
    <aside className="w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-l border-pink-200 dark:border-purple-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-pink-600 dark:text-purple-400">Connections</h2>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClose} 
          className="text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan'].map((name) => (
          <div 
            key={name} 
            className="flex items-center space-x-2 mb-2 p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-purple-900"
          >
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                {name[0]}
              </AvatarFallback>
            </Avatar>
            <span className="text-pink-600 dark:text-purple-400">{name}</span>
          </div>
        ))}
      </ScrollArea>
    </aside>
  )
}