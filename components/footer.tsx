import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPhone,
  faEnvelope,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-12 ml-10">
      <div className="row-start-3 flex flex-wrap items-center justify-between max-w-6xl">
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:lisa.giordano@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            Contact Us
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="tel:504-517-6449"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPhone} />
            +1 504-517-6449
          </a>
        </div>
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://design.mcurrier.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} />
            made by m. currier designs
          </a>
          <a>
            <FontAwesomeIcon icon={faSpa} />
            &nbsp; © Saint Claude Yoga Center
          </a>
        </div>
      </div>
    </footer>
  );
}
