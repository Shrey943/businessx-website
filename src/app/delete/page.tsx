import type { Metadata } from "next";
import { ShieldCheck, Clock, Download, Mail } from "lucide-react";
import DeleteRequestForm from "@/components/DeleteRequestForm";
import PageBanner from "@/components/legal/PageBanner";

export const metadata: Metadata = {
  title: "Delete My Data",
  description:
    "Submit a request to permanently delete your BusinessX account data.",
  alternates: {
    canonical: "/delete",
  },
  openGraph: {
    url: "/delete",
    title: "Delete My Data — BusinessX",
    description: "Submit a request to permanently delete your BusinessX account data.",
  },
};

const WHAT_GETS_DELETED = [
  "All inventory items and stock records",
  "Complete sales history and transactions",
  "Monthly reports and expense logs",
  "Google Drive or iCloud backup files — deleted automatically if you use in-app account deletion; if you're submitting this form instead, you'll need to remove them yourself via your Google Account's third-party access settings or your device's iCloud storage settings, since we can't access your personal cloud storage",
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
    <div className="min-h-screen bg-bg">
      <PageBanner
        eyebrow="Privacy"
        title="Delete My Data"
        description="You have the right to request permanent deletion of all data associated with your BusinessX account. Fill in the form and we'll handle the rest."
        icon={ShieldCheck}
        wide
      />

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-start">
          {/* Left — info column */}
          <div className="space-y-8">
            {/* In-app deletion recommendation */}
            <div
              className="rounded-2xl p-5 text-sm text-muted-1 leading-relaxed"
              style={{ background: "#E9F5FB", border: "1px solid rgba(0,129,179,.14)" }}
            >
              <strong>Prefer instant deletion?</strong> If you still have
              BusinessX installed, go to <strong>Profile → Delete Account</strong>{" "}
              inside the app instead. It deletes everything immediately —
              including your Google Drive or iCloud backup — with no 30-day
              wait. Use this form only if you can&apos;t access the app.
            </div>

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

            {/* What gets deleted */}
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h2 className="font-heading font-bold text-ink text-sm uppercase tracking-wider mb-4">
                What gets deleted
              </h2>
              <ul className="space-y-2.5">
                {WHAT_GETS_DELETED.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-1">
                    <span className="mt-1 w-4 h-4 rounded-full bg-danger-bg text-danger flex items-center justify-center flex-shrink-0 text-[9px] font-black">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
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
              Submit a Request
            </h2>
            <p className="text-muted-2 text-sm mb-6">
              All fields marked <span className="text-danger font-semibold">*</span> are required.
            </p>
            <DeleteRequestForm />
          </div>
        </div>
      </div>
    </div>
  );
}
