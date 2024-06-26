
import React from 'react';
import { Table } from 'antd';


interface DataType {
    key: string;
    city: string;
    employer: string;
    expenses_type: string;
    payment_type: string;
    description: string;
    payment_value: number;
    data: []
}

export async function NewTable({ data }: DataType) {
    const columns = [
        {
            title: "Nome",
            dataIndex: "city",
            key: "city",
        },
        {
            title: "Idade",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        }
    ];
    // Renderizar o componente Table
    return <Table dataSource={data} columns={columns} />;
};
