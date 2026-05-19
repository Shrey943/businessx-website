import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — BusinessX",
  description: "Terms of Service for the BusinessX Android app.",
};

const EFFECTIVE_DATE = "January 1, 2025";
const CONTACT_EMAIL = "businessxteam@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header banner */}
      <div className="bg-[#04111D] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-2">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">
            Effective date: {EFFECTIVE_DATE} &nbsp;·&nbsp; Last updated:{" "}
            {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        {/* Intro */}
        <div className="bg-[#F8F9FF] border border-[#E8EAFF] rounded-xl p-5 mb-10 text-sm text-gray-600 leading-relaxed">
          Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully
          before downloading or using the BusinessX Android application. By
          downloading, installing, or using the App you agree to be bound by
          these Terms. If you do not agree to these Terms, do not use the App.
        </div>

        <Section title="1. Acceptance of Terms">
          <p>
            These Terms constitute a legally binding agreement between you
            (&ldquo;User&rdquo;) and <strong>BusinessX</strong>{" "}
            (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) governing
            your use of the BusinessX mobile application and any related
            services (collectively, the &ldquo;Service&rdquo;). We reserve the
            right to update these Terms at any time. Continued use of the App
            after changes constitutes acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="2. Description of Service">
          <p>
            BusinessX is an Android application that helps small business
            owners track inventory, record sales, manage expenses, and generate
            financial reports. The App stores data locally on your device and
            optionally backs it up to your Google Drive account.
          </p>
          <p>
            We reserve the right to modify, suspend, or discontinue any feature
            or the Service at any time, with or without notice.
          </p>
        </Section>

        <Section title="3. Eligibility">
          <p>
            You must be at least 13 years of age to use the App. By using the
            App, you represent and warrant that you meet this requirement and
            that you have the authority to enter into these Terms.
          </p>
        </Section>

        <Section title="4. License Grant">
          <p>
            Subject to your compliance with these Terms, we grant you a
            personal, non-exclusive, non-transferable, revocable, limited
            license to download and use the App on Android devices you own or
            control, solely for your personal and business purposes.
          </p>
          <p>
            You may not: (a) copy, modify, or distribute the App; (b)
            reverse-engineer, decompile, or disassemble the App; (c) sublicense
            or transfer your license to any other person; (d) use the App for
            any unlawful purpose.
          </p>
        </Section>

        <Section title="5. Subscription Plans & Payments">
          <p>
            BusinessX offers three subscription tiers: <strong>Silver</strong>{" "}
            (free), <strong>Gold</strong>, and <strong>Diamond</strong>. Paid
            plans unlock additional features as described in the App and on our
            website.
          </p>
          <p>
            <strong>Billing:</strong> Subscriptions are billed through the
            Google Play Store on the billing cycle you select (monthly or
            annual). All payments are processed and managed by Google. We do
            not store or have access to your payment information.
          </p>
          <p>
            <strong>Auto-renewal:</strong> Paid subscriptions auto-renew at the
            end of each billing period unless cancelled before the renewal date
            through your Google Play account.
          </p>
          <p>
            <strong>Price changes:</strong> We may change subscription prices
            at any time. We will provide reasonable advance notice of any price
            changes.
          </p>
        </Section>

        <Section title="6. Refund Policy">
          <p>
            Refunds for in-app purchases and subscriptions are handled by
            Google Play Store policies. You may request a refund through the
            Google Play Store within the applicable refund window. We do not
            independently process refunds outside of Google Play&apos;s process.
          </p>
          <p>
            If you experience a technical issue that prevents you from using a
            paid feature, please contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#0081B3] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we will work with you to resolve it.
          </p>
        </Section>

        <Section title="7. User Responsibilities">
          <p>You agree that you will not use the App to:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Violate any applicable law or regulation</li>
            <li>
              Enter or store fraudulent, misleading, or illegal business
              information
            </li>
            <li>
              Attempt to gain unauthorized access to any system or network
            </li>
            <li>
              Interfere with or disrupt the integrity or performance of the App
            </li>
            <li>
              Use the App in any way that could harm us, other users, or third
              parties
            </li>
          </ul>
          <p>
            You are solely responsible for the accuracy and legality of the
            business data you enter into the App.
          </p>
        </Section>

        <Section title="8. Intellectual Property">
          <p>
            The App and all content, features, and functionality (including but
            not limited to design, text, graphics, logos, icons, and code) are
            and remain the exclusive property of BusinessX and are protected by
            applicable intellectual property laws.
          </p>
          <p>
            You retain all rights to the business data you enter into the App.
            By using the backup feature, you grant us no rights to your data —
            it is stored in your own Google Drive.
          </p>
        </Section>

        <Section title="9. Data & Privacy">
          <p>
            Your use of the App is also governed by our{" "}
            <Link href="/privacy" className="text-[#0081B3] hover:underline">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference. By using the
            App, you consent to the data practices described in the Privacy
            Policy.
          </p>
        </Section>

        <Section title="10. Disclaimer of Warranties">
          <p>
            THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
            AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT.
          </p>
          <p>
            We do not warrant that the App will be uninterrupted, error-free,
            or free of viruses or other harmful components. BusinessX is a tool
            to help you organize your business data — it is not a substitute for
            professional accounting, legal, or financial advice.
          </p>
        </Section>

        <Section title="11. Limitation of Liability">
          <p>
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BUSINESSX AND
            ITS OWNERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
            INCLUDING LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE
            LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO USE THE APP.
          </p>
          <p>
            IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU
            PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
          </p>
        </Section>

        <Section title="12. Termination">
          <p>
            We may terminate or suspend your access to the App at any time,
            with or without cause or notice, including if we believe you have
            violated these Terms.
          </p>
          <p>
            You may stop using the App at any time. Uninstalling the App
            removes all locally stored data. If you wish to delete any data
            associated with your account, please visit{" "}
            <Link href="/delete" className="text-[#0081B3] hover:underline">
              our data deletion page
            </Link>
            .
          </p>
        </Section>

        <Section title="13. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of India, without regard to conflict of law provisions.
            Any disputes arising under these Terms shall be subject to the
            exclusive jurisdiction of the courts in India.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p>
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mt-2">
            <p className="font-semibold text-[#1A1A2E]">BusinessX Support</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#0081B3] hover:underline text-sm mt-1 block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Section>

        <div className="border-t border-gray-100 pt-8 flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="text-[#0081B3] hover:underline text-sm font-medium"
          >
            Privacy Policy →
          </Link>
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
