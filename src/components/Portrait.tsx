"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/site";

/**
 * Hero portrait — a plain framed photo. Falls back to a monogram plate if the
 * image file has not been added yet.
 */
export function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[15rem] sm:max-w-[17rem] md:ml-auto md:mr-0 md:max-w-[20rem]">
      <div className="relative overflow-hidden rounded-xl border border-line-2 bg-ink-2">
        {failed ? (
          <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2">
            <span className="display text-5xl text-accent">AA</span>
            <span className="eyebrow">Portrait pending</span>
          </div>
        ) : (
          <div className="relative aspect-[4/5]">
            <Image
              src={profile.photo}
              alt={profile.photoAlt}
              fill
              priority
              sizes="(max-width: 768px) 17rem, 20rem"
              quality={92}
              onError={() => setFailed(true)}
              className="object-cover object-top"
            />
          </div>
        )}
      </div>
    </div>
  );
}
