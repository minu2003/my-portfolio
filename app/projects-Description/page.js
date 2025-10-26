"use client";

import { Suspense } from "react";
import ProjectDescription from "../components/ProjectDescription";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading project...</div>}>
      <ProjectDescription/>
    </Suspense>
  );
}
