"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const coverageItems = [
    {
      icon: "fas fa-car-crash",
      title: "Vehicle Damage",
      description:
        "Covers repairs or replacement of your vehicle when damaged in an accident, regardless of who is at fault.",
      color: "red",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Liability Coverage",
      description:
        "Protects you financially if you're responsible for injuring others or damaging their property in an accident.",
      color: "yellow",
    },
    {
      icon: "fas fa-car-side",
      title: "Collision Coverage",
      description:
        "Pays for damage to your car when you collide with another vehicle or object, like a tree or guardrail.",
      color: "red",
    },
    {
      icon: "fas fa-umbrella",
      title: "Comprehensive Coverage",
      description:
        "Covers damage from non-collision events like theft, vandalism, fire, floods, or falling objects.",
      color: "yellow",
    },
    {
      icon: "fas fa-user-md",
      title: "Medical Payments",
      description:
        "Covers medical expenses for you and your passengers after an accident, regardless of who caused it.",
      color: "red",
    },
    {
      icon: "fas fa-user-shield",
      title: "Uninsured Motorist Protection",
      description:
        "Protects you when hit by a driver who doesn't have insurance or doesn't have enough coverage.",
      color: "yellow",
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
            What Does Auto Insurance Cover?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Understanding your auto insurance coverage helps protect you
            financially and ensures you're prepared for unexpected situations on
            the road.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-info-circle mr-2"></i>
            Essential Auto Coverage Explained
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Auto Protection
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Auto insurance provides financial protection against vehicle
              damage and liability, ensuring you're covered in various driving
              scenarios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coverageItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div
                  className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}
                >
                  <i
                    className={`${item.icon} text-${item.color}-600 text-xl`}
                  ></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Additional Coverage Options
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Many auto insurance policies include extra benefits and optional
              coverage for enhanced protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-tools text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Roadside Assistance
                  </h3>
                  <p className="text-gray-600 text-sm">
                    24/7 help with towing, jump starts, flat tires, and lockout
                    services.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-car text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Rental Car Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Pays for a rental car while your vehicle is being repaired
                    after a covered claim.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-dollar-sign text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Gap Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Covers the difference between what you owe and your car's
                    actual value if totaled.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-wrench text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Original Equipment Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ensures repairs use original manufacturer parts instead of
                    aftermarket alternatives.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-user-friends text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Rideshare Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Special protection if you drive for companies like Uber or
                    Lyft.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-shield-alt text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Personal Injury Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Covers medical expenses and lost wages regardless of fault
                    in an accident.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-red-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Important to Remember
                </h3>
                <p className="text-gray-600">
                  Auto insurance requirements and coverage options vary by state
                  and insurance provider.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Check your state's minimum coverage requirements
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Understand your deductibles for each coverage type
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Review coverage limits and consider higher amounts
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Ask about discounts for safe driving and bundling
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Keep your policy information in your vehicle
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Review and update your coverage annually
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-700 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Find Your Auto Insurance Plan?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Get personalized quotes and find coverage that protects you and your
            vehicle on the road.
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