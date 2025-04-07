"use client";
import { useState, useEffect, useRef } from "react";

const TypewriterEffect = () => {
  const fullText = "Frontend Developer";
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const type = () => {
    const currentIndex = indexRef.current;
    const isDeleting = isDeletingRef.current;

    if (!isDeleting) {
      setText(fullText.slice(0, currentIndex + 1));
      indexRef.current += 1;

      if (indexRef.current === fullText.length) {
        isDeletingRef.current = true;
        timeoutRef.current = setTimeout(type, 1500);
        return;
      }
    } else {
      setText(fullText.slice(0, currentIndex - 1));
      indexRef.current -= 1;

      if (indexRef.current === 0) {
        isDeletingRef.current = false;
      }
    }

    timeoutRef.current = setTimeout(type, 100);
  };

  useEffect(() => {
    type(); 

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); 
    };
  }, []);

  return (
    <div className="text-[#74070E] text-xl font-semibold animate-pulse tracking-wide">
      {text}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypewriterEffect;
