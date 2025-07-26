"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const disclaimerSections = [
    {
      title: "General Insurance Disclaimers",
      icon: "fas fa-shield-alt",
      content: [
        "HealthEnroll is an insurance marketplace that connects consumers with licensed insurance agents and carriers. We are not an insurance company and do not provide insurance coverage directly.",
        "All insurance quotes provided are estimates based on the information you provide. Final rates and coverage terms are determined by the insurance carrier and may differ from initial quotes.",
        "Insurance coverage is subject to policy terms, conditions, and exclusions. Please review all policy documents carefully before making coverage decisions.",
        "Not all insurance products are available in all states. Availability and pricing may vary by location and carrier.",
      ],
    },
    {
      title: "Quote Accuracy & Pricing",
      icon: "fas fa-calculator",
      content: [
        "Insurance quotes are estimates only and are not guarantees of final pricing. Actual premiums may be higher or lower based on underwriting review.",
        "Quotes are based on information provided by the consumer and are subject to verification by the insurance carrier.",
        "Premium rates can change due to factors including but not limited to: changes in coverage, claims history, credit score, driving record, or carrier rate adjustments.",
        "All quotes are subject to carrier approval and underwriting guidelines. Coverage may be declined or modified based on risk assessment.",
      ],
    },
    {
      title: "Coverage Limitations",
      icon: "fas fa-exclamation-triangle",
      content: [
        "Insurance policies contain specific terms, conditions, exclusions, and limitations that affect coverage. Not all losses or damages are covered.",
        "Pre-existing conditions, intentional acts, criminal activities, and certain high-risk activities are typically excluded from coverage.",
        "Coverage limits, deductibles, and waiting periods apply to all insurance policies. Review your policy documents for specific details.",
        "Some services or treatments may require prior authorization or may not be covered under your plan. Contact your insurance carrier for coverage verification.",
      ],
    },
    {
      title: "Medical & Health Disclaimers",
      icon: "fas fa-heartbeat",
      content: [
        "HealthEnroll does not provide medical advice, diagnosis, or treatment recommendations. Consult with qualified healthcare professionals for medical decisions.",
        "Health insurance coverage does not guarantee access to specific doctors, hospitals, or treatments. Network restrictions may apply.",
        "Prescription drug coverage varies by plan and may require prior authorization, step therapy, or have quantity limits.",
        "Mental health and substance abuse coverage is subject to plan terms and may have different cost-sharing requirements than medical coverage.",
      ],
    },
    {
      title: "Financial & Legal Warnings",
      icon: "fas fa-gavel",
      content: [
        "HealthEnroll does not provide financial, legal, or tax advice. Consult with qualified professionals for guidance on financial and legal matters.",
        "Insurance decisions should be based on your individual circumstances and needs. Consider all factors before making coverage choices.",
        "Premium payments are required to maintain coverage. Failure to pay premiums may result in policy cancellation and loss of coverage.",
        "Insurance fraud is a crime. Providing false information on applications or claims may result in policy cancellation and legal consequences.",
      ],
    },
    {
      title: "Service Limitations",
      icon: "fas fa-cog",
      content: [
        "HealthEnroll's services are limited to insurance marketplace functions. We do not handle claims processing, policy administration, or customer service for insurance carriers.",
        "Our website and services may be temporarily unavailable due to maintenance, technical issues, or other factors beyond our control.",
        "Information on our website is for general informational purposes only and may not reflect the most current insurance regulations or carrier offerings.",
        "We are not responsible for the actions, policies, or services of third-party insurance carriers, agents, or other service providers.",
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
            Important Disclaimers
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Please read these important disclaimers carefully before using our
            services. These statements provide essential information about our
            services, limitations, and your responsibilities.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-info-circle mr-2"></i>
            Legal Information & Warnings
          </div>
        </div>
      </section>

      {/* Disclaimers Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {disclaimerSections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 ${
                      index % 2 === 0 ? "bg-red-100" : "bg-yellow-100"
                    } rounded-full flex items-center justify-center mr-4`}
                  >
                    <i
                      className={`${section.icon} ${
                        index % 2 === 0 ? "text-red-600" : "text-yellow-600"
                      } text-lg`}
                    ></i>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 md:p-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-red-600 text-lg"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                  Important Notice
                </h3>
                <div className="space-y-3 text-sm md:text-base text-gray-700">
                  <p>
                    <strong>Licensing:</strong> HealthEnroll operates under
                    appropriate licenses in the states where we provide
                    services. Our licensed agents are qualified to assist with
                    insurance enrollment and questions.
                  </p>
                  <p>
                    <strong>Compliance:</strong> We comply with all applicable
                    federal and state insurance regulations, including HIPAA
                    privacy requirements and state insurance codes.
                  </p>
                  <p>
                    <strong>Updates:</strong> These disclaimers may be updated
                    periodically. Continued use of our services constitutes
                    acceptance of any changes.
                  </p>
                  <p>
                    <strong>Contact:</strong> If you have questions about these
                    disclaimers or our services, please contact us at
                    305-404-4460 or through our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <section className="py-8 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center text-gray-600 text-sm">
              <i className="fas fa-calendar-alt mr-2"></i>
              <span>Last Updated: January 2025</span>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm text-gray-600">
              <a
                href="/privacy-policy"
                className="hover:text-red-600 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="hover:text-red-600 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/licensing"
                className="hover:text-red-600 transition-colors"
              >
                Licensing Information
              </a>
            </div>
            <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
              HealthEnroll is a licensed insurance marketplace serving Florida
              residents. We are committed to helping consumers find affordable
              insurance coverage while maintaining the highest standards of
              compliance and customer service.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;