import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorCircle = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      // Update the dot
      gsap.to(cursorDot.current, {
        x: clientX,
        y: clientY,
        duration: 0,
      });

      // Update the circle with slight delay for trailing effect
      gsap.to(cursorCircle.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
      });
    };

    const handleMouseEnter = () => {
      gsap.to([cursorDot.current, cursorCircle.current], {
        opacity: 1,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to([cursorDot.current, cursorCircle.current], {
        opacity: 0,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDot}
        className="fixed w-3 h-3 bg-neon-cyan rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ mixBlendMode: 'screen' }}
      />
      <div
        ref={cursorCircle}
        className="fixed w-8 h-8 border-2 border-neon-cyan rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ mixBlendMode: 'screen' }}
      />
    </>
  );
}
