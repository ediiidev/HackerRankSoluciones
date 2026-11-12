import React, { useState } from "react";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<submittedData | null>(
    null,
  );
  const [error, setError] = useState("");
  interface submittedData {
    name: string;
    email: string;
    message: string;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //I remember that this line prevents the default form submission behavior, which is to reload the page.
    //TODO: add logic to validate inputs and display submitted data
    // HINT: You can use the setError function

    // HINT: You can use the setSubmittedData function as below
    // setSubmittedData({ name, email, message });
    if (!name || !email || !message) {
      setError("All fields are required.");
      setSubmittedData(null);
      return;
    }
    setError("");
    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] px-4 py-12 bg-white">
      <div className="w-full max-w-lg p-8 bg-zinc-50 border border-zinc-200 rounded-3xl shadow-lg">
        {/* Encabezados vistosos y centrados */}
        <div className="text-center mb-8">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase bg-[#B9FF66] text-black rounded-full">
            Contact Form Challenge
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Contact Form
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Complete the form below to submit your information.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 text-white placeholder-zinc-400 bg-[#191A23] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition"
          ></input>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 text-white placeholder-zinc-400 bg-[#191A23] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition"
          ></input>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-5 py-4 text-white placeholder-zinc-400 bg-[#191A23] rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#B9FF66] transition"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 mt-2 font-bold tracking-wide text-black uppercase bg-[#B9FF66] rounded-2xl hover:bg-[#a6f549] active:scale-[0.99] transition cursor-pointer shadow-sm"
          >
            Submit
          </button>
        </form>
        {error && (
          <div
            role="alert"
            className="mt-6 p-4 text-center font-semibold text-red-700 bg-red-100 border border-red-300 rounded-2xl"
          >
            {error}
          </div>
        )}
        {submittedData && (
          <div className="mt-6 p-5 text-green-900 bg-green-100 border border-green-300 rounded-2xl space-y-2">
            <h2 className="text-lg font-bold text-green-800 border-b border-green-200 pb-1">
              Submitted Information
            </h2>
            <p className="text-sm">
              <strong className="font-semibold">Name:</strong>
              {submittedData.name}
            </p>
            <p className="text-sm">
              <strong className="font-semibold">Email:</strong>
              {submittedData.email}
            </p>
            <p className="text-sm">
              <strong className="font-semibold">Message:</strong>
              {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
