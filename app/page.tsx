import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Leaf, Book, Users, Phone, Mail, MessageCircle, Cross } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/HeroSection";

const products = [
  {
    name: "Tofu",
    image: "/images/tofu.jpg",
    description: "Fresh, protein-rich tofu made from organic soybeans",
  },
  {
    name: "Soy Nuts",
    image: "/images/soy-nuts.jpg",
    description: "Crunchy, nutritious roasted soy nuts - perfect healthy snack",
  },
  {
    name: "Whole Wheat Bread",
    image: "/images/whole-wheat-bread.jpg",
    description: "Artisan whole wheat bread with seeds and grains",
  },
  {
    name: "Soy Milk",
    image: "/images/soy-milk.jpg",
    description: "Fresh, creamy soy milk - dairy-free and nutritious",
  },
  {
    name: "Prepared Grains Flour",
    image: "/images/flour.jpg",
    description: "Premium mixed grain flour for healthy baking",
  },
  {
    name: "Fresh Herbs",
    image: "/images/herbs.jpg",
    description: "Organic herbs and spices for natural healing",
  },
]

const grains = [
  { name: "Wheat", image: "/images/wheat.jpg" },
  { name: "Maize", image: "/images/maize.jpg" },
  { name: "Soy", image: "/images/soy.jpg" },
  { name: "Sorghum", image: "/placeholder.svg?height=200&width=200" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-green-800">SERVE THEM</h1>
                <p className="text-sm text-green-600">Health Food Hub</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-green-600">
                About
              </Link>
              <Link href="#products" className="text-gray-600 hover:text-green-600">
                Products
              </Link>
              <Link href="#services" className="text-gray-600 hover:text-green-600">
                Services
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Ministry</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SERVE THEM Health Food Hub is dedicated to health education ministry and spreading the Three Angels
              messages, accompanied by a sustainable business that supports our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/market.jpg"
                alt="Health food ministry"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Health Ministry</h3>
                  <p className="text-gray-600">
                    Promoting natural health through wholesome foods and biblical principles.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Cross className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Three Angels Messages</h3>
                  <p className="text-gray-600">
                    Spreading the eternal gospel and preparing hearts for Christ's return.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Business</h3>
                  <p className="text-gray-600">Supporting our ministry through ethical, health-focused commerce.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">
              Wholesome, natural foods crafted with care for your health and wellbeing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Grains Section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Grains</h3>
            <p className="text-gray-600">High-quality grains sourced for optimal nutrition</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {grains.map((grain, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-3">
                    <Image
                      src={grain.image || "/placeholder.svg"}
                      alt={grain.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800">{grain.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive health education and spiritual resources</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Training Medical Missionaries</CardTitle>
                <CardDescription>Comprehensive training programs for aspiring medical missionaries</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Bible Study Lessons</CardTitle>
                <CardDescription>
                  In-depth Bible study materials focusing on health and spiritual growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Health Books</CardTitle>
                <CardDescription>
                  Educational resources on natural health and biblical wellness principles
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-green-100">Get in touch to learn more about our products and services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <a
                href="mailto:servethemhealth@gmail.com?subject=Inquiry about SERVE THEM Health Food Hub&body=Hello, I would like to inquire about your health food products and services."
                className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-green-100">servethemhealth@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/250783378607?text=Hello! I'm interested in your health food products from SERVE THEM Health Food Hub. Could you please provide more information?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover:bg-white/10 p-3 rounded-lg transition-colors"
              >
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <p className="text-green-100">+250 783 378 607</p>
                </div>
              </a>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Buy Our Products</h3>
              <p className="text-green-100 mb-4">
                Contact us directly to place orders for our wholesome health food products.
              </p>
              <a
                href="https://wa.me/250783378607?text=Hello! I would like to place an order for your health food products. Please let me know what's available."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Place Order
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-green-600 p-2 rounded-full">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold">SERVE THEM Health Food Hub</h3>
                <p className="text-sm text-gray-400">Luke 9:13 - Nourishing Bodies, Feeding Souls</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">© 2024 SERVE THEM Health Food Hub. All rights reserved.</p>
              <p className="text-gray-400 text-sm">Health Education Ministry & Three Angels Messages</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
