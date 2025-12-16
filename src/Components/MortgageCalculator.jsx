import React, { useState } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = (e) => {
    e.preventDefault();

    const principal = parseFloat(homePrice) - parseFloat(downPayment);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <section className="bg-white text-slate-900 py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-6 text-3xl font-bold text-center">Mortgage Calculator</h1>
        <p className="mb-8 text-center text-slate-600">
          Quickly estimate your monthly mortgage payments.
        </p>

        <form
          onSubmit={calculateMortgage}
          className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-md"
        >
          <div>
            <label className="block mb-1 font-semibold">Home Price (₦)</label>
            <input
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              placeholder="e.g., 50,000,000"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Down Payment (₦)</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              placeholder="e.g., 5,000,000"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Interest Rate (%)</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="e.g., 7.5"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Loan Term (Years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="e.g., 20"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-6 py-3 text-white font-semibold transition hover:bg-slate-700"
          >
            Calculate
          </button>
        </form>

        {monthlyPayment !== null && (
          <div className="mt-6 rounded-2xl bg-slate-100 p-6 text-center text-lg font-semibold text-slate-900 shadow-md">
            Estimated Monthly Payment: ₦{monthlyPayment.toFixed(2)}
          </div>
        )}
      </div>
    </section>
  );
};

export default MortgageCalculator;
