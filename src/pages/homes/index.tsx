import React from "react";
import { MainLayout } from "@/layouts";

const homes = () => {
  return <div>homes</div>;
};

homes.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default homes;
