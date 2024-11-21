"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <div>
      {!isLandingPage && <Navigation />}
      {children}
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default ConditionalLayout;
