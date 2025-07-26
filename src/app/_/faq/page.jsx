"use client";
import React from "react";

function MainComponent() {
  const { useState } = React;
  const [openFaq, setOpenFaq] = useState({});

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqCategories = [
    {
      title: "General Insurance Questions",
      questions: [
        {
          question: "What types of insurance do you offer?",
          answer:
            "We offer health insurance, auto insurance, home insurance, and life insurance. Each type provides different coverage to protect you and your family from unexpected costs.",
        },
        {
          question: "How do I know which insurance I need?",
          answer:
            "The insurance you need depends on your personal situation. Health insurance is essential for medical costs, auto insurance is required if you drive, home insurance protects your property, and life insurance provides for your family's future.",
        },
        {
          question: "Can I get multiple types of insurance?",
          answer:
            "Yes! Many people have multiple types of insurance. You can often get discounts when you bundle different insurance types together with the same provider.",
        },
        {
          question: "Is this service really free?",
          answer:
            "Yes, our service is completely free to use. We're paid by insurance companies when you choose a plan, so there's no cost to you for getting quotes and comparing options.",
        },
      ],
    },
    {
      title: "Pricing & Costs",
      questions: [
        {
          question: "How much does insurance cost?",
          answer:
            "Insurance costs vary based on many factors including your age, location, coverage amount, and type of insurance. Health insurance typically ranges from $200-800/month, auto insurance $100-300/month, and home insurance $100-200/month.",
        },
        {
          question: "What affects my insurance premium?",
          answer:
            "Your premium is affected by factors like your age, location, health status (for health insurance), driving record (for auto), home value and location (for home insurance), and the amount of coverage you choose.",
        },
        {
          question: "Can I get discounts on my insurance?",
          answer:
            "Yes! Common discounts include bundling multiple policies, safe driving records, home security systems, non-smoking discounts, and good student discounts. We'll help you find all available discounts.",
        },
        {
          question: "What's a deductible and how does it work?",
          answer:
            "A deductible is the amount you pay out of pocket before your insurance starts covering costs. For example, with a $500 deductible, you pay the first $500 of covered expenses, then insurance pays the rest.",
        },
      ],
    },
    {
      title: "Coverage & Benefits",
      questions: [
        {
          question: "What does health insurance cover?",
          answer:
            "Health insurance typically covers doctor visits, hospital stays, prescription medications, preventive care, emergency services, and medical procedures. Coverage details vary by plan.",
        },
        {
          question: "What does auto insurance cover?",
          answer:
            "Auto insurance covers vehicle damage from accidents, liability for injuries or property damage you cause, medical payments, and protection from uninsured drivers. Optional coverage includes comprehensive and collision.",
        },
        {
          question: "What's not covered by insurance?",
          answer:
            "Common exclusions include pre-existing conditions (in some cases), cosmetic procedures, normal wear and tear, intentional damage, and certain high-risk activities. Always review your policy details.",
        },
        {
          question: "Can I use any doctor or hospital?",
          answer:
            "This depends on your plan type. HMO plans require you to use network providers, while PPO plans allow out-of-network care at higher costs. We'll help you understand your options.",
        },
      ],
    },
    {
      title: "Enrollment Process",
      questions: [
        {
          question: "How long does it take to get coverage?",
          answer:
            "Coverage start times vary by insurance type. Health insurance often starts the first of the month after enrollment, auto insurance can start immediately, and home insurance typically takes a few days to process.",
        },
        {
          question: "What information do I need to apply?",
          answer:
            "You'll typically need personal information (name, address, birth date), Social Security number, income information, and details about what you want to insure (vehicle info, home details, etc.).",
        },
        {
          question: "Can I change my plan later?",
          answer:
            "Yes, but timing matters. Health insurance has open enrollment periods, while auto and home insurance can usually be changed anytime. Life changes may qualify you for special enrollment periods.",
        },
        {
          question: "What happens after I submit my application?",
          answer:
            "After submission, we'll review your application and connect you with licensed agents who will provide personalized quotes. You'll receive options within 24-48 hours and can choose the best plan for you.",
        },
      ],
    },
    {
      title: "Claims & Support",
      questions: [
        {
          question: "How do I file a claim?",
          answer:
            "Contact your insurance company directly using the phone number on your insurance card or policy documents. Many insurers also offer online claim filing and mobile apps for convenience.",
        },
        {
          question: "How long do claims take to process?",
          answer:
            "Simple claims may be processed in a few days, while complex claims can take several weeks. Your insurance company will keep you updated on the status throughout the process.",
        },
        {
          question: "What if my claim is denied?",
          answer:
            "If your claim is denied, you have the right to appeal the decision. Review the denial letter carefully, gather supporting documentation, and contact your insurance company to start the appeals process.",
        },
        {
          question: "Can you help me with claims issues?",
          answer:
            "While we help you find and enroll in insurance, claims are handled directly by your insurance company. However, we can provide guidance on who to contact and what steps to take.",
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
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            Find answers to common questions about insurance coverage, pricing,
            enrollment, and more. Can't find what you're looking for? Give us a
            call.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-question-circle mr-2"></i>
            Get Your Questions Answered
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-folder text-red-600 text-sm"></i>
                </div>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqKey = `${categoryIndex}-${questionIndex}`;
                  return (
                    <div
                      key={questionIndex}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <button
                        onClick={() => toggleFaq(faqKey)}
                        className="w-full px-4 md:px-6 py-4 text-left font-medium text-gray-800 hover:bg-gray-50 flex justify-between items-center text-sm md:text-base rounded-lg transition-colors"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <i
                          className={`fas fa-chevron-down transition-transform flex-shrink-0 ${
                            openFaq[faqKey] ? "rotate-180" : ""
                          }`}
                        ></i>
                      </button>
                      {openFaq[faqKey] && (
                        <div className="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base leading-relaxed">
                          <div className="border-t border-gray-100 pt-4">
                            {faq.answer}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <i className="fas fa-headset text-yellow-600 text-xl"></i>
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Our licensed insurance agents are here to help you understand your
              options and find the right coverage for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-red-600 font-medium">
                <i className="fas fa-phone mr-2"></i>
                <span>305-404-4460</span>
              </div>
              <div className="hidden sm:block text-gray-400">|</div>
              <div className="text-gray-600 text-sm">
                Monday - Friday, 8 AM - 8 PM EST
              </div>
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
            Now that you have answers to your questions, let's find you the
            perfect insurance coverage.
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