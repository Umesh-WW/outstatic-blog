import Link from "next/link";
import { useRouter } from "next/router";
export function FooterLinks() {
  const router = useRouter();
  return [
    ["About us", "/about-us"],
    ["Terms", "/terms-and-conditions"],
    ["Privacy Policy", "/privacy-policy"],
    ["Contact Us", "/contact-us"],
  ].map(([label, href]) => (
    <Link
      key={label}
      href={href}
      className={`flex border-b border-gray-700`}
    >
      <span
        className={` ${
          router.pathname === href ? "activeLinkRoute" : ""
        }`}
      >
        {label}
      </span>
    </Link>
  ));
}
