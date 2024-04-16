"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  {
    route: "/",
    label: "Home",
  },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="max-md:hidden">
      <ul className="flex gap-5">
        {mainLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li key={link.label}>
              <Link
                className={`py-4 text-base font-[500]  ${
                  isActive
                    ? "hover:text-indigo-500 text-indigo-500"
                    : "hover:text-indigo-500"
                }`}
                href={link.route}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
