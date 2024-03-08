'use client'
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import DashboardLayout from '../components/admin/layout';
interface EmployerProps {
    values: [];
}

export default function EmployeeForm() {
    const onFinish = (values: []) => {

        const data = values;

        fetch('https://api-reaffle.vercel.app/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                console.log(response)
            })

            .catch((error) => console.error('Error:', error));
    };

    return (
        <DashboardLayout>
            <Form onFinish={onFinish}>
                <Form.Item label="Nome" name="first_name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Sobrenome" name="last_name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Telefone" name="phone">
                    <Input />
                </Form.Item>
                <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Data Admissão" name="admission" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Chave PIX" name="key_pix">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit">
                        Salvar
                    </Button>
                </Form.Item>
            </Form>
        </DashboardLayout>
    );
};

