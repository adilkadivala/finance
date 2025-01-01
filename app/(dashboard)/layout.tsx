import { FallBack } from "@/components/fall-back";
import Header from "@/components/header";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Suspense fallback={<FallBack />}>
        <Header />
        <main className="px-3 lg:px-14">{children}</main>
      </Suspense>
    </>
  );
};

export default DashboardLayout;
