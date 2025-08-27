import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Clock, Send, MessageCircle, HelpCircle, Bug } from 'lucide-react'
import { useState } from 'react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
        <CardHeader className="bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900">
          <CardTitle className="text-3xl text-center">Contact Us</CardTitle>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-2">
            We'd love to hear from you! Get in touch with our team.
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-pink-600 dark:text-purple-400 mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-pink-50 dark:bg-purple-900/30">
                  <Mail className="h-5 w-5 text-pink-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">hello@artconnect.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 dark:bg-pink-900/30">
                  <Phone className="h-5 w-5 text-purple-600 dark:text-pink-400" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-pink-50 dark:bg-purple-900/30">
                  <MapPin className="h-5 w-5 text-pink-600 dark:text-purple-400" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      123 Creative Street<br />
                      Art District, CA 90210
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-purple-50 dark:bg-pink-900/30">
                  <Clock className="h-5 w-5 text-purple-600 dark:text-pink-400" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                      Sat - Sun: 10:00 AM - 4:00 PM PST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-pink-600 dark:text-purple-400 mb-3">Quick Help</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <MessageCircle className="h-4 w-4 text-pink-500" />
                    <span>General inquiries: hello@artconnect.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <HelpCircle className="h-4 w-4 text-purple-500" />
                    <span>Support: support@artconnect.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Bug className="h-4 w-4 text-pink-500" />
                    <span>Bug reports: bugs@artconnect.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-pink-400 mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-transparent border-pink-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-pink-500"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-pink-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                question: "How do I upload my artwork?",
                answer: "Simply click the 'Upload Media' button when creating a new post on the home page. You can upload images or videos of your artwork."
              },
              {
                question: "Is ArtConnect free to use?",
                answer: "Yes! ArtConnect is completely free for all artists. We believe in making art accessible to everyone."
              },
              {
                question: "How can I connect with other artists?",
                answer: "Use the Connections tab to find and connect with other artists. You can also interact through comments and messages."
              },
              {
                question: "Can I sell my artwork on ArtConnect?",
                answer: "Currently, ArtConnect focuses on community and sharing. We're exploring options for artist monetization in future updates."
              }
            ].map((faq, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20">
                <h4 className="font-semibold text-pink-600 dark:text-purple-400 mb-2">{faq.question}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}