import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — BusinessX",
  description: "Privacy Policy for the BusinessX Android app. Learn how we collect, use, and protect your data.",
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

export default function PrivacyPage() {
  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header banner */}
      <div className="bg-[#04111D] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-[#38BDF8] text-sm font-semibold uppercase tracking-widest mb-2">
            Legal
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Privacy Policy
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
          This Privacy Policy describes how <strong>BusinessX</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects,
          uses, and protects information when you use the BusinessX Android
          application (&ldquo;the App&rdquo;). By downloading or using the App
          you agree to the practices described in this policy. If you do not
          agree, please do not use the App.
        </div>

        <Section title="1. Information We Collect">
          <p>
            <strong>a) Information you provide directly:</strong> When you use
            features that require Google account authentication (such as Google
            Drive backup), we may access your Google account email address and
            basic profile information solely to enable that feature.
          </p>
          <p>
            <strong>b) Business data you enter:</strong> All inventory items,
            sales records, expense entries, and other business data you create
            within the App are stored locally on your device using SQLite
            database storage. This data never leaves your device unless you
            explicitly use the Google Drive backup feature.
          </p>
          <p>
            <strong>c) Usage and diagnostic data:</strong> We may collect
            anonymous usage statistics (such as feature usage frequency and
            crash reports) to improve app performance and stability. This data
            cannot be used to identify individual users.
          </p>
          <p>
            <strong>d) Device information:</strong> We may collect basic device
            information (operating system version, device model) to help us
            diagnose compatibility issues and improve the App.
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Operate and maintain the App and its features</li>
            <li>
              Enable Google Drive backup and restore functionality (only when
              you activate it)
            </li>
            <li>
              Improve app performance, fix bugs, and develop new features
            </li>
            <li>Respond to support requests and user inquiries</li>
            <li>
              Comply with legal obligations and enforce our Terms of Service
            </li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal data
            or business data with third parties for marketing or advertising
            purposes.
          </p>
        </Section>

        <Section title="3. Data Storage">
          <p>
            <strong>Local storage:</strong> Your business data (inventory,
            sales, reports) is stored exclusively on your device using SQLite.
            It is not transmitted to our servers during normal app use.
          </p>
          <p>
            <strong>Google Drive backup (optional):</strong> If you enable the
            Google Drive Backup feature, your data will be uploaded to your
            personal Google Drive account under a folder named
            &ldquo;BusinessX Backup&rdquo;. This data is stored under your
            Google account and governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0081B3] hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            . We do not retain copies of your backed-up data on our servers.
          </p>
        </Section>

        <Section title="4. Third-Party Services">
          <p>
            The App integrates with the following third-party services. Each
            has its own privacy policy:
          </p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>
              <strong>Google Play Services</strong> — For app distribution and
              updates.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0081B3] hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Drive API</strong> — Used only when you enable the
              backup feature.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0081B3] hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google AdMob</strong> — Used to display advertisements
              within the App (on the free plan). AdMob may use device
              identifiers and usage data to serve relevant ads in accordance
              with{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0081B3] hover:underline"
              >
                Google&apos;s Advertising Policy
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="5. Advertising">
          <p>
            The free (Silver) tier of BusinessX displays advertisements
            provided by Google AdMob. These ads may be personalized based on
            your interests and device data as managed by Google. You can opt
            out of personalized ads in your device settings under{" "}
            <em>Google &gt; Ads &gt; Opt out of Ads Personalization</em>.
          </p>
          <p>
            Paid subscription plans (Gold and Diamond) do not display
            advertisements.
          </p>
        </Section>

        <Section title="6. Data Security">
          <p>
            We take reasonable technical and organizational measures to protect
            your data. Since your business data is stored locally on your
            device, the security of your device (screen lock, encryption)
            directly affects the security of your data.
          </p>
          <p>
            For data backed up to Google Drive, security is managed by Google&apos;s
            infrastructure, which includes encryption in transit and at rest.
          </p>
          <p>
            No method of electronic storage or transmission is 100% secure. We
            cannot guarantee absolute security but are committed to using
            industry-standard practices.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            BusinessX is not directed at children under 13 years of age. We do
            not knowingly collect personal information from children under 13.
            If you believe a child under 13 has provided personal information
            through the App, please contact us at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#0081B3] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>{" "}
            and we will delete that information promptly.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>
              Withdraw consent for data processing (where consent is the legal
              basis)
            </li>
          </ul>
          <p>
            To exercise any of these rights, or to delete your account data,
            please visit{" "}
            <Link href="/delete" className="text-[#0081B3] hover:underline">
              our data deletion page
            </Link>{" "}
            or contact us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-[#0081B3] hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="9. Data Retention">
          <p>
            Business data stored locally on your device is retained until you
            delete it within the App or uninstall the App. If you use Google
            Drive backup, backed-up files remain in your Google Drive until you
            delete them — we have no ability to delete data stored in your
            personal Google Drive account.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by updating the effective date above
            and, where required, by providing notice within the App. We
            encourage you to review this policy periodically.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or your data, please contact us:
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
            href="/terms"
            className="text-[#0081B3] hover:underline text-sm font-medium"
          >
            Terms of Service →
          </Link>
          <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
