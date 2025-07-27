import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  Star, 
  Clock, 
  MapPin, 
  Mail,
  Smile,
  Shield,
  Award,
  Users,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import clinicInterior from './assets/clinic-interior.jpg'
import treatmentRoom from './assets/treatment-room.webp'
import modernClinic from './assets/modern-clinic.jpg'
import './App.css'

function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! Welcome to Radiant Smiles. How can I help you today?' }
  ])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  // Simulate AI chat responses
  const handleChatMessage = (message) => {
    setChatMessages(prev => [...prev, { type: 'user', message }])
    
    // Simulate AI response
    setTimeout(() => {
      let response = ''
      const lowerMessage = message.toLowerCase()
      
      if (lowerMessage.includes('appointment') || lowerMessage.includes('book')) {
        response = "I'd be happy to help you schedule an appointment! You can book directly through our calendar system or I can connect you with our scheduling team. What type of service are you interested in?"
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        response = "Our pricing varies by treatment. We offer free consultations to discuss your specific needs and provide accurate pricing. Would you like to schedule a consultation?"
      } else if (lowerMessage.includes('hours') || lowerMessage.includes('open')) {
        response = "We're open Monday-Friday 8AM-6PM, Saturday 9AM-4PM. We also offer emergency services 24/7. Would you like to schedule an appointment?"
      } else if (lowerMessage.includes('insurance')) {
        response = "We accept most major insurance plans and offer flexible payment options. Our team can verify your coverage and discuss financing options during your consultation."
      } else {
        response = "Thank you for your question! Our team of cosmetic dentistry experts would be happy to help. Would you like to schedule a free consultation to discuss your specific needs?"
      }
      
      setChatMessages(prev => [...prev, { type: 'bot', message: response }])
    }, 1000)
    
    setCurrentMessage('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    alert('Thank you for your interest! Our team will contact you within 24 hours to schedule your consultation.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const services = [
    {
      title: 'Teeth Whitening',
      description: 'Professional whitening for a brighter, more confident smile',
      price: 'Starting at $299',
      duration: '60 minutes'
    },
    {
      title: 'Porcelain Veneers',
      description: 'Custom-crafted veneers for a perfect smile transformation',
      price: 'Starting at $1,200/tooth',
      duration: '2-3 visits'
    },
    {
      title: 'Invisalign',
      description: 'Clear aligners for discreet teeth straightening',
      price: 'Starting at $3,500',
      duration: '12-18 months'
    },
    {
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth',
      price: 'Starting at $2,500/tooth',
      duration: '3-6 months'
    },
    {
      title: 'Smile Makeover',
      description: 'Complete smile transformation with multiple treatments',
      price: 'Custom pricing',
      duration: 'Varies'
    },
    {
      title: 'Emergency Care',
      description: '24/7 emergency dental services',
      price: 'Insurance accepted',
      duration: 'Immediate'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'The AI system made booking so easy! Got my veneers done and couldn\'t be happier with the results.',
      service: 'Porcelain Veneers'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Amazing experience from start to finish. The automated reminders kept me on track with my Invisalign treatment.',
      service: 'Invisalign'
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'Professional teeth whitening with seamless scheduling. The AI chat answered all my questions instantly!',
      service: 'Teeth Whitening'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Smile className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Radiant Smiles</h1>
                <p className="text-sm text-gray-600">AI-Powered Cosmetic Dentistry</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-gray-700">(555) 123-SMILE</span>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  AI-Powered Dental Care
                </Badge>
                <h2 className="text-5xl font-bold text-gray-900 leading-tight">
                  Transform Your Smile with 
                  <span className="text-blue-600"> AI-Enhanced</span> Cosmetic Dentistry
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience the future of dental care with our AI-powered systems for seamless booking, 
                  personalized treatment plans, and 24/7 support. Get the smile you've always dreamed of.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat with AI Assistant
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={clinicInterior} 
                  alt="Modern dental clinic interior" 
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI-Enhanced Practice?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge AI technology streamlines every aspect of your dental experience, 
              from initial consultation to post-treatment care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>24/7 AI Chat Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get instant answers to your questions anytime with our intelligent chat assistant.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Smart Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI-powered scheduling with automatic reminders and easy rescheduling options.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Personalized Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI analyzes your dental history to provide customized treatment recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 p-3 rounded-full w-fit mx-auto mb-4">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Expert Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Board-certified cosmetic dentists with AI-enhanced precision and planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Cosmetic Dental Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple whitening to complete smile makeovers, we offer comprehensive 
              cosmetic dental services with AI-enhanced precision and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">
                      {service.price}
                    </span>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h3>
            <p className="text-xl text-gray-600">
              Real experiences from patients who love our AI-enhanced dental care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your Smile?
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  Schedule your free consultation today and discover how our AI-enhanced 
                  cosmetic dentistry can give you the smile of your dreams.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Our Clinic</p>
                    <p className="text-gray-600">123 Smile Street, Dental City, DC 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">(555) 123-SMILE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-600">hello@radiantsmiles.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Office Hours</p>
                    <p className="text-gray-600">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Schedule Your Free Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and our AI system will help match you with the perfect treatment plan.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option value="teeth-whitening">Teeth Whitening</option>
                      <option value="veneers">Porcelain Veneers</option>
                      <option value="invisalign">Invisalign</option>
                      <option value="implants">Dental Implants</option>
                      <option value="makeover">Smile Makeover</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your smile goals or any specific concerns..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Schedule My Free Consultation
                    <CheckCircle className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Smile className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Radiant Smiles</h4>
                  <p className="text-sm text-gray-400">AI-Powered Dentistry</p>
                </div>
              </div>
              <p className="text-gray-400">
                Transforming smiles with cutting-edge AI technology and expert cosmetic dentistry.
              </p>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Teeth Whitening</li>
                <li>Porcelain Veneers</li>
                <li>Invisalign</li>
                <li>Dental Implants</li>
                <li>Smile Makeover</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">AI Features</h5>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Chat Support</li>
                <li>Smart Booking</li>
                <li>Automated Reminders</li>
                <li>Personalized Plans</li>
                <li>Digital Consultations</li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>(555) 123-SMILE</li>
                <li>hello@radiantsmiles.com</li>
                <li>123 Smile Street</li>
                <li>Dental City, DC 12345</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Radiant Smiles Cosmetic Dentistry. All rights reserved. | Powered by AI Technology</p>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-blue-600 hover:bg-blue-700 rounded-full p-4 shadow-lg"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-2xl z-50 border">
          <div className="bg-blue-600 text-white p-4 rounded-t-lg">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">AI Assistant</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(false)}
                className="text-white hover:bg-blue-700"
              >
                ×
              </Button>
            </div>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && currentMessage.trim()) {
                    handleChatMessage(currentMessage)
                  }
                }}
              />
              <Button
                onClick={() => currentMessage.trim() && handleChatMessage(currentMessage)}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

