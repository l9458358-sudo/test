"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const coverageItems = [
    {
      icon: "fas fa-home",
      title: "Dwelling Protection",
      description:
        "Covers the physical structure of your home including walls, roof, floors, and built-in appliances against covered perils like fire, wind, and hail.",
      color: "red",
    },
    {
      icon: "fas fa-couch",
      title: "Personal Property",
      description:
        "Protects your belongings inside your home such as furniture, clothing, electronics, and other personal items from theft or damage.",
      color: "yellow",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Liability Coverage",
      description:
        "Protects you financially if someone is injured on your property or if you accidentally damage someone else's property.",
      color: "red",
    },
    {
      icon: "fas fa-key",
      title: "Loss of Use",
      description:
        "Covers additional living expenses if your home becomes uninhabitable due to a covered loss, including hotel stays and meals.",
      color: "yellow",
    },
    {
      icon: "fas fa-user-md",
      title: "Medical Payments",
      description:
        "Covers medical expenses for guests who are injured on your property, regardless of who is at fault for the accident.",
      color: "red",
    },
    {
      icon: "fas fa-bed",
      title: "Additional Living Expenses",
      description:
        "Pays for temporary housing, restaurant meals, and other costs when you can't live in your home due to covered damage.",
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
            What Does Home Insurance Cover?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Understanding your home insurance coverage helps protect your most
            valuable investment and provides peace of mind for you and your
            family.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-info-circle mr-2"></i>
            Essential Home Protection Explained
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Home Protection
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Home insurance provides financial protection for your property and
              belongings, ensuring you're covered against unexpected events and
              liability claims.
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
              Many home insurance policies include extra benefits and optional
              coverage for enhanced protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-water text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Water Damage Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Coverage for sudden water damage from burst pipes or
                    appliance malfunctions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-gem text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Valuable Items Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Extra protection for jewelry, art, collectibles, and other
                    high-value items.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-dog text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Pet Liability
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Protection if your pet injures someone or damages their
                    property.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-hammer text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Home Business Coverage
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Protection for business equipment and liability if you work
                    from home.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-bolt text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Power Surge Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Coverage for electronics damaged by electrical surges or
                    lightning strikes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-credit-card text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Identity Theft Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Assistance and coverage for expenses related to identity
                    theft recovery.
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
                  Home insurance coverage and exclusions vary by policy and
                  location. Review your specific policy details carefully.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Understand what perils are covered and excluded
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Know your deductibles for different types of claims
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Keep an updated home inventory with photos
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Consider replacement cost vs. actual cash value
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Review coverage limits annually as home values change
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Ask about discounts for security systems and safety features
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
            Ready to Find Your Home Insurance Plan?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Get personalized quotes and find coverage that protects your home
            and everything in it.
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