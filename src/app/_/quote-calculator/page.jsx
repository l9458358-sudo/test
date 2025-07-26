"use client";
import React from "react";

function MainComponent() {
  const { useState } = React;

  const [formData, setFormData] = useState({
    age: 30,
    coverageAmount: 100000,
    insuranceType: "health",
    zipCode: "",
  });

  const [quote, setQuote] = useState(null);

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const calculateQuote = () => {
    let baseRate = 50;

    // Age factor
    if (formData.age < 25) baseRate *= 0.8;
    else if (formData.age > 50) baseRate *= 1.5;
    else if (formData.age > 35) baseRate *= 1.2;

    // Coverage amount factor
    const coverageFactor = formData.coverageAmount / 100000;
    baseRate *= Math.sqrt(coverageFactor);

    // Insurance type factor
    switch (formData.insuranceType) {
      case "health":
        baseRate *= 1.0;
        break;
      case "auto":
        baseRate *= 0.7;
        break;
      case "home":
        baseRate *= 0.9;
        break;
      case "life":
        baseRate *= 0.6;
        break;
    }

    const monthlyRate = Math.round(baseRate);
    const annualRate = Math.round(monthlyRate * 12 * 0.9); // 10% discount for annual

    setQuote({
      monthly: monthlyRate,
      annual: annualRate,
    });
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatCoverageAmount = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

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
            Insurance Quote Calculator
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get an instant estimate for your insurance costs. Adjust the
            settings below to see how different factors affect your premium.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-calculator mr-2"></i>
            Quick & Easy Estimates
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Calculate Your Quote
              </h2>

              <div className="space-y-6">
                {/* Insurance Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Insurance Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        value: "health",
                        label: "Health",
                        icon: "fas fa-heartbeat",
                        color: "red",
                      },
                      {
                        value: "auto",
                        label: "Auto",
                        icon: "fas fa-car",
                        color: "yellow",
                      },
                      {
                        value: "home",
                        label: "Home",
                        icon: "fas fa-home",
                        color: "red",
                      },
                      {
                        value: "life",
                        label: "Life",
                        icon: "fas fa-heart",
                        color: "yellow",
                      },
                    ].map((type) => (
                      <button
                        key={type.value}
                        onClick={() =>
                          handleInputChange("insuranceType", type.value)
                        }
                        className={`p-3 border-2 rounded-lg text-left transition-all ${
                          formData.insuranceType === type.value
                            ? `border-${type.color}-500 bg-${type.color}-50`
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 bg-${type.color}-100 rounded-full flex items-center justify-center mr-3`}
                          >
                            <i
                              className={`${type.icon} text-${type.color}-600 text-sm`}
                            ></i>
                          </div>
                          <span className="font-medium text-gray-800">
                            {type.label}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age: {formData.age} years old
                  </label>
                  <input
                    type="range"
                    min="18"
                    max="80"
                    value={formData.age}
                    onChange={(e) =>
                      handleInputChange("age", parseInt(e.target.value))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18</span>
                    <span>80</span>
                  </div>
                </div>

                {/* Coverage Amount Slider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Amount:{" "}
                    {formatCoverageAmount(formData.coverageAmount)}
                  </label>
                  <input
                    type="range"
                    min="25000"
                    max="1000000"
                    step="25000"
                    value={formData.coverageAmount}
                    onChange={(e) =>
                      handleInputChange(
                        "coverageAmount",
                        parseInt(e.target.value)
                      )
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$25K</span>
                    <span>$1M</span>
                  </div>
                </div>

                {/* ZIP Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) =>
                      handleInputChange(
                        "zipCode",
                        e.target.value.replace(/\D/g, "").slice(0, 5)
                      )
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="12345"
                    maxLength="5"
                  />
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateQuote}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <i className="fas fa-calculator mr-2"></i>
                  Calculate Quote
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Your Estimated Quote
              </h2>

              {quote ? (
                <div className="space-y-6">
                  {/* Monthly Quote */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Monthly Premium
                        </h3>
                        <p className="text-sm text-gray-600">
                          Pay monthly with no commitment
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-600">
                          {formatCurrency(quote.monthly)}
                        </div>
                        <div className="text-sm text-gray-500">per month</div>
                      </div>
                    </div>
                  </div>

                  {/* Annual Quote */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          Annual Premium
                        </h3>
                        <p className="text-sm text-gray-600">
                          Save 10% when you pay annually
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-red-600">
                          {formatCurrency(quote.annual)}
                        </div>
                        <div className="text-sm text-gray-500">per year</div>
                      </div>
                    </div>
                  </div>

                  {/* Coverage Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Quote Summary
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Insurance Type:</span>
                        <span className="font-medium capitalize">
                          {formData.insuranceType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Age:</span>
                        <span className="font-medium">
                          {formData.age} years
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Coverage Amount:</span>
                        <span className="font-medium">
                          {formatCoverageAmount(formData.coverageAmount)}
                        </span>
                      </div>
                      {formData.zipCode && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">ZIP Code:</span>
                          <span className="font-medium">
                            {formData.zipCode}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Get Actual Quote Button */}
                  <button
                    onClick={() => (window.location.href = "/enrollment")}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <i className="fas fa-arrow-right mr-2"></i>
                    Get Actual Quote
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-calculator text-gray-400 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Ready to Calculate
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the form and click "Calculate Quote" to see your
                    estimated premium.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <i className="fas fa-info-circle text-yellow-600 text-sm"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  These are estimated costs for illustration purposes only.
                  Actual premiums may vary significantly based on your specific
                  circumstances, health history, driving record, credit score,
                  and other factors. Final rates are determined after a complete
                  application review and underwriting process. Contact us for
                  personalized quotes and detailed coverage information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}

export default MainComponent;