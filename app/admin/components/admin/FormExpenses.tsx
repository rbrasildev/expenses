'use client'
import { PlusCircleOutlined } from "@ant-design/icons";
import { Form, Select, Modal, Button, notification, Input } from "antd";
import { useState } from "react";

interface ExpensesProps {
    values: [];
}

export default function FormExpenses() {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        form.submit();
    };

    const onFinish = (values: []) => {
        setOpen(false);
        const data = values;
        fetch('https://api-reaffle.vercel.app/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json()
                console.log(response)
                notification.success({
                    message: 'Successo',
                    description: 'dados gravados com sucesso'
                })
            })
            .catch((error) => console.error('Error:', error));
    }
    return (
        <>
            <Button className="mb-4" size="large" onClick={() => setOpen(true)} icon={<PlusCircleOutlined />}>Novo</Button>
            <Modal
                title="New Expenses"
                centered
                open={open}
                onOk={handleOk}
                onCancel={() => setOpen(false)}
                width={480}
                okButtonProps={{ style: { backgroundColor: 'green', color: 'white', border: 'none' } }}
                okType="default"
                okText="Salvar"
            >
                <Form form={form} onFinish={onFinish}>

                    <Form.Item
                        name="city"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Select
                            size="large"
                            defaultValue="Selecione uma cidade"
                            style={{ width: 'auto' }}
                            options={[
                                { value: 'pacaja', label: 'Pacaja' },
                                { value: 'anapu', label: 'Anapu' },
                                { value: 'parintins', label: 'Parintins' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="employer"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Select
                            size="large"
                            defaultValue="Selecione a pessoa"
                            options={[
                                { value: 'Raimundo', label: 'Raimundo' },
                                { value: 'Eurico', label: 'Eurico' },
                                { value: 'Bruno', label: 'Bruno' },
                                { value: 'Wanderley', label: 'Wanderley' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="expenses_type"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Select
                            size="large"
                            className="w-full"
                            defaultValue="Tipo da despesa"
                            options={[
                                { value: 'gasolina', label: 'Gasolina' },
                                { value: 'agua', label: 'Agua' },
                                { value: 'luz', label: 'Luz' },
                                { value: 'vale', label: 'Vale' },
                                { value: 'frente', label: 'Frete' },
                                { value: 'outras', label: 'Outras' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="payment_type"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Select
                            size="large"
                            className="w-full"
                            defaultValue="Tipo de pagamento"
                            options={[
                                { value: 'Dinheiro', label: 'Dinheiro' },
                                { value: 'Pix', label: 'Pix' },
                                { value: 'Crédito', label: 'Crédito' },
                                { value: 'Débito', label: 'Débito' },
                            ]}
                        />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Input
                            size="large"
                            placeholder="Descrição"
                        />
                    </Form.Item>

                    <Form.Item
                        name="payment_value"
                        rules={[{ required: true, message: 'Por favor preencha esse campo!' }]}
                    >
                        <Input
                            size="large"
                            placeholder="Valor"
                        />
                    </Form.Item>
                </Form >
            </Modal >
        </>
    )
}