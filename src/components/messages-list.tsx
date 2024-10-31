import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"
import { Send, Plus } from "lucide-react"

interface Message {
  id: number
  sender: string
  recipient: string
  content: string
  timestamp: Date
}

interface Connection {
  id: number
  name: string
  avatar?: string
}

export function MessagesList() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      sender: 'Alice', 
      recipient: 'You',
      content: 'Hey, loved your latest artwork!',
      timestamp: new Date('2024-01-01T10:00:00')
    },
    { 
      id: 2, 
      sender: 'Bob', 
      recipient: 'You',
      content: 'Can you share some tips on digital painting?',
      timestamp: new Date('2024-01-01T11:00:00')
    },
  ])

  const [connections] = useState<Connection[]>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Diana' },
    { id: 5, name: 'Ethan' },
  ])

  const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [showConnections, setShowConnections] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedConnection) {
      const message: Message = {
        id: messages.length + 1,
        sender: 'You',
        recipient: selectedConnection.name,
        content: newMessage,
        timestamp: new Date()
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  const filteredMessages = selectedConnection
    ? messages.filter(m => 
        (m.sender === selectedConnection.name && m.recipient === 'You') ||
        (m.sender === 'You' && m.recipient === selectedConnection.name)
      )
    : []

  return (
    <div className="space-y-4">
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Messages</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="text-pink-600 dark:text-purple-400 hover:bg-pink-100 dark:hover:bg-purple-900"
            onClick={() => setShowConnections(!showConnections)}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 h-[600px]">
            {/* Connections Sidebar */}
            <div className={`border-r border-pink-200 dark:border-purple-800 ${showConnections ? 'block' : 'hidden'} md:block`}>
              <ScrollArea className="h-full pr-4">
                {connections.map((connection) => (
                  <div
                    key={connection.id}
                    className={`flex items-center space-x-2 p-2 rounded-lg cursor-pointer transition-colors ${
                      selectedConnection?.id === connection.id
                        ? 'bg-pink-100 dark:bg-purple-900'
                        : 'hover:bg-pink-50 dark:hover:bg-purple-900/50'
                    }`}
                    onClick={() => {
                      setSelectedConnection(connection)
                      setShowConnections(false)
                    }}
                  >
                    <Avatar>
                      <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white">
                        {connection.name[0]}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-pink-600 dark:text-purple-400">{connection.name}</span>
                  </div>
                ))}
              </ScrollArea>
            </div>

            {/* Messages Area */}
            <div className={`col-span-2 ${showConnections ? 'hidden' : 'block'} md:block md:col-span-2 flex flex-col h-full`}>
              {selectedConnection ? (
                <>
                  <ScrollArea className="flex-grow mb-4">
                    {filteredMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`mb-4 p-3 rounded-lg ${
                          message.sender === 'You'
                            ? 'bg-pink-100 dark:bg-purple-900 ml-auto'
                            : 'bg-gray-100 dark:bg-gray-700'
                        } max-w-[80%] ${
                          message.sender === 'You' ? 'ml-auto' : 'mr-auto'
                        }`}
                      >
                        <p className="font-semibold text-sm text-pink-600 dark:text-purple-400">
                          {message.sender}
                        </p>
                        <p className="mt-1">{message.content}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {new Date(message.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    ))}
                  </ScrollArea>
                  <div className="flex items-center space-x-2 p-4 border-t border-pink-200 dark:border-purple-800">
                    <Textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={`Message ${selectedConnection.name}...`}
                      className="resize-none bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                      rows={1}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!newMessage.trim()}
                      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  Select a connection to start messaging
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}