import { redirect } from "next/navigation";

/** Legacy path — package is published as @typedantic/model. */
export default function LegacyTypedanticRedirect() {
  redirect("/reference/model");
}
