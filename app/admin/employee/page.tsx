import { Button, Card, Table } from "antd";
import DashboardLayout from "../components/admin/layout";
import Link from "next/link";

interface EmployeeProps {
    employee_id: number
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    admission: Date;
    key_pix: string;
}

export default async function Employee() {
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
                <Table tableLayout="fixed" dataSource={data} columns={columns} />;
            </Card>
        </DashboardLayout>
    )
}