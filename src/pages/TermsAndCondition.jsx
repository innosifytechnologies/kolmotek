import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-20 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>
      <p className="text-gray-700 text-lg text-center mb-8">
        Last Updated: February 2025
      </p>
      
      <div className="bg-white shadow-lg rounded-2xl p-6 lg:p-10">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to Kolmotek Instruments Pvt Ltd. By accessing or using our website and services,
          you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Our Services</h2>
        <p className="text-gray-600 leading-relaxed">
          You agree to use our services only for lawful purposes and in accordance with these Terms.
          Any unauthorized use may result in termination of access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Orders and Payments</h2>
        <ul className="list-disc list-inside text-gray-600 leading-relaxed">
          <li>All product sales are final unless otherwise stated.</li>
          <li>Prices are subject to change without notice.</li>
          <li>We reserve the right to refuse or cancel orders at our discretion.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        <p className="text-gray-600 leading-relaxed">
          All content, trademarks, and intellectual property displayed on our website
          are owned by Kolmotek Instruments Pvt Ltd. Unauthorized use is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
        <p className="text-gray-600 leading-relaxed">
          We are not liable for any direct, indirect, incidental, or consequential damages resulting from
          the use of our products or services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Governing Law</h2>
        <p className="text-gray-600 leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of India.
          Any disputes arising shall be subject to the jurisdiction of courts in New Delhi.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to modify these Terms at any time. Updated terms will be posted on our website.
          Continued use of our services implies acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
        <p className="text-gray-600 leading-relaxed">
          If you have any questions, please contact us at:
        </p>
        <p className="text-gray-700 font-semibold">support@kolmotek.com</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
