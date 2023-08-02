import React from "react";
import { useRouter } from "next/navigation";
import { Button, Form, Input, InputNumber } from "antd";
import { collection, addDoc } from "firebase/firestore";

import { MainLayout } from "@/layouts";
import { ROUTES, validateMessages } from "@/utils";
import { addRole } from "@/database/role";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Roles = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    await addRole(values.role);
    router.replace(ROUTES.roles);
  };

  return (
    <Form
      title="Roles"
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["role", "name"]}
        label="Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["role", "description"]} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
        <Button type="default">Cancelar</Button>
      </Form.Item>
    </Form>
  );
};

Roles.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

export default Roles;
