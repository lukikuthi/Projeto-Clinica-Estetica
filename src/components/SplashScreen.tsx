import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = ({ onComplete, onNearComplete }: { onComplete: () => void; onNearComplete?: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hasTriggeredNearComplete, setHasTriggeredNearComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 3;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 90 && !hasTriggeredNearComplete && onNearComplete) {
      setHasTriggeredNearComplete(true);
      onNearComplete();
    }
  }, [progress, hasTriggeredNearComplete, onNearComplete]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 800);
      }, 400);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      style={{ background: "hsla(30,25%,95%)" }}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        <div>
          <img src={logo} alt="Karina Vilela" className="h-32 w-32 md:h-40 md:w-40 object-contain" />
        </div>

        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">Bem-vindo</h1>
          <p className="text-label text-sm">Preparando sua experiência</p>
        </div>

        <div className="w-64 md:w-80">
          <div className="h-1.5 bg-border/30 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-gradient-to-r from-accent via-gold to-accent rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-3 font-medium tabular-nums">
            {progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
