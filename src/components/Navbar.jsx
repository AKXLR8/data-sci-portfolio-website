import { useState } from "react";

const links = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-primary/80 backdrop-blur z-50">
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-accent">Akshay</span> Maniyampara
        </h1>

        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="hover:text-accent capitalize">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 p-6 bg-primary">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l}`}
                className="block py-2 border-b border-gray-700 capitalize"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
