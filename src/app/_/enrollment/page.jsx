"use client";
import React from "react";

function MainComponent() {
  const { useState } = React;

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    zipCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    birthDate: "",
    householdSize: "",
    householdIncome: "",
    insuranceType: "",
    dependents: [],
  });
  const [errors, setErrors] = useState({});

  const steps = [
    { number: 1, title: "Location", icon: "fas fa-map-marker-alt" },
    { number: 2, title: "Insurance Type", icon: "fas fa-shield-alt" },
    { number: 3, title: "Full Name", icon: "fas fa-user" },
    { number: 4, title: "Contact Info", icon: "fas fa-envelope" },
    { number: 5, title: "Gender", icon: "fas fa-venus-mars" },
    { number: 6, title: "Birthdate", icon: "fas fa-calendar" },
    { number: 7, title: "Household", icon: "fas fa-home" },
  ];

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.zipCode || formData.zipCode.length !== 5) {
          newErrors.zipCode = "Please enter a valid 5-digit ZIP code";
        }
        break;
      case 2:
        if (!formData.insuranceType) {
          newErrors.insuranceType = "Please select an insurance type";
        }
        break;
      case 3:
        if (!formData.firstName.trim()) {
          newErrors.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
          newErrors.lastName = "Last name is required";
        }
        break;
      case 4:
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phone || formData.phone.length < 10) {
          newErrors.phone = "Please enter a valid phone number";
        }
        break;
      case 5:
        if (!formData.gender) {
          newErrors.gender = "Please select your gender";
        }
        break;
      case 6:
        if (!formData.birthDate) {
          newErrors.birthDate = "Please enter your birth date";
        }
        break;
      case 7:
        if (!formData.householdSize || formData.householdSize < 1) {
          newErrors.householdSize = "Please enter household size";
        }
        if (!formData.householdIncome) {
          newErrors.householdIncome = "Please enter household income";
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 7));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = () => {
    if (validateStep(7)) {
      console.log("Form submitted:", formData);
      alert(
        "Quote request submitted successfully! We'll contact you soon with personalized options."
      );
      // Redirect back to home page
      window.location.href = "/";
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                What's your ZIP code?
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                We'll use this to find insurance options available in your area.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={(e) =>
                  handleInputChange(
                    "zipCode",
                    e.target.value.replace(/\D/g, "").slice(0, 5)
                  )
                }
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                  errors.zipCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="12345"
                maxLength="5"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                What type of insurance are you looking for?
              </h2>
              <p className="text-gray-600">
                Select the insurance type that best fits your needs.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  value: "health",
                  label: "Health Insurance",
                  icon: "fas fa-heartbeat",
                  color: "red",
                },
                {
                  value: "auto",
                  label: "Auto Insurance",
                  icon: "fas fa-car",
                  color: "yellow",
                },
                {
                  value: "home",
                  label: "Home Insurance",
                  icon: "fas fa-home",
                  color: "red",
                },
                {
                  value: "life",
                  label: "Life Insurance",
                  icon: "fas fa-heart",
                  color: "yellow",
                },
              ].map((type) => (
                <button
                  key={type.value}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      insuranceType: type.value,
                    }))
                  }
                  className={`p-6 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                    formData.insuranceType === type.value
                      ? `border-${type.color}-500 bg-${type.color}-50`
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 bg-${type.color}-100 rounded-full flex items-center justify-center mb-4`}
                  >
                    <i
                      className={`${type.icon} text-${type.color}-600 text-lg`}
                    ></i>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {type.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Get comprehensive {type.label.toLowerCase()} coverage.
                  </p>
                </button>
              ))}
            </div>
            {errors.insuranceType && (
              <p className="text-red-500 text-sm text-center">
                {errors.insuranceType}
              </p>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                What's your full name?
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                Please enter your legal name as it appears on your ID.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                How can we contact you?
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                We'll use this information to send you quotes and updates.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john.doe@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    handleInputChange(
                      "phone",
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                What's your gender?
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                This helps us provide accurate pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
              {["Male", "Female", "Other"].map((gender) => (
                <button
                  key={gender}
                  onClick={() => handleInputChange("gender", gender)}
                  className={`p-4 border-2 rounded-lg text-center transition-colors ${
                    formData.gender === gender
                      ? "border-red-500 bg-red-50 text-red-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <div className="text-base md:text-lg font-medium">
                    {gender}
                  </div>
                </button>
              ))}
            </div>
            {errors.gender && (
              <p className="text-red-500 text-sm text-center">
                {errors.gender}
              </p>
            )}
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                What's your birth date?
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                Your age affects pricing and eligibility.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Birth Date
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={(e) => handleInputChange("birthDate", e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                  errors.birthDate ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.birthDate && (
                <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>
              )}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                Tell us about your household
              </h2>
              <p className="text-sm md:text-base text-gray-600 px-2">
                This information helps determine your eligibility for discounts.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Household Size
                </label>
                <select
                  name="householdSize"
                  value={formData.householdSize}
                  onChange={(e) =>
                    handleInputChange("householdSize", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.householdSize ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select household size</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((size) => (
                    <option key={size} value={size}>
                      {size} {size === 1 ? "person" : "people"}
                    </option>
                  ))}
                </select>
                {errors.householdSize && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.householdSize}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Household Income
                </label>
                <select
                  name="householdIncome"
                  value={formData.householdIncome}
                  onChange={(e) =>
                    handleInputChange("householdIncome", e.target.value)
                  }
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-base ${
                    errors.householdIncome
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="">Select income range</option>
                  <option value="0-15000">$0 - $15,000</option>
                  <option value="15000-30000">$15,000 - $30,000</option>
                  <option value="30000-45000">$30,000 - $45,000</option>
                  <option value="45000-60000">$45,000 - $60,000</option>
                  <option value="60000-75000">$60,000 - $75,000</option>
                  <option value="75000-100000">$75,000 - $100,000</option>
                  <option value="100000+">$100,000+</option>
                </select>
                {errors.householdIncome && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.householdIncome}
                  </p>
                )}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 md:py-4 px-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
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

      {/* Progress Indicator */}
      <div className="bg-white border-b border-gray-200 py-4 md:py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4 overflow-x-auto">
            <div className="flex items-center min-w-max">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 ${
                      currentStep > step.number
                        ? "bg-yellow-500 border-yellow-500 text-gray-800"
                        : currentStep === step.number
                        ? "bg-red-500 border-red-500 text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <i className="fas fa-check text-xs md:text-sm"></i>
                    ) : (
                      <i className={`${step.icon} text-xs md:text-sm`}></i>
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 md:w-12 lg:w-20 h-0.5 mx-1 md:mx-2 ${
                        currentStep > step.number
                          ? "bg-yellow-500"
                          : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-base md:text-lg font-medium text-gray-800">
              Step {currentStep} of {steps.length}:{" "}
              {steps[currentStep - 1].title}
            </h1>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="py-6 md:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 md:mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrev}
                disabled={currentStep === 1}
                className={`px-4 md:px-6 py-3 rounded-lg font-medium transition-colors text-sm md:text-base ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                <i className="fas fa-arrow-left mr-2"></i>
                Previous
              </button>

              {currentStep < 7 ? (
                <button
                  onClick={handleNext}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
                >
                  Next
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 px-4 md:px-6 py-3 rounded-lg font-medium transition-colors text-sm md:text-base"
                >
                  Get My Quote
                  <i className="fas fa-check ml-2"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;