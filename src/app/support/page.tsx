import type { Metadata } from "next";
import { LifeBuoy, Clock, HelpCircle, Bug } from "lucide-react";
import SupportRequestForm from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "Support — BusinessX",
  description: "Get help with your BusinessX account, report a bug, or ask us a question.",
};

const INFO_CARDS = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "1–2 business day replies",
    desc: "We read every message and reply to the email address you provide.",
  },
  {
    icon: <Bug className="w-5 h-5" />,
    title: "Reporting a bug?",
    desc: "Include what you were doing, what you expected, and what happened instead.",
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    title: "Account or data questions",
    desc: "For deleting your account data, use our dedicated deletion request form instead.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#F0F9FF] pt-16">
      {/* Page header */}
      <div className="bg-[#04111D] border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-[#0081B3]/20 border border-[#0081B3]/30 flex items-center justify-center">
              <LifeBuoy className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <span className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest">
              Support
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight">
            Contact Support
          </h1>
          <p className="text-slate-400 max-w-xl">
            Have a question, found a bug, or need help with your account?
            Send us a message and we&apos;ll get back to you.
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
              Send a Message
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              All fields marked <span className="text-red-500 font-semibold">*</span> are required.
            </p>
            <SupportRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
