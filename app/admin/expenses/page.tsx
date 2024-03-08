
import DashboardLayout from "../components/admin/layout";
import FormExpenses from "../components/admin/FormExpenses";
import { Table } from "antd";

interface ExpensesProps {
    children: Element,
}

export default async function Admin() {
    const data = await fetch("https://api-reaffle.vercel.app/expenses").then((response) => response.json());

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
            title: "Valor",
            dataIndex: "payment_value",
            key: "payment_value",
        }
    ];


    return (
        <DashboardLayout>
            <FormExpenses />
            <Table dataSource={data} columns={columns} />;
        </DashboardLayout >
    )
}