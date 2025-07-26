"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const coverageItems = [
    {
      icon: "fas fa-heart",
      title: "Death Benefit",
      description:
        "Provides a tax-free lump sum payment to your beneficiaries when you pass away, ensuring they have immediate financial support during a difficult time.",
      color: "red",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Financial Protection for Family",
      description:
        "Protects your loved ones from financial hardship by replacing your income and maintaining their standard of living after you're gone.",
      color: "yellow",
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Income Replacement",
      description:
        "Replaces your salary and earnings to help your family continue paying for daily expenses, education costs, and future financial goals.",
      color: "red",
    },
    {
      icon: "fas fa-credit-card",
      title: "Debt Coverage",
      description:
        "Helps pay off outstanding debts like mortgages, credit cards, student loans, and other financial obligations so they don't burden your family.",
      color: "yellow",
    },
    {
      icon: "fas fa-church",
      title: "Funeral Expenses",
      description:
        "Covers funeral and burial costs, which can range from $7,000 to $15,000 or more, relieving your family of this immediate financial burden.",
      color: "red",
    },
    {
      icon: "fas fa-landmark",
      title: "Estate Planning Benefits",
      description:
        "Provides liquidity for estate taxes and helps preserve family wealth, ensuring your assets can be passed on to your heirs as intended.",
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
            What Does Life Insurance Cover?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Understanding life insurance coverage helps you protect your
            family's financial future and provides peace of mind knowing they'll
            be taken care of.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-info-circle mr-2"></i>
            Essential Life Protection Explained
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Life Protection
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Life insurance provides financial security for your loved ones,
              ensuring they can maintain their lifestyle and achieve their goals
              even after you're gone.
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
              Additional Life Insurance Benefits
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Many life insurance policies include extra features and benefits
              beyond the basic death benefit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-piggy-bank text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Cash Value Growth
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Permanent life insurance builds cash value you can borrow
                    against or withdraw during your lifetime.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-graduation-cap text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Education Funding
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Ensures your children can still attend college and pursue
                    their educational goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-home text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Mortgage Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Helps your family keep their home by paying off the
                    remaining mortgage balance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-wheelchair text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Living Benefits
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Access to death benefit funds if diagnosed with a terminal
                    illness or chronic condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-briefcase text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Business Protection
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Covers business loans, provides key person protection, and
                    funds buy-sell agreements.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-chart-line text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Retirement Planning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Some policies offer tax-advantaged savings and investment
                    options for retirement.
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
                  Life insurance needs vary based on your age, income, debts,
                  and family situation. Choose coverage that fits your specific
                  circumstances.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Calculate coverage based on income and expenses
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Consider term vs. permanent life insurance options
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Name and update beneficiaries regularly
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Review coverage amounts as life changes occur
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Understand policy terms and exclusions
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-yellow-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Keep beneficiaries informed about your policy
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
            Ready to Find Your Life Insurance Plan?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Get personalized quotes and find coverage that protects your
            family's financial future.
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