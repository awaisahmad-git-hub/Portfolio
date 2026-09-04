"use client";

import { useEffect, useState } from "react";

/**
 * True only for visitors on a precise pointer who have not asked for reduced
 * motion — the gate for every cursor-reactive or ambient effect.
 */
export function usePointerFine() {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => setOk(fine.matches && !calm.matches);
    update();

    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  return ok;
}
