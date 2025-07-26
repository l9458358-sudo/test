"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const coverageItems = [
    {
      icon: "fas fa-stethoscope",
      title: "Doctor Visits",
      description:
        "Regular checkups, consultations, and visits to your primary care physician or specialists.",
      color: "red",
    },
    {
      icon: "fas fa-hospital",
      title: "Hospital Stays",
      description:
        "Inpatient care, surgeries, and extended medical treatments requiring hospitalization.",
      color: "yellow",
    },
    {
      icon: "fas fa-pills",
      title: "Prescription Medications",
      description:
        "Coverage for prescribed drugs and medications from your doctor or specialist.",
      color: "red",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Preventive Care",
      description:
        "Annual physicals, vaccinations, screenings, and wellness visits at no extra cost.",
      color: "yellow",
    },
    {
      icon: "fas fa-ambulance",
      title: "Emergency Services",
      description:
        "Emergency room visits, urgent care, and ambulance services when you need immediate care.",
      color: "red",
    },
    {
      icon: "fas fa-heartbeat",
      title: "Medical Expenses",
      description:
        "Coverage for various medical costs including tests, procedures, and treatments.",
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
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            What Does Health Insurance Cover?
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Understanding your health insurance coverage helps you make informed
            decisions about your healthcare and financial protection.
          </p>
          <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-info-circle mr-2"></i>
            Essential Health Benefits Explained
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Comprehensive Health Coverage
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Health insurance provides financial protection against medical
              costs and ensures you have access to quality healthcare when you
              need it most.
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
              Additional Benefits You May Receive
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Many health insurance plans include extra benefits beyond basic
              medical coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-eye text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Vision Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Eye exams, glasses, and contact lens coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-tooth text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Dental Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Cleanings, fillings, and major dental procedures.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-brain text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Mental Health
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Therapy, counseling, and mental health treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-baby text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Maternity Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prenatal care, delivery, and newborn coverage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-dumbbell text-yellow-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Wellness Programs
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Gym memberships, nutrition counseling, and health coaching.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="fas fa-home text-red-600"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Home Health Care
                  </h3>
                  <p className="text-gray-600 text-sm">
                    In-home nursing care and medical equipment.
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
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-exclamation-triangle text-yellow-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Important to Remember
                </h3>
                <p className="text-gray-600">
                  Coverage details can vary significantly between different
                  insurance plans and providers.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Always review your specific plan details
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Understand your deductibles and copays
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Check if your doctors are in-network
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Know your prescription drug coverage
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Understand pre-authorization requirements
                  </span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-red-500 mr-3"></i>
                  <span className="text-gray-700 text-sm">
                    Review annual and lifetime benefit limits
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
            Ready to Find Your Health Insurance Plan?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Get personalized quotes and find coverage that fits your needs and
            budget.
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