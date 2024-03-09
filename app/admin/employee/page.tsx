'use client'
import React from 'react';
import { Form, Input, Button, notification, DatePicker, Card } from 'antd';
import DashboardLayout from '../components/admin/layout';

interface EmployerProps {
    data: [];
}

export default function EmployeeForm() {
    const onFinish = (data: []) => {

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
                notification.success({
                    message: 'Successo',
                    description: response.message
                })
            })

            .catch((error) => console.error('Error:', error));
    };

    return (
        <DashboardLayout>
            <Card title="Formulário cadastro de colaborador" bordered={true}>

                <Form onFinish={onFinish}>
                    <Form.Item label="Nome" name="first_name" rules={[{ required: true, message: 'O campo nome é obrigatório!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Sobrenome" name="last_name" rules={[{ required: true, message: "O campo sobrenome é obrigatório" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Telefone" name="phone">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Data Admissão" name="admission" rules={[{ required: true, message: 'O campo data de admissão é obrigatório' }]}>
                        <DatePicker format="DD/MM/YYYY" />
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
            </Card>
        </DashboardLayout>
    );
};

