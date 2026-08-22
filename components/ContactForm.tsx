"use client";

import { FormEvent, useState } from "react";

const services = [
  "Social Media Strategy & Management",
  "Content Creation & Design",
  "Paid Advertising",
  "Marketing Analytics & Reporting",
  "Digital Marketing",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8 lg:p-10">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F68048]">
          Project Inquiry
        </p>

        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0D1A63] sm:text-3xl">
          Tell me about your project
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Share a few details about what you need. This will help me
          understand your goals and the type of support you are looking for.
        </p>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
          <p className="text-lg font-bold text-green-800">
            Thank you for your inquiry.
          </p>

          <p className="mt-2 leading-7 text-green-700">
            Your message has been captured in this demo form. The form will be
            connected to the Takwah Digital backend and notification system in
            the CMS/backend phase.
          </p>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-5 font-semibold text-[#2845D6] hover:text-[#1A2CA3]"
          >
            Send another inquiry →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Name <span className="text-[#F68048]">*</span>
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Email <span className="text-[#F68048]">*</span>
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Company / Business
            </label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Company or business name"
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            />
          </div>

          {/* Service */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Service Needed <span className="text-[#F68048]">*</span>
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            >
              <option value="" disabled>
                Select a service
              </option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Estimated Budget
            </label>

            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            >
              <option value="" disabled>
                Select a budget range
              </option>
              <option value="under-250">Under $250</option>
              <option value="250-500">$250 – $500</option>
              <option value="500-1000">$500 – $1,000</option>
              <option value="1000-2500">$1,000 – $2,500</option>
              <option value="2500-plus">$2,500+</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#0D1A63]"
            >
              Project Details <span className="text-[#F68048]">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your goals, audience, project requirements, timeline, or anything else that would be useful."
              className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2845D6] focus:ring-2 focus:ring-[#2845D6]/10"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#F68048] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#e66f3b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F68048] focus:ring-offset-2"
          >
            Send Project Inquiry
          </button>

          <p className="text-center text-xs leading-5 text-slate-500">
            This form is currently in preview mode. Secure submission and
            email/database notifications will be connected during the backend
            phase.
          </p>
        </form>
      )}
    </div>
  );
}