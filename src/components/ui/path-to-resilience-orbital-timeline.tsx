import { CheckCircle2 } from "lucide-react";

export interface TimelineStep {
  title: string;
  description: string;
}

export interface PathToResilienceOrbitalTimelineProps {
  title?: string;
  steps?: TimelineStep[];
}

const defaultSteps: TimelineStep[] = [
  { title: "Understand", description: "Clarify the people, process, and outcome that matter." },
  { title: "Shape", description: "Turn the right idea into a focused plan and interface." },
  { title: "Build", description: "Deliver the smallest reliable version with feedback built in." },
  { title: "Improve", description: "Measure the result and strengthen what is already working." },
];

export default function PathToResilienceOrbitalTimeline({
  title = "A delivery rhythm your team can follow.",
  steps = defaultSteps,
}: PathToResilienceOrbitalTimelineProps) {
  return (
    <section aria-labelledby="orbital-timeline-title" className="bg-white px-6 py-16 text-slate-900 sm:px-10 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">Delivery framework</p>
          <h2 id="orbital-timeline-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            A clear sequence keeps strategic choices, practical implementation, and learning connected.
          </p>
        </div>

        <ol className="relative space-y-6 border-l-2 border-cyan-700 pl-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <span className="absolute -left-[2.85rem] top-6 grid h-8 w-8 place-items-center rounded-full bg-cyan-700 text-sm font-bold text-white ring-4 ring-white">
                {index + 1}
              </span>
              <div className="flex items-start gap-3">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-700" />
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
