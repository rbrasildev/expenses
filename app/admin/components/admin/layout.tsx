'use client'
import React, { ReactNode, useState } from 'react';
import {
    DashboardOutlined,
    DollarCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Switch } from 'antd';
import Link from 'next/link';
import { Footer } from 'antd/es/layout/layout';


const { Header, Sider, Content } = Layout;
const { Item } = Menu;
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);


    const {
        token: { colorBgContainer, borderRadiusLG, controlItemBgHover, },
    } = theme.useToken();

    const icons = [UserOutlined, VideoCameraOutlined, UploadOutlined]

    // const items = icons.map((icon, index) => ({
    //     key: String(index + 1),
    //     icon: React.createElement(icon),
    //     label: `Nav ${index + 4}`
    // }))

    const items = [
        {
            key: 1,
            icon: <DashboardOutlined />,
            label: "Dashboard",
            route: "/admin"
        },
        {
            key: 2,
            icon: <MenuFoldOutlined />,
            label: "Despesas",
            route: "/admin/expenses"
        }
    ]

    return (
        <Layout>
            <Sider
                className="h-100"
                trigger={null}
                collapsible
                width={254}
                // collapsedWidth={54}
                collapsed={collapsed}
                breakpoint="sm"
                onBreakpoint={(broken) => {
                    setCollapsed(true)
                }}

            >
                <div className="m-3 flex justify-center">
                    <img width={100} src="https://redeconexaonet.com.br/images/cidade-logomarca.png" />
                </div>

                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>

            <Layout
            // style={!collapsed ? { marginLeft: 200 } : { marginLeft: 54 }}
            >
                <Header className='flex items-center justify-between' style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <Switch
                        // checked={theme === 'dark'}
                        // onChange={changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </Header>
                <Content
                    className='container p-4 mx-auto h-screen'

                >
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout >
    );
};

