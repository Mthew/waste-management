import { MainLayout } from "@/layouts";
import { Button } from "antd";

const Home = () => {
  return (
    <div className="flex justify-center items-center">
      <Button type="primary">Button</Button>
    </div>
  );
};

Home.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Home;
