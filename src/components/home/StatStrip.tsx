import { StatTile } from "@/components/ui/StatTile";
import { Reveal } from "@/components/motion/Reveal";

const stats = [
  { value: "5,187+", label: "Transfers completed" },
  { value: "650+", label: "Homeowners served" },
  { value: "70+", label: "Verified experts" },
  { value: "99%", label: "Success rate" },
];

export function StatStrip() {
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} y={16}>
            <StatTile value={s.value} label={s.label} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
