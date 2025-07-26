"use client";
import React from "react";

function MainComponent() {
  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const licenseData = [
    {
      state: "Florida",
      licenseNumber: "L012345678",
      type: "Insurance Agency License",
      issueDate: "January 15, 2020",
      expirationDate: "January 15, 2026",
      status: "Active",
    },
    {
      state: "Florida",
      licenseNumber: "H987654321",
      type: "Health Insurance License",
      issueDate: "March 10, 2020",
      expirationDate: "March 10, 2026",
      status: "Active",
    },
    {
      state: "Florida",
      licenseNumber: "A456789012",
      type: "Auto Insurance License",
      issueDate: "June 5, 2020",
      expirationDate: "June 5, 2026",
      status: "Active",
    },
  ];

  const agentCredentials = [
    {
      name: "Michael Rodriguez",
      licenseNumber: "A220001234",
      specialties: ["Health Insurance", "Life Insurance"],
      yearsExperience: 8,
    },
    {
      name: "Sarah Johnson",
      licenseNumber: "A220005678",
      specialties: ["Auto Insurance", "Home Insurance"],
      yearsExperience: 6,
    },
    {
      name: "David Chen",
      licenseNumber: "A220009012",
      specialties: ["Health Insurance", "Medicare"],
      yearsExperience: 12,
    },
  ];

  const regulatoryBodies = [
    {
      name: "Florida Office of Insurance Regulation",
      website: "www.floir.com",
      phone: "(850) 413-3140",
      address: "200 E. Gaines Street, Tallahassee, FL 32399",
    },
    {
      name: "Florida Department of Financial Services",
      website: "www.myfloridacfo.com",
      phone: "(877) 693-5236",
      address: "200 E. Gaines Street, Tallahassee, FL 32399",
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
            Licensing & Compliance
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto">
            HealthEnroll operates as a fully licensed insurance agency in
            compliance with all state and federal regulations. View our
            licensing information and regulatory compliance details below.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-certificate mr-2"></i>
            Fully Licensed & Compliant
          </div>
        </div>
      </section>

      {/* Company License Information */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Company Licenses
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our active insurance licenses and regulatory compliance status.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
            {licenseData.map((license, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-certificate text-red-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {license.type}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        State of {license.state}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      <i className="fas fa-check-circle mr-1"></i>
                      {license.status}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      License Number:
                    </span>
                    <div className="text-gray-600 font-mono">
                      {license.licenseNumber}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Issue Date:
                    </span>
                    <div className="text-gray-600">{license.issueDate}</div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Expiration Date:
                    </span>
                    <div className="text-gray-600">
                      {license.expirationDate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensed Agents */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Licensed Insurance Agents
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Our team of experienced, licensed insurance professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentCredentials.map((agent, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <i className="fas fa-user-tie text-yellow-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {agent.name}
                    </h3>
                    <p className="text-gray-600 text-sm">Licensed Agent</p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">
                      License Number:
                    </span>
                    <div className="text-gray-600 font-mono">
                      {agent.licenseNumber}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Experience:
                    </span>
                    <div className="text-gray-600">
                      {agent.yearsExperience} years
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">
                      Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {agent.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Bodies */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Regulatory Oversight
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              We are regulated and overseen by the following state agencies.
            </p>
          </div>

          <div className="space-y-6">
            {regulatoryBodies.map((body, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-university text-red-600"></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {body.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="flex items-center mb-2">
                          <i className="fas fa-globe text-gray-400 mr-2"></i>
                          <span className="text-gray-600">{body.website}</span>
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-phone text-gray-400 mr-2"></i>
                          <span className="text-gray-600">{body.phone}</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-start">
                          <i className="fas fa-map-marker-alt text-gray-400 mr-2 mt-1"></i>
                          <span className="text-gray-600">{body.address}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 rounded-lg p-6 md:p-8 border border-yellow-200">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <i className="fas fa-shield-alt text-yellow-600"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Compliance Statement
                </h3>
                <div className="space-y-4 text-gray-700 text-sm md:text-base">
                  <p>
                    HealthEnroll is a licensed insurance agency operating in
                    full compliance with all applicable state and federal
                    insurance regulations. We maintain all required licenses,
                    bonds, and certifications to legally sell insurance products
                    in the states where we operate.
                  </p>
                  <p>
                    Our agents are individually licensed and undergo continuous
                    education to maintain their credentials and stay current
                    with insurance regulations and best practices.
                  </p>
                  <p>
                    We are committed to ethical business practices and
                    transparent dealings with all clients. Any complaints or
                    concerns can be directed to the appropriate state regulatory
                    body listed above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-red-700 py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Questions About Our Licensing?
          </h2>
          <p className="text-base md:text-lg text-red-100 mb-6 md:mb-8">
            Contact us if you need verification of our licenses or have
            questions about our regulatory compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-yellow-400 font-medium text-lg">
              <i className="fas fa-phone mr-2"></i>
              <span>305-404-4460</span>
            </div>
            <div className="hidden sm:block text-red-300">|</div>
            <div className="text-red-100">Monday - Friday, 8 AM - 8 PM EST</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;