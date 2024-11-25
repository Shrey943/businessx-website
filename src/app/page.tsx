import ContactForm from "@/components/Form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <ContactForm />
      <div className="mt-4">
        <a
          className="hover:underline"
          href="https://businessx-0.flycricket.io/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
}
