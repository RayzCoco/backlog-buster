"use client";

import { useEffect } from "react";
import { useHeaderStore } from "@/app/store/useHeaderStore";

export function usePageTitle(title: string) {
  const setTitle = useHeaderStore((state) => state.setTitle);

  useEffect(() => {
    setTitle(title);
  }, [title, setTitle]);
}
