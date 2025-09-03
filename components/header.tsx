import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-1 z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-24 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
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
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#contact"
                className="btn-sm bg-white text-gray-800 shadow hover:bg-gray-50"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://booking.setmore.com/scheduleappointment/aaf0bee6-80a6-4232-95a8-7a5b0a94aea8"
                target="_blank"
              >
                Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
