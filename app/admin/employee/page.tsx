import { Button, Card, Space, Table } from "antd";
import DashboardLayout from "../components/admin/layout";
import Link from "next/link";
import { ReactNode } from "react";


interface EmployeeProps {
    employee_id: number
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    admission: Date;
    key_pix: string;
    children: ReactNode;
    record: number;
}

const Employee = async ({ children }: EmployeeProps) => {
    const data = await fetch('https://api-reaffle.vercel.app/api/employee').then((response) => response.json())

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

    return (
        <DashboardLayout>
            <Link href="/admin/employee/create">
                <Button size="large" className="mb-3">Novo</Button>
            </Link>
            <Card title="Colaraboradores">
                <Table tableLayout="fixed" size="middle" dataSource={data} columns={columns} />
            </Card>
        </DashboardLayout>
    )
}
export default Employee;