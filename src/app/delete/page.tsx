import type { Metadata } from "next";
import ContactForm from "@/components/Form";

export const metadata: Metadata = {
  title: "Delete My Data — BusinessX",
  description: "Request deletion of your BusinessX account data.",
};

export default function Delete() {
  return (
    <div className="pt-16 min-h-screen bg-[#F8F9FF]">
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-[#1A1A2E] mb-2">
            Delete My Data
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Enter your registered email address and we will process your data
            deletion request within 30 days.
          </p>
        </div>
        <ContactForm />
        <p className="text-center text-xs text-gray-400 mt-6">
          For questions, contact us at{" "}
          <a
            href="mailto:businessxteam@gmail.com"
            className="text-[#5C6BC0] hover:underline"
          >
            businessxteam@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
