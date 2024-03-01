'use client'
import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Switch, Collapse } from 'antd';

const { Header, Sider, Content } = Layout;


const DashboardLayout: React.FC = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG, controlItemBgHover },
    } = theme.useToken();

    return (
        <Layout>
            <Sider style={{ height: '100vh' }} width={264} trigger={null} collapsible collapsedWidth={54} collapsed={collapsed}
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
            <Layout>
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

export default DashboardLayout;