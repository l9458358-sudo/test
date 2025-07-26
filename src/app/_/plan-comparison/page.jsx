"use client";
import React from "react";

function MainComponent() {
  const { useState } = React;
  const [selectedPlanType, setSelectedPlanType] = useState("health");

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const planTypes = [
    { value: "health", label: "Health Insurance", icon: "fas fa-heartbeat" },
    { value: "auto", label: "Auto Insurance", icon: "fas fa-car" },
    { value: "home", label: "Home Insurance", icon: "fas fa-home" },
    { value: "life", label: "Life Insurance", icon: "fas fa-heart" },
  ];

  const healthPlans = [
    {
      name: "Basic",
      price: "$89",
      period: "/month",
      color: "red",
      popular: false,
      features: [
        {
          name: "Doctor Visits",
          basic: "$35 copay",
          standard: "$25 copay",
          premium: "$15 copay",
        },
        {
          name: "Emergency Room",
          basic: "$500 copay",
          standard: "$300 copay",
          premium: "$150 copay",
        },
        {
          name: "Prescription Drugs",
          basic: "$15-$50 copay",
          standard: "$10-$40 copay",
          premium: "$5-$25 copay",
        },
        {
          name: "Annual Deductible",
          basic: "$3,000",
          standard: "$1,500",
          premium: "$500",
        },
        {
          name: "Out-of-Pocket Max",
          basic: "$8,000",
          standard: "$6,000",
          premium: "$4,000",
        },
        {
          name: "Preventive Care",
          basic: "Covered",
          standard: "Covered",
          premium: "Covered",
        },
        {
          name: "Specialist Visits",
          basic: "$50 copay",
          standard: "$35 copay",
          premium: "$25 copay",
        },
        {
          name: "Mental Health",
          basic: "$35 copay",
          standard: "$25 copay",
          premium: "$15 copay",
        },
        {
          name: "Dental Coverage",
          basic: "Not included",
          standard: "Basic",
          premium: "Comprehensive",
        },
        {
          name: "Vision Coverage",
          basic: "Not included",
          standard: "Basic",
          premium: "Comprehensive",
        },
      ],
    },
    {
      name: "Standard",
      price: "$149",
      period: "/month",
      color: "yellow",
      popular: true,
      features: [],
    },
    {
      name: "Premium",
      price: "$219",
      period: "/month",
      color: "red",
      popular: false,
      features: [],
    },
  ];

  const autoPlans = [
    {
      name: "Basic",
      price: "$79",
      period: "/month",
      color: "red",
      popular: false,
      features: [
        {
          name: "Liability Coverage",
          basic: "$25,000/$50,000",
          standard: "$50,000/$100,000",
          premium: "$100,000/$300,000",
        },
        {
          name: "Collision Deductible",
          basic: "$1,000",
          standard: "$500",
          premium: "$250",
        },
        {
          name: "Comprehensive Deductible",
          basic: "$1,000",
          standard: "$500",
          premium: "$250",
        },
        {
          name: "Uninsured Motorist",
          basic: "$25,000/$50,000",
          standard: "$50,000/$100,000",
          premium: "$100,000/$300,000",
        },
        {
          name: "Medical Payments",
          basic: "$5,000",
          standard: "$10,000",
          premium: "$25,000",
        },
        {
          name: "Roadside Assistance",
          basic: "Not included",
          standard: "Included",
          premium: "Premium 24/7",
        },
        {
          name: "Rental Car Coverage",
          basic: "Not included",
          standard: "$30/day",
          premium: "$50/day",
        },
        {
          name: "Gap Coverage",
          basic: "Not included",
          standard: "Not included",
          premium: "Included",
        },
        {
          name: "New Car Replacement",
          basic: "Not included",
          standard: "Not included",
          premium: "Included",
        },
        {
          name: "Accident Forgiveness",
          basic: "Not included",
          standard: "After 5 years",
          premium: "Immediate",
        },
      ],
    },
    {
      name: "Standard",
      price: "$129",
      period: "/month",
      color: "yellow",
      popular: true,
      features: [],
    },
    {
      name: "Premium",
      price: "$189",
      period: "/month",
      color: "red",
      popular: false,
      features: [],
    },
  ];

  const homePlans = [
    {
      name: "Basic",
      price: "$69",
      period: "/month",
      color: "red",
      popular: false,
      features: [
        {
          name: "Dwelling Coverage",
          basic: "$200,000",
          standard: "$300,000",
          premium: "$500,000",
        },
        {
          name: "Personal Property",
          basic: "$100,000",
          standard: "$150,000",
          premium: "$250,000",
        },
        {
          name: "Liability Protection",
          basic: "$100,000",
          standard: "$300,000",
          premium: "$500,000",
        },
        {
          name: "Deductible",
          basic: "$2,500",
          standard: "$1,000",
          premium: "$500",
        },
        {
          name: "Additional Living Expenses",
          basic: "$20,000",
          standard: "$30,000",
          premium: "$50,000",
        },
        {
          name: "Water Damage",
          basic: "Limited",
          standard: "Covered",
          premium: "Full coverage",
        },
        {
          name: "Identity Theft",
          basic: "Not included",
          standard: "$15,000",
          premium: "$25,000",
        },
        {
          name: "Home Business",
          basic: "Not included",
          standard: "$2,500",
          premium: "$10,000",
        },
        {
          name: "Jewelry Coverage",
          basic: "$1,500",
          standard: "$5,000",
          premium: "$15,000",
        },
        {
          name: "Replacement Cost",
          basic: "Actual value",
          standard: "Replacement cost",
          premium: "Guaranteed replacement",
        },
      ],
    },
    {
      name: "Standard",
      price: "$109",
      period: "/month",
      color: "yellow",
      popular: true,
      features: [],
    },
    {
      name: "Premium",
      price: "$159",
      period: "/month",
      color: "red",
      popular: false,
      features: [],
    },
  ];

  const lifePlans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      color: "red",
      popular: false,
      features: [
        {
          name: "Death Benefit",
          basic: "$100,000",
          standard: "$250,000",
          premium: "$500,000",
        },
        {
          name: "Term Length",
          basic: "10 years",
          standard: "20 years",
          premium: "30 years",
        },
        {
          name: "Premium Guarantee",
          basic: "5 years",
          standard: "10 years",
          premium: "Full term",
        },
        {
          name: "Conversion Option",
          basic: "Not included",
          standard: "Until age 65",
          premium: "Until age 70",
        },
        {
          name: "Waiver of Premium",
          basic: "Not included",
          standard: "Available",
          premium: "Included",
        },
        {
          name: "Accelerated Benefits",
          basic: "Not included",
          standard: "25% of benefit",
          premium: "50% of benefit",
        },
        {
          name: "Child Coverage",
          basic: "Not included",
          standard: "$10,000",
          premium: "$25,000",
        },
        {
          name: "Spouse Coverage",
          basic: "Not included",
          standard: "$50,000",
          premium: "$100,000",
        },
        {
          name: "Annual Renewable",
          basic: "Yes",
          standard: "No",
          premium: "No",
        },
        {
          name: "Medical Exam",
          basic: "Required",
          standard: "Simplified",
          premium: "Full underwriting",
        },
      ],
    },
    {
      name: "Standard",
      price: "$59",
      period: "/month",
      color: "yellow",
      popular: true,
      features: [],
    },
    {
      name: "Premium",
      price: "$99",
      period: "/month",
      color: "red",
      popular: false,
      features: [],
    },
  ];

  const getCurrentPlans = () => {
    switch (selectedPlanType) {
      case "health":
        return healthPlans;
      case "auto":
        return autoPlans;
      case "home":
        return homePlans;
      case "life":
        return lifePlans;
      default:
        return healthPlans;
    }
  };

  const currentPlans = getCurrentPlans();
  const features = currentPlans[0].features;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 md:py-4 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            Compare Insurance Plans
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Find the perfect insurance plan for your needs. Compare features,
            costs, and coverage details side-by-side.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-balance-scale mr-2"></i>
            Side-by-Side Comparison
          </div>
        </div>
      </section>

      {/* Plan Type Selector */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Choose Insurance Type
            </h2>
            <p className="text-gray-600">
              Select the type of insurance you want to compare
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {planTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedPlanType(type.value)}
                className={`p-4 border-2 rounded-lg text-center transition-all ${
                  selectedPlanType === type.value
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <i className={`${type.icon} text-xl mb-2 block`}></i>
                <span className="text-sm font-medium">{type.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Comparison */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Plan Headers */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="hidden md:block"></div>
            {currentPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-sm border-2 text-center relative ${
                  plan.popular ? `border-${plan.color}-500` : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div
                    className={`absolute -top-3 left-1/2 transform -translate-x-1/2 bg-${plan.color}-500 text-white px-4 py-1 rounded-full text-xs font-medium`}
                  >
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <button
                  onClick={() => (window.location.href = "/enrollment")}
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? `bg-${plan.color}-500 hover:bg-${plan.color}-600 text-white`
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800 w-1/4">
                      Features
                    </th>
                    {currentPlans.map((plan, index) => (
                      <th
                        key={index}
                        className={`px-6 py-4 text-center text-sm font-semibold w-1/4 ${
                          plan.popular
                            ? `text-${plan.color}-700`
                            : "text-gray-800"
                        }`}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">
                        {feature.basic}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600 bg-yellow-50">
                        {feature.standard}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600">
                        {feature.premium}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="md:hidden space-y-6 mt-8">
            {currentPlans.map((plan, planIndex) => (
              <div
                key={planIndex}
                className={`bg-white rounded-lg p-6 shadow-sm border-2 ${
                  plan.popular ? `border-${plan.color}-500` : "border-gray-200"
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex justify-between items-center py-2 border-b border-gray-100"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {feature.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {planIndex === 0
                          ? feature.basic
                          : planIndex === 1
                          ? feature.standard
                          : feature.premium}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => (window.location.href = "/enrollment")}
                  className={`w-full mt-6 py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? `bg-${plan.color}-500 hover:bg-${plan.color}-600 text-white`
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
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
            Choose your plan and get personalized quotes in minutes.
          </p>
          <button
            onClick={() => (window.location.href = "/enrollment")}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium transition-colors text-base md:text-lg shadow-md hover:shadow-lg"
          >
            <i className="fas fa-arrow-right mr-2"></i>
            Start Your Application
          </button>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;