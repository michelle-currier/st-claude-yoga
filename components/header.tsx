import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-1 z-30 w-full -ml-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative flex h-24 items-center justify-between gap-3">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Image
              aria-hidden
              src="/logo.png"
              alt="Logo"
              width={200}
              height={120}
            />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-6">
            <li>
              <Link
                href="https://saintclaudeyogacenter.union.site/calendar"
                className="text-slate-500 hover:text-orange-900"
                target="_blank"
              >
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="https://saintclaudeyogacenter.union.site/events"
                className="text-slate-500 hover:text-orange-900"
                target="_blank"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="https://saintclaudeyogacenter.union.site/passes"
                className="text-slate-500 hover:text-orange-900"
                target="_blank"
              >
                Passes
              </Link>
            </li>

            {/* <li>
              <Link
                href="#contact"
                className="text-green-700 hover:text-orange-900"
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}
