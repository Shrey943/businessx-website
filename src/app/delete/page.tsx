import type { Metadata } from "next";
import { ShieldCheck, Clock, Download, Mail } from "lucide-react";
import DeleteRequestForm from "@/components/DeleteRequestForm";

export const metadata: Metadata = {
  title: "Delete My Data — BusinessX",
  description:
    "Submit a request to permanently delete your BusinessX account data.",
};

const WHAT_GETS_DELETED = [
  "All inventory items and stock records",
  "Complete sales history and transactions",
  "Monthly reports and expense logs",
  "Google Drive backup files (you must delete these manually)",
  "Your account profile and preferences",
];

const INFO_CARDS = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "30-day processing",
    desc: "We process all deletion requests within 30 days of receipt.",
  },
  {
    icon: <Download className="w-5 h-5" />,
    title: "Export first",
    desc: "Go to the app → Profile → Export data to save a CSV before deleting.",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Confirmation email",
    desc: "We'll send a confirmation to your email once deletion is complete.",
  },
];

export default function DeletePage() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] pt-16">
      {/* Page header */}
      <div className="bg-[#04111D] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#0081B3]/20 border border-[#0081B3]/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
              Privacy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
            Delete My Data
          </h1>
          <p className="text-slate-400 max-w-xl">
            You have the right to request permanent deletion of all data
            associated with your BusinessX account. Fill in the form and
            we&apos;ll handle the rest.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">

          {/* Left — info column */}
          <div className="space-y-8">
            {/* Info cards */}
            <div className="space-y-4">
              {INFO_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="flex items-start gap-4 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FB] flex items-center justify-center text-[#0081B3] flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <div className="font-bold text-[#04111D] text-sm mb-0.5">
                      {card.title}
                    </div>
                    <div className="text-slate-500 text-sm leading-relaxed">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What gets deleted */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <h2 className="font-bold text-[#04111D] text-sm uppercase tracking-wider mb-4">
                What gets deleted
              </h2>
              <ul className="space-y-2.5">
                {WHAT_GETS_DELETED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1 w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-[9px] font-black">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact fallback */}
            <p className="text-sm text-slate-500 leading-relaxed">
              Prefer to contact us directly?{" "}
              <a
                href="mailto:businessxteam@gmail.com"
                className="text-[#0081B3] hover:underline font-medium"
              >
                businessxteam@gmail.com
              </a>
            </p>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-7 lg:sticky lg:top-24">
            <h2 className="text-lg font-black text-[#04111D] mb-1">
              Submit a Request
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              All fields marked <span className="text-red-500 font-semibold">*</span> are required.
            </p>
            <DeleteRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
