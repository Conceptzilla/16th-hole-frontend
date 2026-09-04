"use client";

import { useEffect, useRef, useState } from "react";

export default function SettingCopy() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={`sixteenth-setting-copy${isVisible ? " is-visible" : ""}`}>
      <p className="sixteenth-setting-label" id="setting-label">
        The Setting
      </p>
      <div className="sixteenth-setting-body">
        <p>
          The 16th hole is a private golf society built around discretion, ritual, and shared
          standards. We exist beyond competition and performance. Golf here is not a result — it is
          a setting.
        </p>
        <p>
          Members of the 16th hole value silence over noise, time over speed, and presence over
          display. The course is not a stage. It is a place of focus.
        </p>
      </div>
    </div>
  );
}
