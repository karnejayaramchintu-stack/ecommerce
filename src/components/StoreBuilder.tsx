import React, { useState } from 'react';
import { Sparkles, Loader, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StoreBuilderProps {
  onStoreGenerated: (store: any) => void;
}

const StoreBuilder: React.FC<StoreBuilderProps> = ({ onStoreGenerated }) => {
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStore, setGeneratedStore] = useState(null);
  const [step, setStep] = useState(1);

  const examples = [
    "I sell handmade jewelry for young women, price range ₹500-3000, bohemian style, based in Jaipur",
    "Organic spice blends and tea from Kerala, targeting health-conscious families, ₹200-1500 price range",
    "Handloom cotton sarees and dress materials, traditional designs, ₹800-5000, serving across India",
    "Artisanal soaps and skincare made with natural ingredients, ₹150-800, eco-friendly packaging"
  ];

  const generateStore = async () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    setStep(2);
    
    // Simulate AI processing steps
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep(3);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep(4);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStep(5);
    
    const mockStore = {
      name: "Jaipur Boho Collection",
      url: "boho-jewelry-jaipur.store",
      description: "Handcrafted jewelry for the modern bohemian spirit",
      trustScore: 8.2,
      theme: "bohemian",
      products: 12
    };
    
    setGeneratedStore(mockStore);
    onStoreGenerated(mockStore);
    setIsGenerating(false);
  };

  const steps = [
    { id: 1, title: "Analyzing your business", icon: "🔍" },
    { id: 2, title: "Generating website design", icon: "🎨" },
    { id: 3, title: "Setting up payment integration", icon: "💳" },
    { id: 4, title: "Calculating trust score", icon: "🛡️" },
    { id: 5, title: "Finalizing your store", icon: "✨" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!isGenerating && !generatedStore && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Store Builder
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Describe Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tell us about your products, target audience, and style. Our AI will create a professional store in minutes.
            </p>
          </div>
        )}

        {!isGenerating && !generatedStore && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="mb-6">
              <label htmlFor="description" className="block text-lg font-semibold text-gray-900 mb-3">
                Tell us about your business:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Example: I sell handmade jewelry for young women, price range ₹500-3000, bohemian style, based in Jaipur"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-700 mb-4">Try these examples:</h3>
              <div className="grid gap-3">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setDescription(example)}
                    className="text-left p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200 hover:border-indigo-300"
                  >
                    <p className="text-sm text-gray-700 italic">"{example}"</p>
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={generateStore}
              disabled={!description.trim()}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Generate My Store
            </button>
          </div>
        )}

        {isGenerating && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Loader className="w-8 h-8 text-white animate-spin" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Creating Your Store
              </h2>
              <p className="text-gray-600">
                Our AI is working its magic...
              </p>
            </div>
            
            <div className="space-y-4">
              {steps.map((stepItem) => (
                <div 
                  key={stepItem.id}
                  className={`flex items-center p-4 rounded-lg transition-all ${
                    step >= stepItem.id 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                    step >= stepItem.id 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step > stepItem.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <span>{stepItem.icon}</span>
                    )}
                  </div>
                  <span className={`font-medium ${
                    step >= stepItem.id ? 'text-green-700' : 'text-gray-500'
                  }`}>
                    {stepItem.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {generatedStore && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Your Store is Ready!
              </h2>
              <p className="text-gray-600">
                Your professional e-commerce store has been generated and is live
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{generatedStore.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{generatedStore.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span>Trust Score: {generatedStore.trustScore}/10</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Payments: Pine Labs Ready</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                      <span>Mobile Optimized: ✓</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-xs text-gray-500 mb-2">Your store URL:</div>
                    <div className="font-mono text-sm text-indigo-600 mb-3">
                      {generatedStore.url}
                    </div>
                    <div className="text-xs text-gray-500">
                      SSL secured • Mobile optimized • Payment ready
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/store/demo"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                View Your Store
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/dashboard"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Manage Store
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoreBuilder;