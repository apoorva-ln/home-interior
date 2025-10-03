import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname(); // to highlight active link

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Designs", href: "/designs" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md p-4 sm:px-8 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Interior Bliss</h1>

      <nav>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
