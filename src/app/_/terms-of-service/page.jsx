"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using HealthEnroll's services, you accept and agree to be bound by the terms and provision of this agreement.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service.",
      ],
    },
    {
      title: "2. Description of Service",
      content: [
        "HealthEnroll provides an online platform that connects consumers with licensed insurance agents and insurance companies.",
        "We offer quote comparison services for health, auto, home, and life insurance products.",
        "Our service is free to consumers and is supported by commissions from insurance partners.",
        "We do not directly sell insurance but facilitate connections between consumers and licensed providers.",
      ],
    },
    {
      title: "3. User Responsibilities",
      content: [
        "You must provide accurate, current, and complete information during the registration process.",
        "You are responsible for maintaining the confidentiality of your account information.",
        "You agree to notify us immediately of any unauthorized use of your account.",
        "You must be at least 18 years old to use our services.",
        "You agree not to use the service for any unlawful purpose or in any way that could damage our reputation.",
      ],
    },
    {
      title: "4. Privacy and Data Protection",
      content: [
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.",
        "We may share your information with licensed insurance agents and companies to provide you with quotes.",
        "We implement appropriate security measures to protect your personal information.",
        "You consent to receive communications from us and our insurance partners regarding insurance products and services.",
      ],
    },
    {
      title: "5. Service Limitations",
      content: [
        "HealthEnroll does not guarantee that insurance coverage will be available or affordable for all users.",
        "We are not responsible for the terms, conditions, or performance of insurance policies sold by third parties.",
        "Insurance availability and pricing are subject to underwriting approval by insurance companies.",
        "We reserve the right to refuse service to anyone for any reason at any time.",
        "Service availability may vary by geographic location and state regulations.",
      ],
    },
    {
      title: "6. Disclaimer of Warranties",
      content: [
        "Our services are provided 'as is' without any warranties, express or implied.",
        "We do not warrant that the service will be uninterrupted, timely, secure, or error-free.",
        "We make no warranties about the accuracy, reliability, completeness, or timeliness of the content or services.",
        "Any material downloaded or obtained through the use of the service is done at your own discretion and risk.",
      ],
    },
    {
      title: "7. Limitation of Liability",
      content: [
        "HealthEnroll shall not be liable for any direct, indirect, incidental, special, or consequential damages.",
        "Our total liability to you for all damages shall not exceed the amount you paid us in the past 12 months.",
        "We are not responsible for any damages arising from your use of third-party insurance products or services.",
        "Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability.",
      ],
    },
    {
      title: "8. Indemnification",
      content: [
        "You agree to indemnify and hold HealthEnroll harmless from any claims, damages, or expenses arising from your use of our services.",
        "This includes any violation of these terms or infringement of any third-party rights.",
        "You are responsible for any costs associated with defending against such claims.",
      ],
    },
    {
      title: "9. Modifications to Terms",
      content: [
        "We reserve the right to modify these terms at any time without prior notice.",
        "Changes will be effective immediately upon posting on our website.",
        "Your continued use of the service after changes constitutes acceptance of the new terms.",
        "We encourage you to review these terms periodically for any updates.",
      ],
    },
    {
      title: "10. Termination",
      content: [
        "We may terminate or suspend your access to our services at any time, with or without cause.",
        "You may discontinue use of our services at any time.",
        "Upon termination, your right to use the service will cease immediately.",
        "Provisions that by their nature should survive termination shall survive.",
      ],
    },
    {
      title: "11. Governing Law",
      content: [
        "These terms shall be governed by and construed in accordance with the laws of the State of Florida.",
        "Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Miami-Dade County, Florida.",
        "If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.",
      ],
    },
    {
      title: "12. Contact Information",
      content: [
        "If you have any questions about these Terms of Service, please contact us:",
        "Phone: 305-404-4460",
        "Address: 9620 Fontainebleau Blvd, Miami, FL 33172",
        "Email: Available through our customer service phone line",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 md:py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src="https://ucarecdn.com/e8dc25c3-7b27-4fc4-9d41-79d3a3098f7b/-/format/auto/"
              alt="HealthEnroll Logo"
              className="w-8 h-8 md:w-10 md:h-10 mr-3 object-contain"
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
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Terms of Service
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using
            HealthEnroll's services.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-gavel mr-2"></i>
            Last Updated: January 26, 2025
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="prose max-w-none">
              <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    <i className="fas fa-info-circle text-yellow-600 text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Important Notice
                    </h3>
                    <p className="text-sm text-gray-700">
                      These Terms of Service constitute a legally binding
                      agreement between you and HealthEnroll. By using our
                      services, you acknowledge that you have read, understood,
                      and agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </div>

              {sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    {section.title}
                  </h2>
                  <div className="ml-11 space-y-3">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-gray-700 text-sm md:text-base leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Legal Notice */}
          <div className="bg-gray-100 rounded-lg p-6 md:p-8 border border-gray-200">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-balance-scale text-red-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Legal Compliance
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  HealthEnroll operates in compliance with state and federal
                  insurance regulations. We work exclusively with licensed
                  insurance agents and carriers.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-500 mr-2"></i>
                    <span className="text-gray-700">Licensed in Florida</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-500 mr-2"></i>
                    <span className="text-gray-700">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-500 mr-2"></i>
                    <span className="text-gray-700">SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-yellow-500 mr-2"></i>
                    <span className="text-gray-700">SSL Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="fas fa-question-circle text-yellow-600 text-xl"></i>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              If you have any questions about these Terms of Service or need
              clarification on any provision, please don't hesitate to contact
              us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-red-600 font-medium">
                <i className="fas fa-phone mr-2"></i>
                <span>305-404-4460</span>
              </div>
              <div className="hidden sm:block text-gray-400">|</div>
              <div className="text-gray-600 text-sm">
                Monday - Friday, 8 AM - 8 PM EST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Now that you understand our terms, let's help you find the perfect
            insurance coverage.
          </p>
          <button
            onClick={() => (window.location.href = "/enrollment")}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-colors text-base md:text-lg shadow-md hover:shadow-lg"
          >
            <i className="fas fa-search mr-2"></i>
            Get Your Quote Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;