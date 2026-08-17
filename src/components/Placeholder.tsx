/**
 * Image placeholder — rendered when a slot in SlotImage has no asset mapped to it.
 * Reserves the correct aspect ratio (no CLS) and labels the slot id (e.g. IMG-01).
 * Swap for next/image pointing at /public/... when real assets exist.
 */
export default function Placeholder({
  slot,
  ratio,
  className,
  rounded = false,
}: {
  slot: string;
  ratio?: string; // e.g. "16 / 9"
  className?: string;
  rounded?: boolean;
}) {
  return (
    <div
      className={`ph ${className ?? ''}`.trim()}
      style={{
        aspectRatio: ratio,
        borderRadius: rounded ? 'var(--radius)' : undefined,
      }}
      role="img"
      aria-label={`Placeholder image ${slot} (documentary photography pending)`}
    >
      <span className="ph__tag">{slot}</span>
    </div>
  );
}
