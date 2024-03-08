'use client'
import React from 'react';
import { Space, Table } from 'antd';


interface DataType {
    key: string;
    city: string;
    employer: string;
    expenses_type: string;
    payment_type: string;
    description: string;
    payment_value: number;
}

export async function NewTable({ children }) {

    const data = await fetch("https://api-reaffle.vercel.app/expenses").then((response) => response.json());

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
