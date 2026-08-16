import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/legal/PageBanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for the BusinessX app (Android and iOS). Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: "/privacy",
    title: "Privacy Policy — BusinessX",
    description: "Privacy Policy for the BusinessX app (Android and iOS). Learn how we collect, use, and protect your data.",
  },
};

const EFFECTIVE_DATE = "January 1, 2025";
const LAST_UPDATED_DATE = "August 17, 2026";
const CONTACT_EMAIL = "businessxteam@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-heading text-xl font-bold text-ink mb-3">{title}</h2>
      <div className="text-muted-1 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        meta={`Effective date: ${EFFECTIVE_DATE}  ·  Last updated: ${LAST_UPDATED_DATE}`}
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        {/* Intro */}
        <div className="rounded-2xl p-5 mb-10 text-sm text-muted-1 leading-relaxed" style={{ background: "#E9F5FB", border: "1px solid rgba(0,129,179,.14)" }}>
          This Privacy Policy describes how <strong>BusinessX</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects,
          uses, and protects information when you use the BusinessX mobile
          application, available on Google Play and the Apple App Store
          (&ldquo;the App&rdquo;). By downloading or using the App you agree
          to the practices described in this policy. If you do not agree,
          please do not use the App.
        </div>

        <Section title="1. Information We Collect">
          <p>
            <strong>a) Account information:</strong> When you sign in — using
            Google Sign-In, Sign in with Apple (iOS), or email and password —
            we collect your email address and, where provided, your display
            name (including the shop name you enter at registration) via
            Firebase Authentication. Signing in with Google also requests
            access to a private Google Drive storage area at sign-in time, so
            the backup feature (Section 3) can be enabled later without a
            second consent step; this access is only used if you activate
            Google Drive backup.
          </p>
          <p>
            <strong>b) Business data you enter:</strong> All inventory items,
            sales records, expense entries, and other business data you create
            within the App are stored locally on your device using SQLite
            database storage. This data never leaves your device unless you
            explicitly use the Google Drive or iCloud backup feature.
          </p>
          <p>
            <strong>c) Account and notification data:</strong> To keep your
            subscription status in sync across your devices and to deliver
            push notifications (such as app updates or announcements), the App
            automatically syncs a limited set of account data — your user ID,
            subscription/plan status, and a device push-notification token —
            to our Firebase backend whenever you are signed in. This happens
            independently of the backup feature described in Section 3.
          </p>
          <p>
            <strong>d) Usage and diagnostic data:</strong> We collect anonymous
            usage statistics and crash/error reports via Firebase Analytics and
            Firebase Crashlytics to improve app performance and stability. This
            data cannot be used to identify individual users.
          </p>
          <p>
            <strong>e) Device information:</strong> We may collect basic device
            information (operating system version, device model) to help us
            diagnose compatibility issues and improve the App.
          </p>
          <p>
            <strong>f) Camera and photos:</strong> If you use the App&apos;s
            camera or photo-library option to photograph stock items, the
            resulting image is stored locally on your device. It is not
            transmitted anywhere unless you enable Google Drive or iCloud
            backup (Section 3).
          </p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-1.5 ml-2">
            <li>Operate and maintain the App and its features</li>
            <li>
              Enable Google Drive or iCloud backup and restore functionality
              (only when you activate it)
            </li>
            <li>
              Improve app performance, fix bugs, and develop new features
            </li>
            <li>
              Send push notifications about app updates, announcements, or
              your account (only if you grant notification permission)
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
            It is not transmitted to our servers during normal app use, other
            than the limited account and sync data described in Section 1(c).
          </p>
          <p>
            <strong>Google Drive backup (optional, Android and iOS):</strong>{" "}
            If you enable the Google Drive Backup feature, your data is
            uploaded to a hidden, app-private storage area within your Google
            Drive account (Google&apos;s &ldquo;Application Data&rdquo;
            folder). This area is not visible in your regular Drive file list
            and cannot be browsed or managed from the Drive app or website —
            only from within BusinessX, or by revoking BusinessX&apos;s access
            from your Google Account&apos;s third-party access settings. This
            data is stored under your Google account and governed by{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-hover hover:underline"
            >
              Google&apos;s Privacy Policy
            </a>
            . We do not retain copies of your backed-up data on our servers.
          </p>
          <p>
            <strong>iCloud backup (optional, iOS only):</strong> If you enable
            iCloud backup on iOS instead of Google Drive, your data is
            uploaded via Apple&apos;s CloudKit to your personal iCloud
            account. This data is stored under your Apple ID and governed by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-hover hover:underline"
            >
              Apple&apos;s Privacy Policy
            </a>
            . We do not retain copies of this data on our servers.
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
                className="text-brand hover:text-brand-hover hover:underline"
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
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google AdMob</strong> — Used to display advertisements
              within the Android App (on the free plan). AdMob may use device
              identifiers and usage data to serve relevant ads in accordance
              with{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google&apos;s Advertising Policy
              </a>
              .
            </li>
            <li>
              <strong>Firebase Authentication</strong> — Manages sign-in and
              account security.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Cloud Firestore</strong> — Stores your account ID,
              subscription/plan status, and push-notification token so your
              entitlement stays in sync across your devices.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase Cloud Messaging</strong> — Delivers push
              notifications to your device.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase Crashlytics</strong> — Collects crash and error
              reports to help us fix bugs.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Firebase Analytics</strong> — Collects aggregate,
              anonymized app-usage statistics.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Sign in with Apple (iOS only)</strong> — An alternative
              sign-in method offered on iOS.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Apple Privacy Policy
              </a>
            </li>
            <li>
              <strong>Apple iCloud / CloudKit (iOS only)</strong> — Used only
              when you enable iCloud backup.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Apple Privacy Policy
              </a>
            </li>
            <li>
              <strong>Apple App Store (iOS only)</strong> — For app
              distribution, updates, and billing.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-hover hover:underline"
              >
                Apple Privacy Policy
              </a>
            </li>
          </ul>
        </Section>

        <Section title="5. Advertising">
          <p>
            The free (Silver) tier of the Android App displays advertisements
            provided by Google AdMob. These ads may be personalized based on
            your interests and device data as managed by Google. You can opt
            out of personalized ads in your device settings under{" "}
            <em>Google &gt; Ads &gt; Opt out of Ads Personalization</em>.
          </p>
          <p>
            Paid subscription plans (Gold and Diamond) do not display
            advertisements. The iOS App does not currently display
            advertisements on any plan.
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
            For data backed up to iCloud, security is similarly managed by
            Apple&apos;s infrastructure, which also includes encryption in
            transit and at rest.
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
              className="text-brand hover:text-brand-hover hover:underline"
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
            <Link href="/delete" className="text-brand hover:text-brand-hover hover:underline">
              our data deletion page
            </Link>{" "}
            or contact us directly at{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand hover:text-brand-hover hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="9. Data Retention">
          <p>
            Business data stored locally on your device is retained until you
            delete it within the App or uninstall the App.
          </p>
          <p>
            If you use Google Drive or iCloud backup, backed-up files remain in
            your account until deleted. When you delete your BusinessX account
            from within the App, the App automatically deletes your Google
            Drive or iCloud backup files as part of that process. If you stop
            using the App without deleting your account (for example, you
            simply uninstall it), backup files remain in your Google Drive or
            iCloud account until removed. Google Drive backups are stored in a
            hidden, app-private area that is not visible in the regular Drive
            file list (see Section 3), so removing them requires either
            reinstalling the App and using in-app account deletion, or
            revoking BusinessX&apos;s access from your Google Account&apos;s
            third-party access settings; iCloud backups can be managed from
            your device&apos;s iCloud storage settings. We have no server-side
            access to delete data from your personal cloud storage outside of
            these paths.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by updating the effective date above
            and, where required, by providing notice within the App. We
            encourage you to review this policy periodically.
          </p>
          <p>
            For major update events, we may also share update information over
            registered mail to users who have provided a mailing address or are
            registered with us. This is done solely to keep you informed of
            important changes that may affect your rights or how your data is
            handled.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or your data, please contact us:
          </p>
          <div className="rounded-2xl p-4 mt-2" style={{ background: "#F1F6F9" }}>
            <p className="font-heading font-semibold text-ink">BusinessX Support</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-brand hover:text-brand-hover hover:underline text-sm mt-1 block"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </Section>

        <div className="border-t border-ink/10 pt-8 flex flex-wrap gap-4">
          <Link
            href="/terms"
            className="text-brand hover:text-brand-hover hover:underline text-sm font-medium"
          >
            Terms of Service →
          </Link>
          <Link href="/" className="text-muted-3 hover:text-muted-1 text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
