'use client'
import React, { ReactNode, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Switch, Collapse } from 'antd';

const { Header, Sider, Content } = Layout;
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
            <Sider style={{ position: 'fixed', top: 0, left: 0, bottom: 0 }} width={264} trigger={null} collapsible collapsedWidth={54} collapsed={collapsed}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    className='mt-16'
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}

                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Dashboard',

                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Expenses',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Layout
                style={!collapsed ? { marginLeft: 264 } : { marginLeft: 54 }}
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
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

