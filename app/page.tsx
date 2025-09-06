import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faPassport } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-5xl text-rust font-bold">
          Welcome to the Saint Claude Yoga Center
        </h1>
        <section className="p-6 rounded-lg shadow-xl bg-white">
          <h2 className="text-4xl font-semibold">About Us</h2>
          <p className="mt-4 text-black">
            Community Supported Yoga + Pilates in the Saint Claude neighborhood
            of New Orleans offering accessible, lineage - based classes on a
            sliding scale plus open practice sessions and community wellness
            events
          </p>
        </section>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full btn-green flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto md:w-[158px]"
            href="https://saintclaudeyogacenter.union.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCalendar} />
            Schedule
          </a>
          <a
            className="rounded-full btn-rust flex items-center justify-center gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://saintclaudeyogacenter.union.site/passes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPassport} />
            Get Passes
          </a>
        </div>
      </main>
    </>
  );
}
