import React from "react";
import { UploadIcon, UserCircle, VideoCamera } from "@/components/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

interface Props {
  children: React.ReactElement;
}

const ItemsMenu: {
  key: number;
  title: string;
  icon: React.ReactElement;
}[] = [
  {
    key: 1,
    title: "Roles",
    icon: <UploadIcon />,
  },
  {
    key: 2,
    title: "Usuarios",
    icon: <UploadIcon />,
  },
  {
    key: 3,
    title: "Hogares",
    icon: <UploadIcon />,
  },
  {
    key: 4,
    title: "Recolecciones",
    icon: <UploadIcon />,
  },
];

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#",
};

const App: React.FC<Props> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={headerStyle} />
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={ItemsMenu.map((item, index) => ({
              key: item.key,
              icon: item.icon,
              label: item.title,
            }))}
          />
        </Sider>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
      <Footer
        style={{ textAlign: "center", background: "#001528", color: "#fff" }}
      >
        Lujan ©2023 Created by M_thew
      </Footer>
    </Layout>
  );
};

export default App;
