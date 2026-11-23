"use client";

import NextLink from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { useLanguage } from "@/lib/i18n";
import { localizeHref } from "@/lib/locale";

const LocaleLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof NextLink>>(function LocaleLink(
  { href, ...rest },
  ref,
) {
  const { prefix } = useLanguage();
  const h = prefix && typeof href === "string" ? localizeHref(href) : href;
  return <NextLink ref={ref} href={h} {...rest} />;
});

export default LocaleLink;
