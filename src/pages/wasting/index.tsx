import React from "react";
import { MainLayout } from "@/layouts";

const wasting = () => {
  return <div>wasting</div>;
};

wasting.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default wasting;
