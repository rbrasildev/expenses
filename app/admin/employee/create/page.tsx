'use client'
import React from 'react';
import { Form, Input, Button, notification, DatePicker, Card } from 'antd';
import DashboardLayout from '../../components/admin/layout';


interface EmployeeProps {
    employee_id: number
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    admission: Date;
    key_pix: string;
}

export default function EmployeeForm() {
    const onFinish = (data: EmployeeProps) => {

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
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item label="Sobrenome" name="last_name" rules={[{ required: true, message: "O campo sobrenome é obrigatório" }]}>
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item label="Telefone" name="phone">
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item label="Data Admissão" name="admission" rules={[{ required: true, message: 'O campo data de admissão é obrigatório' }]}>
                        <DatePicker size='large' format="DD/MM/YYYY" />
                    </Form.Item>
                    <Form.Item label="Chave PIX" name="key_pix">
                        <Input size='large' />
                    </Form.Item>
                    <Form.Item>
                        <Button size='large' type="default" htmlType="submit">
                            Salvar
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </DashboardLayout>
    );
};

