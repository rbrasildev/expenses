'use client'
import { FileTextOutlined, PlusCircleOutlined } from "@ant-design/icons";
import NewTable from "./components/admin/Table";
import DashboardLayout from "./components/admin/layout";
import { Button, Modal, Select, Input } from "antd";
import { useState } from "react";


export default function Admin() {
    const [open, setOpen] = useState(false);
    return (
        <DashboardLayout>
            <Button className="mb-4" onClick={() => setOpen(true)} icon={<PlusCircleOutlined />}>Novo</Button>
            <NewTable />
            <Modal
                title="New Expenses"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={480}
            >
                <div className="flex justify-between flex-col gap-2">
                    <Select
                        defaultValue="Selecione uma cidade"
                        style={{ width: 'auto' }}
                        options={[
                            { value: 'pacaja', label: 'Pacaja' },
                            { value: 'anapu', label: 'Anapu' },
                            { value: 'parintins', label: 'Parintins' },
                        ]}
                    />
                    <Select
                        defaultValue="Selecione a pessoa"
                        options={[
                            { value: 'Raimundo', label: 'Raimundo' },
                            { value: 'Eurico', label: 'Eurico' },
                            { value: 'Bruno', label: 'Bruno' },
                            { value: 'Wanderley', label: 'Wanderley' },
                        ]}
                    />
                    <div className="flex gap-3 justify-between">
                        <Select
                            className="w-full"
                            defaultValue="Tipo da despesa"
                            options={[
                                { value: 'Gasolina', label: 'Gasolina' },
                                { value: 'Agua', label: 'Agua' },
                                { value: 'Luz', label: 'Luz' },
                                { value: 'Vale', label: 'Vale' },
                                { value: 'Frete', label: 'Frete' },
                                { value: 'Outras', label: 'Outras' },
                            ]}
                        />
                        <Select
                            className="w-full"
                            defaultValue="Tipo de pagamento"
                            options={[
                                { value: 'Dinheiro', label: 'Dinheiro' },
                                { value: 'Pix', label: 'Pix' },
                                { value: 'Crédito', label: 'Crédito' },
                                { value: 'Débito', label: 'Débito' },
                            ]}
                        />
                    </div>
                    <Input
                        placeholder="Descrição"
                    />
                    <Input
                        placeholder="Valor"
                    />
                </div>
            </Modal>
        </DashboardLayout>
    )
}