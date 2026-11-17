import { Suspense } from "react";
import LoginWrapper from "@/src/xpages/Login/wrapper";

export default function Login() {
  return (
    <Suspense fallback={null}>
      <LoginWrapper />
    </Suspense>
  );
}
