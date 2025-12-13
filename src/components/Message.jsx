import React, { useState } from "react";
import { toast } from "react-toastify";
import { CheckCircle } from "lucide-react";

const Message = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ad402c38-c62d-4566-ae86-09252c7c5bde");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Message sent successfully!");
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="name" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Contact Number"
          required
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all text-sm"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="How can we help you?"
          required
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all resize-none text-sm"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={result === "Sending...."}
        className="w-full py-3 px-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
      >
        {result === "Sending...." ? "Sending..." : "Send Message"}
      </button>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 mb-2 font-medium uppercase">We respect your privacy</p>
        <div className="flex bg-brand-50/50 p-3 rounded-lg border border-brand-50">
          <div className="grid grid-cols-2 gap-x-8 gap-y-1 w-full">
            {["Encrypted Data", "No Spam Promise"].map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-brand-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-brand-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Message;
