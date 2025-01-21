"use client";

import type { IconButtonProps } from "@chakra-ui/react";
import { ClientOnly, Icon, IconButton, Skeleton } from "@chakra-ui/react";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider, useTheme } from "next-themes";
import { forwardRef } from "react";

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  );
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

export function ColorModeIcon({ ...props }: any) {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? (
    <Icon fontSize={"1.1rem"} {...props}>
      <IconSunHigh />
    </Icon>
  ) : (
    <Icon fontSize={"1.1rem"} {...props}>
      <IconMoon />
    </Icon>
  );
}

interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> {}

export const ColorModeButton = forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();
  return (
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        // css={{
        //   _icon: {
        //     width: "5",
        //     height: "5",
        //   },
        // }}
      >
        <ColorModeIcon fontSize={props?.fontSize} />
      </IconButton>
    </ClientOnly>
  );
});
