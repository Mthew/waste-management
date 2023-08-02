import { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";

import { MainLayout } from "@/layouts";
import { DeleteIcon, EditIcon } from "@/components/icons";
import { getRoles } from "@/database/role";
import { useRouter } from "next/router";
import { ROUTES } from "@/utils";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Descripción",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<EditIcon />}></Button>
        <Button icon={<DeleteIcon />}></Button>
      </Space>
    ),
  },
];

const Roles = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    getRoles(setData);
  }, []);
  return (
    <>
      <Button onClick={() => router.push(`${ROUTES.roles}/form`)}>
        Agregar Rol
      </Button>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

Roles.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Roles;
