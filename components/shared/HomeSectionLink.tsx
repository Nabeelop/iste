"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";
import { markSkipNextHomeLoader } from "@/lib/home-loader-skip";

type HomeSectionLinkProps = ComponentProps<typeof Link>;

export function HomeSectionLink({ onClick, ...props }: HomeSectionLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    markSkipNextHomeLoader();
    onClick?.(event);
  };

  return <Link {...props} onClick={handleClick} />;
}
