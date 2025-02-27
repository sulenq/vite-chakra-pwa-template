import { HStack, StackProps } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface Props extends StackProps {
  children?: any;
}

const HScroll = ({ children, ...props }: Props) => {
  const hStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!hStackRef.current) return;

      // Scroll horizontal
      hStackRef.current.scrollBy({
        left: event.deltaY, // Gunakan deltaY untuk scroll horizontal
        behavior: "smooth",
      });

      // Mencegah scroll default (vertikal)
      event.preventDefault();
    };

    const hStackElement = hStackRef.current;
    hStackElement?.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      hStackElement?.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <HStack
      ref={hStackRef}
      className="scrollX"
      overflowX={"auto"}
      overflowY={"clip"}
      w={"full"}
      {...props}
    >
      {children}
    </HStack>
  );
};

export default HScroll;
