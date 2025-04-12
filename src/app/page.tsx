'use client';

import Link from 'next/link';
import { useState } from 'react';
import { 
  MessageCircle, 
  Heart, 
  Activity, 
  User, 
  ArrowRight
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Home() {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Your Personal Healthcare Assistant
              </h1>
              <p className="mt-3 text-xl">
                Get reliable answers to your health questions and personalized guidance from our AI-powered assistant.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {user ? (
                  <Link href="/chat" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
                    Start Chatting <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                ) : (
                  <>
                    <Link href="/auth/signin" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
                      Sign In to Chat <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                    </Link>
                    <Link href="/auth/signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600">
                      Create an Account
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative bg-white p-6 sm:rounded-3xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-xl font-bold text-gray-900">Healthcare Chat</h2>
                      <p className="text-gray-500">Ask anything about your health</p>
                    </div>
                  </div>
                  <div className="h-48 bg-gray-50 rounded-lg border border-gray-200 p-3 overflow-y-auto">
                    <div className="flex justify-start mb-4">
                      <div className="bg-blue-100 rounded-lg py-2 px-4 max-w-[75%] text-gray-800">
                        Hello! I'm your healthcare assistant. How can I help you today?
                      </div>
                    </div>
                    <div className="flex justify-start mb-4">
                      <div className="bg-blue-100 rounded-lg py-2 px-4 max-w-[75%] text-gray-800">
                        You can ask me about common health conditions, preventive care, lifestyle topics, and more.
                      </div>
                    </div>
                    <div className="flex justify-end mb-4">
                      <div className="bg-blue-600 rounded-lg py-2 px-4 max-w-[75%] text-white">
                        Sign in to start your health conversation!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm text-blue-100 italic">
                "As someone with chronic health issues, this assistant has been a game-changer. It helps me understand my symptoms and prepare better questions for my doctor visits."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Section */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            How We Can Help You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Health Information</h3>
                <p className="text-gray-600">
                  Access reliable information about common conditions, symptoms, and treatments from trusted medical sources.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wellness Tips</h3>
                <p className="text-gray-600">
                  Discover personalized advice for nutrition, exercise, sleep, and maintaining a healthy lifestyle.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Journey</h3>
                <p className="text-gray-600">
                  Create an account to track your conversations and receive personalized guidance tailored to your health needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-lg">SM</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Sarah M.</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "This healthcare assistant has been incredibly helpful for managing my anxiety. The tips are practical and it's so convenient to get reliable health information instantly."
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center">
                  <span className="text-green-700 font-bold text-lg">JD</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">John D.</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I love how easy it is to get evidence-based health information. The nutrition advice has completely changed my approach to healthy eating. Highly recommend!"
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold text-lg">AL</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Amy L.</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a parent, I'm constantly looking for reliable health information for my family. This assistant provides clear, trustworthy answers that help me make informed decisions about our health."
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mb-16">
          <div className="max-w-3xl mx-auto bg-blue-600 rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-12 md:py-16 md:px-12 text-white md:flex md:items-center">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-2">Ready to take charge of your health?</h2>
                <p className="text-blue-100">Create an account to get personalized recommendations and save your health conversations.</p>
              </div>
              <div className="md:w-1/3 md:text-right">
                {user ? (
                  <Link href="/chat">
                    <span className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                      Start Chatting
                    </span>
                  </Link>
                ) : (
                  <Link href="/auth/signup">
                    <span className="inline-block px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition duration-300">
                      Sign Up Now
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold">Healthcare Assistant</span>
              </div>
              <p className="mt-2 text-gray-400">
                Your trusted companion for reliable health information and guidance.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white">Health Topics</a></li>
                <li>
                  <Link href={user ? "/chat" : "/auth/signin"} className="text-gray-400 hover:text-white">
                    Chat Assistant
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Account</h3>
              <ul className="mt-4 space-y-2">
                {user ? (
                  <>
                    <li>
                      <Link href="/profile" className="text-gray-400 hover:text-white">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/chat" className="text-gray-400 hover:text-white">
                        My Conversations
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link href="/auth/signin" className="text-gray-400 hover:text-white">
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link href="/auth/signup" className="text-gray-400 hover:text-white">
                        Create Account
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Healthcare Assistant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}