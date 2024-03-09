'use client'
import React, { ReactNode, useState } from 'react';
import {
    DashboardOutlined,
    DollarCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,

} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Switch, } from 'antd';
import Link from 'next/link';


const { Header, Sider, Content } = Layout;
const { Item } = Menu;
interface DashboardLayoutProps {
    children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const [collapsed, setCollapsed] = useState(false);


    const {
        token: { colorBgContainer, borderRadiusLG, controlItemBgHover },
    } = theme.useToken();

    return (
        <Layout>
            <Sider style={{ position: 'fixed', top: 0, left: 0, bottom: 0 }} width={200} trigger={null} collapsible collapsedWidth={54} collapsed={collapsed}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    className='mt-16'
                    theme="dark"
                    mode="inline"

                >
                    <Menu.Item
                        key={'1'}
                        icon={<DashboardOutlined />}
                    >
                        <Link href="/admin">Dashboard</Link>
                    </Menu.Item>

                    <Menu.Item

                        key={'2'}
                        icon={<DollarCircleOutlined />}
                    >
                        <Link href="/admin/expenses">Despesas</Link>
                    </Menu.Item>

                    <Menu.Item

                        key={'3'}
                        icon={<UserOutlined />}
                    >
                        <Link href="/admin/employee">Colaborador</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout
                style={!collapsed ? { marginLeft: 200 } : { marginLeft: 54 }}
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
                    // className='container mx-auto'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        height:'90vh',
                        // background: colorBgContainer,
                        // borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout >
    );
};

