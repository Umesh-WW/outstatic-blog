import Link from "next/link";
import { useRouter } from "next/router";
export function NavLinks() {
  const router = useRouter();
  return [
    ["Home", "/home"],
    ["GitHub", "/github"],
    ["Install", "/install"],
    ["DragGAN Download", "/download"],
    ["Al Tools", "/"],
    ["ChatGTP", "/chatgtp"],
    ["Submit Guest Post", "/posts"],
  ].map(([label, href]) => (
    <Link
      key={label}
      href={href}
      className={`-my-2 -mx-3 rounded-lg px-3 py-2 text-[15px] only: text-gray-700 transition-colors delay-150 hover:delay-[0ms]`}
    >
      <span
        className={`text-white hover:bg-gray-900 hover:text-white flex items-center text-[15px] font-normal ${
          router.pathname === href ? "activeLinkRoute" : ""
        }`}
      >
        {label}
      </span>
    </Link>
  ));
}
