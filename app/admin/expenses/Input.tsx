'use client'
import React from 'react';
import { Input, Space, Table } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const columns = [
    {
        title: "Cidade",
        dataIndex: "city",
        key: "city",
    },
    {
        title: "Colaborador",
        dataIndex: "employer",
        key: "employer",
    },
    {
        title: "Tipo de despesa",
        dataIndex: "expenses_type",
        key: "expenses_type",
    },
    {
        title: "Tipo de pagamento",
        dataIndex: "payment_type",
        key: "payment_type",
    },
    {
        title: "Descrição",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Data",
        dataIndex: "created_at",
        key: "created_at",


    },
    {
        title: "Valor",
        dataIndex: "payment_value",
        key: "payment_value",
    }
];

export default function InputSearch({ data }) {
    const rawData = data.filter((item) => {
        if (item.employer == onSearch) {
            return item;
        }
    })
    console.log(rawData)
    return (
        <Space direction="vertical">
            <Search size='large' placeholder="Digite nome do colaborador" onSearch={onSearch} style={{ width: 300 }} />
            <Table tableLayout="fixed" dataSource={data} columns={columns} />;
        </Space>
    );
}

