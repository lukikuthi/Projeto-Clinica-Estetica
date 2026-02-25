import { MouseEvent, useCallback } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <div className={`glow-card ${className}`} onMouseMove={handleMouseMove}>
      {children}
    </div>
  );
};

export default GlowCard;
