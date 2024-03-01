import React from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Endereço',
        dataIndex: 'address',
        key: 'address',
    },

    {
        title: 'Ação',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a><EditOutlined/>Edite {record.name}</a>
                <a ><DeleteOutlined color='red' /></a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',

    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',

    },
];

const NewTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default NewTable;