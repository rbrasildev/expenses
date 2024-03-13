'use client'
import { ReactNode, useState } from 'react';
import { Layout, Menu, Button, theme, Switch, Space } from 'antd';
import { } from 'antd/es/layout/layout';
import MenuItem from 'antd/es/menu/MenuItem';
import Link from 'next/link';

import {
    DashboardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content, Footer } = Layout;

interface Props {
    children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isTheme, setIsTheme] = useState(true)

    const {
        token: { colorBgContainer, borderRadiusLG, controlItemBgHover, },
    } = theme.useToken();

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
        },
        {
            key: 3,
            icon: <UserOutlined />,
            label: "Funcionários",
            route: "/admin/employee"
        }
    ]

    return (
        <Layout>
            <Sider
                theme={isTheme ? 'dark' : 'light'}
                className="h-100"
                trigger={null}
                collapsible
                width={200}
                collapsed={collapsed}
                breakpoint="lg"
                onBreakpoint={(broken) => {
                    setCollapsed(true)
                }}

            >
                <div className="m-3 flex justify-center">
                    <img width={100} src="https://redeconexaonet.com.br/images/cidade-logomarca.png" />
                </div>
                <Menu theme={isTheme ? 'dark' : 'light'} mode="inline" defaultSelectedKeys={['1']} items={items} />
            </Sider>
            <Layout

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

                    <Menu defaultSelectedKeys={['1']}>
                        <Space>
                            {items.map((item) =>
                                <Link href={item.route}>
                                    <MenuItem icon={item.icon}>{item.label}</MenuItem>
                                </Link>
                            )}
                        </Space>
                    </Menu>
                    <Switch
                        checked={isTheme === true}
                        onChange={setIsTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </Header>
                <Content>
                    <div className='container p-4 mx-auto h-screen' >
                        {children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;