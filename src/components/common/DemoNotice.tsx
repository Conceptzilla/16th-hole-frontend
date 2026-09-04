"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "conceptzilla-demo-notice-dismissed-v1";

export default function DemoNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isActive = true;
    queueMicrotask(() => {
      if (!isActive) return;
      try {
        setIsVisible(window.localStorage.getItem(STORAGE_KEY) !== "true");
      } catch {
        setIsVisible(true);
      }
    });
    return () => {
      isActive = false;
    };
  }, []);

  function dismiss() {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The notice can still be dismissed when browser storage is unavailable.
    }
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <aside className="demo-notice" aria-label="Independent concept notice" aria-live="polite">
      <p>
        <strong>Independent concept</strong>
        <span>
          This non-commercial demo was created by Conceptzilla for portfolio presentation. It is not a live service or a client-commissioned product.
        </span>
      </p>
      <button type="button" onClick={dismiss}>
        OK
      </button>
    </aside>
  );
}
