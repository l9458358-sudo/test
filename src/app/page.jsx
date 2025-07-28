"use client";
import React from "react";
import Link from "next/link";

function MainComponent() {
  const { useState } = React;
  const [zipCode, setZipCode] = useState("");
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleFindPlans = () => {
    window.location.href = "/enrollment";
  };

  const faqItems = [
    "What types of insurance do you offer?",
    "How do I know if I qualify for discounts?",
    "Can I get a quote for multiple types of insurance?",
    "Is there really no cost to use this service?",
    "What information do I need to get started?",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://ucarecdn.com/e8dc25c3-7b27-4fc4-9d41-79d3a3098f7b/-/format/auto/"
              alt="HealthEnroll Logo"
              className="w-10 h-10 md:w-12 md:h-12 mr-3 object-contain"
            />
            <span className="text-lg md:text-xl font-semibold text-gray-800">
              HealthEnroll
            </span>
          </div>
          <div className="flex items-center text-gray-600 text-sm md:text-base">
            <i className="fas fa-phone mr-1 md:mr-2"></i>
            <span className="hidden sm:inline">305-404-4460</span>
            <span className="sm:hidden">Call Us</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            Find Affordable Insurance for 2025
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Health, Auto, Home & More. Get quotes in minutes and see if you
            qualify for discounts.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-6">
            <input
              type="text"
              placeholder="Enter your ZIP code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base"
            />
            <button
              onClick={handleFindPlans}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              <i className="fas fa-search mr-2"></i>
              Get Quotes
            </button>
          </div>

          <p className="text-sm text-gray-500 mb-6 md:mb-8 px-4">
            Free quotes • No obligation • Secure & confidential
          </p>

          <p className="text-sm text-gray-400">
            Trusted by major insurance carriers
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Getting insurance quotes has never been easier. Follow these
              simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marker-alt text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                1. Enter Your ZIP Code
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Tell us where you live to see plans available in your area.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-file-alt text-red-600 text-xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                2. Compare Options
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Review insurance options side-by-side and see what you qualify
                for.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-user text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                3. Get Covered
              </h3>
              <p className="text-gray-600 text-sm md:text-base">
                Complete your enrollment with help from our licensed agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Insurance We Offer
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Comprehensive coverage for all aspects of your life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Link href="/health-insurance" className="block text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heartbeat text-red-600 text-xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                Health Insurance
              </h3>
              <p className="text-sm text-gray-600 px-2">
                Comprehensive health coverage with plans starting as low as
                $0/month.
              </p>
            </Link>

            <Link href="/auto-insurance" className="block text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-car text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                Auto Insurance
              </h3>
              <p className="text-sm text-gray-600 px-2">
                Protect your vehicle with comprehensive auto insurance coverage.
              </p>
            </Link>

            <Link href="/home-insurance" className="block text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-red-600 text-xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                Home Insurance
              </h3>
              <p className="text-sm text-gray-600 px-2">
                Protect your home and belongings with reliable home insurance.
              </p>
            </Link>

            <Link href="/life-insurance" className="block text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-umbrella text-yellow-600 text-xl"></i>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">
                Life Insurance
              </h3>
              <p className="text-sm text-gray-600 px-2">
                Secure your family's financial future with affordable life
                insurance.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-gray-600 px-4">
              Get answers to common questions about insurance coverage.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((question, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 md:px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 flex justify-between items-center text-sm md:text-base rounded-lg transition-colors"
                >
                  <span className="pr-4">{question}</span>
                  <i
                    className={`fas fa-chevron-down transition-transform flex-shrink-0 ${
                      faqOpen[index] ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {faqOpen[index] && (
                  <div className="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base">
                    <p>
                      This is where the answer to the question would be
                      displayed. Each FAQ item can be expanded to show detailed
                      information.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-red-700 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Find Your Perfect Insurance Plan?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8 px-4">
            Enter your ZIP code now to see plans and pricing in your area.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter your ZIP code"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            />
            <button
              onClick={handleFindPlans}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap shadow-md hover:shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <img
                  src="https://ucarecdn.com/e8dc25c3-7b27-4fc4-9d41-79d3a3098f7b/-/format/auto/"
                  alt="HealthEnroll Logo"
                  className="w-8 h-8 mr-3 object-contain"
                />
                <span className="text-xl font-semibold text-white">
                  HealthEnroll
                </span>
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Helping Americans find affordable insurance since 2014.
              </p>
              <div className="flex items-center text-yellow-400 text-sm mb-2">
                <i className="fas fa-phone mr-2"></i>
                <span>305-404-4460</span>
              </div>
              <div className="flex items-start text-yellow-400 text-sm">
                <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                <span>
                  9620 Fontainebleau Blvd
                  <br />
                  Miami, FL 33172
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Insurance Types</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/health-insurance"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Health Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="/auto-insurance"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Auto Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="/home-insurance"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Home Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="/life-insurance"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Life Insurance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/quote-calculator"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Quote Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="/coverage-guide"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Coverage Guide
                  </a>
                </li>
                <li>
                  <a
                    href="/plan-comparison"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Plan Comparison
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-service"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/licensing"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Licensing
                  </a>
                </li>
                <li>
                  <a
                    href="/disclaimers"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Disclaimers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 HealthEnroll. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-right">
              Licensed insurance agents available in Florida.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;