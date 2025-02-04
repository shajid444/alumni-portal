import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    amount: '',
    name: '',
    email: '',
    message: '',
    paymentMethod: 'bikash',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your Payment!');
    setFormData({
      amount: '',
      name: '',
      email: '',
      message: '',
      paymentMethod: 'bikash',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 flex flex-col items-center justify-center">
      <header className="text-white text-center mb-8">
        <h1 className="text-4xl font-bold">Payment</h1>
      </header>

      <section className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
        <div className="flex justify-center mb-6">
          <img src="https://cdn.vectorstock.com/i/1000v/37/81/payment-icon-vector-5783781.jpg" alt="Payment logo" className="w-20 h-auto animate-fade-in" />
        </div>

        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-red-500">Equipment Payments</h2>
          <p className="text-gray-600"></p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amount" className="block text-gray-700 font-semibold">Payment Amount (BDT)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              min="1"
              step="1"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">Short Message (optional)</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Add a personal message to inspire others"
            />
          </div>

          <div className="flex justify-center items-center space-x-4">
            <img src="data:image/png;base64,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" alt="Bikash Logo" className="w-12 h-auto" />
            <img src="data:image/png;base64,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" alt="Nagad Logo" className="w-12 h-auto" />
            <img src="data:image/png;base64,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" alt="Rocket Logo" className="w-12 h-auto" />
            <img src="data:image/png;base64,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" alt="Upay Logo" className="w-12 h-auto" />
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block text-gray-700 font-semibold">Select Payment Method</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            >
              <option value="bikash">Bikash</option>
              <option value="nagad">Nagad</option>
              <option value="rocket">Rocket</option>
              <option value="upay">Upay</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-pink-500 transition duration-300"
          >
            Pay Now
          </button>
        </form>
      </section>

      <footer className="text-center text-white mt-8">
        <p>&copy; 2024 FIRE SAFETY EQUIPMENT</p>
      </footer>
    </div>
  );
};

export default PaymentForm;
