import { ReactNode } from "react"
import DashboardLayout from "./components/admin/layout"

interface DashboardLayoutProps {
    children: ReactNode;
}

export default function Dashboard({ children }: DashboardLayoutProps) {
    return (
        <DashboardLayout>
            <h1>
                Dashboard
            </h1>
        </DashboardLayout>
    )
}