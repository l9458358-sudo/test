"use client";
import React from "react";

function MainComponent() {
  const { useState } = React;
  const [activeSection, setActiveSection] = useState(null);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const insuranceTypes = [
    {
      type: "Health Insurance",
      icon: "fas fa-heartbeat",
      color: "red",
      description:
        "Covers medical expenses like doctor visits, hospital stays, and prescription medications.",
      typical: "$200-800/month",
      deductible: "$1,000-5,000",
    },
    {
      type: "Auto Insurance",
      icon: "fas fa-car",
      color: "yellow",
      description:
        "Protects against vehicle damage and liability when driving.",
      typical: "$100-300/month",
      deductible: "$250-1,000",
    },
    {
      type: "Home Insurance",
      icon: "fas fa-home",
      color: "red",
      description:
        "Covers your home structure, belongings, and liability on your property.",
      typical: "$100-200/month",
      deductible: "$500-2,500",
    },
    {
      type: "Life Insurance",
      icon: "fas fa-heart",
      color: "yellow",
      description:
        "Provides financial support to your family if something happens to you.",
      typical: "$20-100/month",
      deductible: "None",
    },
  ];

  const coverageFactors = [
    {
      title: "Your Assets",
      description:
        "The more valuable things you own, the more coverage you typically need.",
      icon: "fas fa-coins",
    },
    {
      title: "Your Income",
      description:
        "Higher income usually means you can afford more comprehensive coverage.",
      icon: "fas fa-dollar-sign",
    },
    {
      title: "Your Risk Level",
      description:
        "Consider your age, health, driving record, and where you live.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Your Family",
      description:
        "More dependents often means you need higher coverage amounts.",
      icon: "fas fa-users",
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
            Insurance Coverage Guide
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Understanding insurance doesn't have to be complicated. Learn the
            basics in simple terms to make informed decisions about your
            coverage.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-graduation-cap mr-2"></i>
            Insurance Made Simple
          </div>
        </div>
      </section>

      {/* Key Terms Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Key Insurance Terms
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              These are the most important words you'll see when shopping for
              insurance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-credit-card text-red-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Premium</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                The amount you pay for your insurance, usually monthly or
                yearly.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>Example:</strong> You pay $150 every month for your car
                insurance. That's your premium.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-wallet text-yellow-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Deductible
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                The amount you pay out of your own pocket before insurance kicks
                in.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>Example:</strong> If you have a $500 deductible and
                $2,000 in damage, you pay $500 and insurance pays $1,500.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-chart-bar text-red-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Coverage Limit
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                The maximum amount your insurance will pay for a covered claim.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>Example:</strong> If your coverage limit is $100,000 but
                damages are $150,000, you pay the extra $50,000.
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-hand-holding-medical text-yellow-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">Copay</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-3">
                A fixed amount you pay for certain services, common in health
                insurance.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <strong>Example:</strong> You pay a $25 copay every time you
                visit your doctor.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Types Overview */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Types of Insurance Coverage
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Here's what each type of insurance typically covers and costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {insuranceTypes.map((insurance, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 bg-${insurance.color}-100 rounded-full flex items-center justify-center mr-4`}
                  >
                    <i
                      className={`${insurance.icon} text-${insurance.color}-600`}
                    ></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {insurance.type}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {insurance.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      Typical Cost:
                    </span>
                    <div className="text-gray-600">{insurance.typical}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Deductible:
                    </span>
                    <div className="text-gray-600">{insurance.deductible}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered vs Not Covered */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              What's Covered vs. What's Not
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Understanding what your insurance does and doesn't cover helps
              avoid surprises.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Health Insurance",
                covered: [
                  "Doctor visits",
                  "Hospital stays",
                  "Prescription drugs",
                  "Preventive care",
                  "Emergency services",
                ],
                notCovered: [
                  "Cosmetic surgery",
                  "Experimental treatments",
                  "Some alternative medicine",
                  "Dental/vision (unless included)",
                ],
              },
              {
                title: "Auto Insurance",
                covered: [
                  "Accident damage",
                  "Theft",
                  "Liability for injuries",
                  "Medical payments",
                  "Uninsured motorist",
                ],
                notCovered: [
                  "Normal wear and tear",
                  "Mechanical breakdowns",
                  "Racing damage",
                  "Using car for business",
                ],
              },
              {
                title: "Home Insurance",
                covered: [
                  "Fire damage",
                  "Theft",
                  "Wind/hail damage",
                  "Liability injuries",
                  "Temporary living expenses",
                ],
                notCovered: [
                  "Floods",
                  "Earthquakes",
                  "Normal wear and tear",
                  "Pest damage",
                  "Business activities",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <i
                    className={`fas fa-chevron-down transition-transform ${
                      activeSection === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>

                {activeSection === index && (
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-3 flex items-center">
                        <i className="fas fa-check-circle mr-2"></i>
                        Usually Covered
                      </h4>
                      <ul className="space-y-2">
                        {item.covered.map((covered, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <i className="fas fa-check text-green-500 mr-2 text-xs"></i>
                            {covered}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-3 flex items-center">
                        <i className="fas fa-times-circle mr-2"></i>
                        Usually Not Covered
                      </h4>
                      <ul className="space-y-2">
                        {item.notCovered.map((notCovered, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            <i className="fas fa-times text-red-500 mr-2 text-xs"></i>
                            {notCovered}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Coverage */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              How to Choose the Right Amount of Coverage
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Consider these factors when deciding how much insurance you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {coverageFactors.map((factor, index) => (
              <div key={index} className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className={`${factor.icon} text-yellow-600`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 rounded-lg p-6 border border-red-200">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-lightbulb text-red-600"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Quick Tips for Choosing Coverage
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-arrow-right text-red-500 mr-2 text-xs"></i>
                    Start with your state's minimum requirements, then add more
                    if needed
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-arrow-right text-red-500 mr-2 text-xs"></i>
                    Higher deductibles mean lower monthly payments, but more
                    out-of-pocket costs
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-arrow-right text-red-500 mr-2 text-xs"></i>
                    Consider your budget for both monthly payments and potential
                    claims
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-arrow-right text-red-500 mr-2 text-xs"></i>
                    Review your coverage annually as your life changes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Coverage?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Now that you understand the basics, let's find insurance that fits
            your needs and budget.
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