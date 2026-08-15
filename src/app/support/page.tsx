import type { Metadata } from "next";
import { LifeBuoy, Clock, HelpCircle, Bug } from "lucide-react";
import SupportRequestForm from "@/components/SupportRequestForm";
import PageBanner from "@/components/legal/PageBanner";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with your BusinessX account, report a bug, or ask us a question.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    url: "/support",
    title: "Support — BusinessX",
    description: "Get help with your BusinessX account, report a bug, or ask us a question.",
  },
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
    <div className="min-h-screen bg-bg">
      <PageBanner
        eyebrow="Support"
        title="Contact Support"
        description="Have a question, found a bug, or need help with your account? Send us a message and we'll get back to you."
        icon={LifeBuoy}
        wide
      />

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
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-soft"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-brand flex-shrink-0" style={{ background: "#E9F5FB" }}>
                    {card.icon}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-ink text-sm mb-0.5">
                      {card.title}
                    </div>
                    <div className="text-muted-1 text-sm leading-relaxed">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact fallback */}
            <p className="text-sm text-muted-1 leading-relaxed">
              Prefer to contact us directly?{" "}
              <a
                href="mailto:businessxteam@gmail.com"
                className="text-brand hover:text-brand-hover hover:underline font-medium"
              >
                businessxteam@gmail.com
              </a>
            </p>
          </div>

          {/* Right — form card */}
          <div className="bg-white rounded-2xl shadow-soft p-7 lg:sticky lg:top-24">
            <h2 className="font-heading text-lg font-black text-ink mb-1">
              Send a Message
            </h2>
            <p className="text-muted-2 text-sm mb-6">
              All fields marked <span className="text-danger font-semibold">*</span> are required.
            </p>
            <SupportRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
