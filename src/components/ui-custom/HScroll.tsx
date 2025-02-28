import { HStack, StackProps } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

const HScroll = ({ children, ...props }: StackProps) => {
  const hStackRef = useRef<HTMLDivElement>(null);
  const scrollVelocity = useRef(0);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!hStackRef.current) return;

      event.preventDefault();
      scrollVelocity.current += event.deltaY * 0.2;

      if (!rafId.current) {
        const smoothScroll = () => {
          if (!hStackRef.current) return;
          hStackRef.current.scrollLeft += scrollVelocity.current;
          scrollVelocity.current *= 0.85;

          if (Math.abs(scrollVelocity.current) > 0.5) {
            rafId.current = requestAnimationFrame(smoothScroll);
          } else {
            rafId.current = null;
          }
        };
        rafId.current = requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <HStack
      ref={hStackRef}
      overflowX="auto"
      overflowY="hidden"
      w="full"
      className={`scrollX ${props.className}`}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default HScroll;
