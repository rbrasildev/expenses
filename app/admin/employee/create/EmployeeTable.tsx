'use server'
import { Button, Table } from "antd";

export default async function EmployeeTable({ data: []}) {

    const columns = [
        {
            title: "Nome",
            dataIndex: "first_name",
            key: "first_name",
        },
        {
            title: "Sobrenome",
            dataIndex: "last_name",
            key: "last_name",
        },
        {
            title: "Telefone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Admissão",
            dataIndex: "admission",
            key: "admission",
        },
        {
            title: "Chave Pix",
            dataIndex: "key_pix",
            key: "key_pix",
        }
    ];

    async function handleDelete() {
        'use server'
        // Lógica para excluir o item com o ID itemId
        // Por exemplo, chame uma função de exclusão do servidor
        console.log(`Excluindo item com ID `);
    }

    return (
        <Table dataSource={data} columns={columns} />
    )

}