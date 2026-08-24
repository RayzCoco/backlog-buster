"use client";

import { usePageTitle } from "../(dashboard)/hooks/usePageTitle";

export default function SetHeaderTitle({ title }: { title: string }) {
  usePageTitle(title);
  return null;
}
