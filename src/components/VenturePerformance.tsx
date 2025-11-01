import React from 'react';
import { TrendingUp, Users, Rocket, Target, Code, Globe } from 'lucide-react';

const VenturePerformance: React.FC = () => {
  return (
    <>
      {/* Venture Performance Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Portfolio Performance
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Total Users</h4>
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">16,247</p>
              <p className="text-sm text-green-600 font-medium">↑ 50% Y-o-Y Growth</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Jobs Created</h4>
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">179</p>
              <p className="text-sm text-blue-600 font-medium">Direct & Indirect</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-gray-900">Active Ventures</h4>
                <Rocket className="w-6 h-6 text-purple-500" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">3</p>
              <p className="text-sm text-purple-600 font-medium">Production Stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Venture Studio Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why a Venture Studio Model?
            </h2>
            <p className="text-xl text-gray-600">
              Unlike accelerators or agencies, we build, own, and scale ventures from scratch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                We Build In-House
              </h3>
              <p className="text-gray-600">
                Not just advisors—we're co-founders who write code, design products, and execute GTM strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Skin in the Game
              </h3>
              <p className="text-gray-600">
                We own equity, share risks, and align success metrics with long-term venture growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Portfolio Approach
              </h3>
              <p className="text-gray-600">
                Diversified bets across civic tech, agritech, fintech—mitigating risk through proven frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenturePerformance;
