"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect personal information you provide when requesting quotes or enrolling in insurance, including your name, address, email, phone number, date of birth, Social Security number, and household information.",
        },
        {
          subtitle: "Usage Information",
          text: "We automatically collect information about how you use our website, including your IP address, browser type, pages visited, and time spent on our site.",
        },
        {
          subtitle: "Device Information",
          text: "We may collect information about the device you use to access our services, including device type, operating system, and mobile device identifiers.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Providing Services",
          text: "We use your information to provide insurance quotes, connect you with licensed agents, process applications, and deliver the services you request.",
        },
        {
          subtitle: "Communication",
          text: "We may contact you about your quotes, policy updates, important notices, and to provide customer support.",
        },
        {
          subtitle: "Improvement",
          text: "We analyze usage data to improve our website, services, and user experience.",
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.",
        },
      ],
    },
    {
      title: "Information Sharing",
      content: [
        {
          subtitle: "Insurance Partners",
          text: "We share your information with licensed insurance companies and agents to provide you with quotes and coverage options. These partners are bound by their own privacy policies and regulatory requirements.",
        },
        {
          subtitle: "Service Providers",
          text: "We may share information with trusted third-party service providers who help us operate our website and provide services, such as payment processors and technology providers.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose information when required by law, court order, or government request, or to protect our rights and safety.",
        },
        {
          subtitle: "Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.",
        },
      ],
    },
    {
      title: "Cookies and Tracking",
      content: [
        {
          subtitle: "Cookies",
          text: "We use cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic.",
        },
        {
          subtitle: "Analytics",
          text: "We use analytics services to understand how visitors use our website and to improve our services.",
        },
        {
          subtitle: "Your Choices",
          text: "You can control cookies through your browser settings, though disabling cookies may affect website functionality.",
        },
      ],
    },
    {
      title: "Data Security",
      content: [
        {
          subtitle: "Protection Measures",
          text: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          subtitle: "Encryption",
          text: "We use industry-standard encryption to protect sensitive information during transmission and storage.",
        },
        {
          subtitle: "Access Controls",
          text: "We limit access to personal information to employees and contractors who need it to perform their job functions.",
        },
      ],
    },
    {
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access and correct your personal information. Contact us to request access or make corrections to your data.",
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of marketing communications by following the unsubscribe instructions in our emails or contacting us directly.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information, subject to legal and regulatory requirements.",
        },
        {
          subtitle: "State-Specific Rights",
          text: "Residents of certain states may have additional privacy rights under state law, including the right to know what personal information is collected and the right to delete personal information.",
        },
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
            Privacy Policy
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-shield-alt mr-2"></i>
            Last Updated: January 1, 2025
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-info-circle text-red-600 text-sm"></i>
              </div>
              Introduction
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                HealthEnroll ("we," "our," or "us") is committed to protecting
                your privacy and personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p>
                By using our website or services, you agree to the collection
                and use of information in accordance with this policy. If you do
                not agree with our policies and practices, please do not use our
                services.
              </p>
            </div>
          </div>

          {/* Main Sections */}
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 mb-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-600 text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {item.subtitle}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-5">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Data Retention */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-clock text-yellow-600 text-sm"></i>
              </div>
              Data Retention
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                We retain your personal information for as long as necessary to
                provide our services, comply with legal obligations, resolve
                disputes, and enforce our agreements. The retention period may
                vary depending on the type of information and the purpose for
                which it was collected.
              </p>
              <p>
                When we no longer need your personal information, we will
                securely delete or anonymize it in accordance with our data
                retention policies and applicable law.
              </p>
            </div>
          </div>

          {/* Children's Privacy */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-child text-red-600 text-sm"></i>
              </div>
              Children's Privacy
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                Our services are not intended for children under 18 years of
                age. We do not knowingly collect personal information from
                children under 18. If we become aware that we have collected
                personal information from a child under 18, we will take steps
                to delete such information.
              </p>
            </div>
          </div>

          {/* Changes to Privacy Policy */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-edit text-yellow-600 text-sm"></i>
              </div>
              Changes to This Privacy Policy
            </h2>
            <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the new Privacy Policy on our website and updating
                the "Last Updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to
                stay informed about how we protect your information.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-red-50 rounded-lg p-6 md:p-8 border border-red-200">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <i className="fas fa-envelope text-red-600 text-sm"></i>
              </div>
              Contact Us
            </h2>
            <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                If you have questions about this Privacy Policy or our privacy
                practices, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                  <div className="flex items-center text-red-600">
                    <i className="fas fa-phone mr-2"></i>
                    <span>305-404-4460</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                  <div className="flex items-start text-gray-600">
                    <i className="fas fa-map-marker-alt mr-2 mt-1"></i>
                    <div>
                      9620 Fontainebleau Blvd
                      <br />
                      Miami, FL 33172
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 pt-4 border-t border-red-200">
                We will respond to your privacy-related inquiries within 30 days
                of receipt.
              </p>
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
            Now that you understand how we protect your privacy, let's find you
            the perfect insurance coverage.
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