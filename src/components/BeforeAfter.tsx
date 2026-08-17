'use client';

import { useRef, useState } from 'react';

type Pair = {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
};

/** The comparison stage. Inline it's a static 50/50 preview; in the modal it's draggable. */
function Compare({ before, after, beforeAlt, afterAlt, caption, interactive = false }: Pair & { interactive?: boolean }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="ba__stage" style={{ ['--pos' as string]: `${pos}%` }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba__img" src={after} alt={afterAlt} loading="lazy" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ba__img ba__img--before" src={before} alt={beforeAlt} loading="lazy" />

      <span className="ba__tag ba__tag--before" aria-hidden="true">Before</span>
      <span className="ba__tag ba__tag--after" aria-hidden="true">After</span>

      {interactive && (
        <input
          className="ba__range"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Reveal the before and after of ${caption ?? 'this project'}. Drag or use arrow keys.`}
        />
      )}

      <span className="ba__divider" aria-hidden="true">
        <span className="ba__handle" />
      </span>
    </div>
  );
}

/**
 * Before/After comparison. The inline preview is a button — clicking the image opens the
 * same comparison larger and draggable in a centered native <dialog> (focus-trapped,
 * Esc + backdrop close).
 */
export default function BeforeAfter(props: Pair) {
  const { caption } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <figure className="ba">
      <button
        type="button"
        className="ba__trigger"
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`Open the before-and-after comparison of ${caption ?? 'this project'}`}
      >
        <Compare {...props} />
        <span className="ba__hint" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" />
          </svg>
          Compare
        </span>
      </button>
      {caption && <figcaption className="ba__caption">{caption}</figcaption>}

      <dialog
        ref={dialogRef}
        className="ba__dialog"
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="ba__dialog-inner">
          <button
            type="button"
            className="ba__dialog-close"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
          <Compare {...props} interactive />
          {caption && <p className="ba__dialog-caption">{caption}</p>}
        </div>
      </dialog>
    </figure>
  );
}
