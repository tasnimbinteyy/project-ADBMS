// import Button from "@/components/ui/Button";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <span className="mb-6 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
          AI-Powered Job Matching Platform
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Find Your Perfect Job Match
          <br />
          <span className="text-emerald-600">Based on Your Skills</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          We analyze your real skills — not just keywords — to connect you with
          roles where you’ll actually thrive.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Start Your Journey</Button>
          <Button variant="outline">Browse Jobs</Button>
        </div>
      </div>
    </section>
  );
}
