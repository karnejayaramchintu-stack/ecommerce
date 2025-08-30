import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  MessageCircle,
  Star,
  CheckCircle,
  ArrowRight,
  Code,
  Cpu,
  Wifi
} from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI Store Builder",
      description: "Describe your business in plain English and get a beautiful, custom website instantly with neon-powered design."
    },
    {
      icon: Zap,
      title: "One-Click Payments",
      description: "Pine Labs integration with UPI, cards, EMI, and split payments—no technical setup required."
    },
    {
      icon: Shield,
      title: "Trust Score Engine",
      description: "AI-powered credibility system that builds customer confidence from day one with real-time updates."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Every store is optimized for mobile shopping with lightning-fast loading and dark mode support."
    },
    {
      icon: TrendingUp,
      title: "Live Analytics",
      description: "Real-time AI recommendations for inventory, pricing, and marketing campaigns with neon visualizations."
    },
    {
      icon: MessageCircle,
      title: "Cross-Channel Sync",
      description: "Import products from WhatsApp/Instagram and manage everything in one cyberpunk-inspired dashboard."
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Handmade Jewelry",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The dark mode interface is stunning! Went from Instagram DMs to ₹50K monthly sales in just 2 weeks!"
    },
    {
      name: "Arjun Mehta",
      business: "Organic Spices",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "Real-time notifications keep me updated instantly. No more WhatsApp chaos!"
    },
    {
      name: "Kavya Patel",
      business: "Handloom Sarees",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The neon trust score helped me compete with established brands immediately. Love the cyberpunk aesthetic!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 pt-20 pb-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg shadow-cyan-400/25">
              <Cpu className="w-4 h-4 mr-2" />
              Commerce in a Prompt
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Describe Your Business,
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Get Your Store
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Stop losing sales on WhatsApp. Transform your creator business into a professional online store 
              with AI-powered website generation, real-time analytics, and built-in trust systems—in minutes, not weeks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/build"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center shadow-2xl shadow-cyan-400/25"
              >
                <Code className="w-5 h-5 mr-2" />
                Build My Store Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/store/demo"
                className="border-2 border-cyan-400/50 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-md"
              >
                View Demo Store
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                No technical knowledge required
              </div>
              <div className="flex items-center">
                <Wifi className="w-4 h-4 text-cyan-400 mr-2" />
                Real-time data integration
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 text-purple-400 mr-2" />
                Launch in under 5 minutes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Creator's Dilemma
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Millions of talented creators are stuck selling through DMs because traditional e-commerce is too complex, expensive, and time-consuming.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Cost Barriers", desc: "₹15K-50K+ for basic Shopify setup, hosting, and payment integration", color: "red", icon: "₹" },
              { title: "Technical Complexity", desc: "Payment gateways, hosting decisions, domain setup—overwhelming for creators", color: "yellow", icon: "⚙️" },
              { title: "Trust Issues", desc: "New stores look sketchy—customers hesitate to buy from unknown sellers", color: "blue", icon: "🛡️" },
              { title: "Time Investment", desc: "Weeks to launch when creators just want to start selling today", color: "purple", icon: "⏰" }
            ].map((problem, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 border rounded-xl p-6 shadow-2xl hover:shadow-${problem.color}-400/10 transition-all duration-300 hover:-translate-y-1 ${
                  problem.color === 'red' ? 'border-red-500/30' :
                  problem.color === 'yellow' ? 'border-yellow-500/30' :
                  problem.color === 'blue' ? 'border-blue-500/30' : 'border-purple-500/30'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r ${
                  problem.color === 'red' ? 'from-red-500/20 to-pink-500/20 border border-red-500/30' :
                  problem.color === 'yellow' ? 'from-yellow-500/20 to-orange-500/20 border border-yellow-500/30' :
                  problem.color === 'blue' ? 'from-blue-500/20 to-cyan-500/20 border border-blue-500/30' :
                  'from-purple-500/20 to-pink-500/20 border border-purple-500/30'
                } shadow-lg`}>
                  <span className="text-lg">{problem.icon}</span>
                </div>
                <h3 className="font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Magic Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI transforms simple descriptions into complete e-commerce experiences with integrated payments, live data, and professional neon-accented design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-400/25">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See It In Action
            </h2>
            <p className="text-xl text-gray-300">
              Watch how a simple description becomes a professional online store with live data
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-md shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 mb-6 backdrop-blur-md">
                  <h4 className="font-semibold text-white mb-3 flex items-center">
                    <MessageCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Creator Input:
                  </h4>
                  <p className="text-gray-300 italic">
                    "I sell handmade jewelry for young women, price range ₹500-3000, 
                    bohemian style, based in Jaipur"
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    { text: "Beautiful jewelry showcase website", icon: CheckCircle, color: "green" },
                    { text: "Pine Labs checkout with UPI/cards", icon: CreditCard, color: "blue" },
                    { text: "Live trust score system activated", icon: Shield, color: "purple" },
                    { text: "Real-time analytics dashboard", icon: TrendingUp, color: "cyan" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <item.icon className={`w-5 h-5 mr-3 ${
                        item.color === 'green' ? 'text-green-400' :
                        item.color === 'blue' ? 'text-blue-400' :
                        item.color === 'purple' ? 'text-purple-400' : 'text-cyan-400'
                      }`} />
                      <span className="text-gray-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-md">
                <h4 className="font-semibold text-white mb-4 flex items-center">
                  <Zap className="w-4 h-4 text-purple-400 mr-2" />
                  Generated in 30 seconds:
                </h4>
                <div className="bg-gray-800/50 border border-gray-700/30 rounded-lg p-4">
                  <div className="text-sm text-cyan-400 mb-2 font-mono">neocommerce.ai/boho-jewelry-jaipur</div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-white">Trust Score: 8.2/10</span>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2"></div>
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                  <h5 className="font-semibold text-white">Jaipur Boho Collection</h5>
                  <p className="text-sm text-gray-400">Handcrafted jewelry for the modern bohemian spirit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Creator Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real creators, real results, real fast
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-400/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-cyan-400/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.business}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators who've moved from DMs to professional stores with live data insights
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/build"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl shadow-cyan-400/25 flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Start Building For Free
            </Link>
            <Link 
              to="/store/demo"
              className="border-2 border-cyan-400/50 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 transition-all backdrop-blur-md"
            >
              Explore Demo Store
            </Link>
          </div>
          
          <div className="mt-8 text-gray-400 text-sm">
            No credit card required • Real-time data • Setup in under 5 minutes • Cancel anytime
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;