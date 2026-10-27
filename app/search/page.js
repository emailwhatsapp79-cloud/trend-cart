import { Suspense } from "react";
import Results from "./Results";
export const metadata = { title: "Search" };
export default function S() { return <Suspense fallback={<p>Loading…</p>}><Results/></Suspense>; }
