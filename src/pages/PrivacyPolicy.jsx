import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      <p className="text-gray-700 text-lg text-center mb-8">
        Last Updated: February 2025
      </p>
      
      <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-10">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          Kolmotek Instruments Pvt Ltd ("Company", "we", "our", or "us") values
          your privacy. This Privacy Policy explains how we collect, use, and
          protect your personal data when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
        <p className="text-gray-600 leading-relaxed">
          We may collect personal information such as your name, email address,
          contact details, and any data related to purchases or inquiries. We
          also collect technical data including IP addresses, browser type, and
          website usage statistics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>To process orders and provide our services</li>
          <li>To improve website functionality and user experience</li>
          <li>To send promotional emails (if opted-in)</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="text-gray-600 leading-relaxed">
          We do not sell your data. However, we may share your information with
          service providers, legal authorities, or for compliance with
          applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
        <p className="text-gray-600 leading-relaxed">
          We implement security measures to protect your personal data. However,
          no system is completely secure, and we encourage users to protect
          their own information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
        <p className="text-gray-600 leading-relaxed">
          You have the right to access, update, or delete your data. If you wish
          to exercise these rights, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions, please reach out to us at:
        </p>
        <p className="text-gray-700 font-semibold">support@kolmotek.com</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
