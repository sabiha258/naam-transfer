// Fixed, pointer-events-none noise texture to break flat digital surfaces. Pure CSS/SVG, no
// JS or image asset — a data-URI feTurbulence filter tiled across a fixed layer.
const NOISE_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.025] mix-blend-overlay"
      style={{ backgroundImage: `url("${NOISE_SVG}")`, backgroundSize: "120px 120px" }}
    />
  );
}
