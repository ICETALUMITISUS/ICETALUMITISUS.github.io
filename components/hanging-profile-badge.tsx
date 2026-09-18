'use client';

import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from 'react';

type MotionPoint = {
  x: number;
  y: number;
  rotation: number;
};

type SpringState = MotionPoint & {
  velocityX: number;
  velocityY: number;
  velocityRotation: number;
};

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(maximum, Math.max(minimum, value));

export function HangingProfileBadge() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const pointerActive = useRef(false);
  const pointerTarget = useRef<MotionPoint>({ x: 0, y: 0, rotation: 0 });

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches) {
      badge.style.transform = 'none';
      return;
    }

    const state: SpringState = {
      x: 0,
      y: 0,
      rotation: 0,
      velocityX: 0,
      velocityY: 0,
      velocityRotation: 0,
    };
    let animationFrame = 0;

    const animate = (time: number) => {
      const idle = time / 1750;
      const target = pointerActive.current
        ? pointerTarget.current
        : {
            x: Math.sin(idle) * 2.4,
            y: Math.sin(idle * 0.72) * 0.7,
            rotation: Math.sin(idle * 0.86) * 2.1,
          };

      state.velocityX = (state.velocityX + (target.x - state.x) * 0.045) * 0.84;
      state.velocityY = (state.velocityY + (target.y - state.y) * 0.045) * 0.84;
      state.velocityRotation =
        (state.velocityRotation + (target.rotation - state.rotation) * 0.038) * 0.86;

      state.x += state.velocityX;
      state.y += state.velocityY;
      state.rotation += state.velocityRotation;

      badge.style.transform = `translate3d(${state.x.toFixed(3)}px, ${state.y.toFixed(3)}px, 0) rotate(${state.rotation.toFixed(3)}deg)`;
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontalOffset = event.clientX - (bounds.left + bounds.width / 2);
    const verticalOffset = event.clientY - (bounds.top + bounds.height * 0.45);

    pointerActive.current = true;
    pointerTarget.current = {
      x: clamp(horizontalOffset * 0.12, -13, 13),
      y: clamp(verticalOffset * 0.025, -3.5, 5),
      rotation: clamp(horizontalOffset * 0.065, -7.5, 7.5),
    };
  };

  const handlePointerLeave = () => {
    pointerActive.current = false;
  };

  return (
    <div
      ref={badgeRef}
      className="hanging-id"
      aria-label="ป้ายห้อยโปรไฟล์ของปิติพงษ์"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="lanyard-strap" />
      <div className="lanyard-clip"><span /></div>
      <figure className="hanging-id-card">
        <div className="id-card-topline">
          <span className="id-card-mark">P.</span>
          <span>PORTFOLIO PASS</span>
        </div>
        <img src="/profile.png" alt="ภาพปิติพงษ์บนป้ายห้อยโปรไฟล์" />
        <figcaption>
          <strong>PITIPONG CHUSAWAT</strong>
          <span>GRAPHIC DESIGNER · BKK</span>
        </figcaption>
      </figure>
    </div>
  );
}
