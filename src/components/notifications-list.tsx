import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export function NotificationsList() {
  const [notifications] = useState([
    { id: 1, content: 'Alice liked your post', read: false },
    { id: 2, content: 'Bob commented on your artwork', read: false },
  ])

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
      <CardHeader className="p-6">
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`mb-3 p-4 rounded-lg transition-colors ${
              notification.read 
                ? 'bg-gray-100 dark:bg-gray-700' 
                : 'bg-pink-100 dark:bg-purple-900'
            }`}
          >
            <p className="text-sm">{notification.content}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}