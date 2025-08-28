import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Palette, Users, Heart, Sparkles } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="space-y-8">
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
        <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 p-8">
          <CardTitle className="text-3xl text-center">About ArtConnect</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
              <Palette className="h-12 w-12 text-white" />
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              ArtConnect is a vibrant community platform designed specifically for anime and digital art enthusiasts. 
              We bring together artists, creators, and art lovers from around the world to share, learn, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-center p-6 rounded-lg bg-pink-50 dark:bg-purple-900/30">
              <Users className="h-8 w-8 mx-auto mb-3 text-pink-600 dark:text-purple-400" />
              <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-purple-400">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with fellow artists, share techniques, and build lasting friendships in our supportive community.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg bg-purple-50 dark:bg-pink-900/30">
              <Sparkles className="h-8 w-8 mx-auto mb-3 text-purple-600 dark:text-pink-400" />
              <h3 className="text-xl font-semibold mb-2 text-purple-600 dark:text-pink-400">Creative Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn new techniques, get feedback on your work, and push your artistic boundaries with our tools and community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/50 dark:to-purple-900/50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Mission</h3>
            <p className="text-center text-gray-700 dark:text-gray-300 leading-relaxed">
              To create an inclusive, inspiring space where anime and digital artists can showcase their work, 
              learn from each other, and build meaningful connections that transcend geographical boundaries. 
              We believe that art has the power to unite people and create positive change in the world.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
        <CardHeader className="p-8">
          <CardTitle className="text-2xl text-center">Meet Our Team</CardTitle>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sakura Tanaka', role: 'Founder & Lead Designer', bio: 'Passionate anime artist with 10+ years of experience in digital illustration.' },
              { name: 'Alex Chen', role: 'Community Manager', bio: 'Dedicated to fostering a welcoming and creative environment for all artists.' },
              { name: 'Maya Rodriguez', role: 'Technical Lead', bio: 'Full-stack developer who loves bringing creative visions to life through code.' }
            ].map((member, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h4 className="text-lg font-semibold text-pink-600 dark:text-purple-400">{member.name}</h4>
                <p className="text-sm text-purple-600 dark:text-pink-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}