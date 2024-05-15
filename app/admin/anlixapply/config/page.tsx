'use client';

import axios from "axios";
import { useEffect } from "react";
import DashboardLayout from "../../components/admin/layout";

interface SearchParams {
    mac_address: string;
    login: string;
    login_password: string;
    wifi_ssid: string;
    wifi_password: string;
    wifi_ssid_5: string;
    wifi_password_5: string;
}

interface ConfigProps {
    searchParams: SearchParams;
}

export default function Config({ searchParams }: ConfigProps) {

    const callPostApi = async () => {
        try {
            await axios({
                method: "put",
                url: `https://flashtins.redeconexaonet.com/api/v2/device/update/${searchParams.mac_address}`,
                auth: {
                    username: "admin",
                    password: "bld2154038"
                },
                data: {
                    content: {
                        mac_address: searchParams.mac_address,
                        pppoe_user: searchParams.login,
                        pppoe_password: searchParams.login_password,
                        wifi_ssid: searchParams.wifi_ssid,
                        wifi_password: searchParams.wifi_password,
                        wifi_ssid_5ghz: searchParams.wifi_ssid_5,
                        wifi_password_5ghz: searchParams.wifi_password_5,
                    }
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(searchParams.login_password);
    }, [searchParams]);

    return (
        <DashboardLayout>        <div className="flex justify-center">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl">Informações da CPE</h1>
                    <h1>Informações do roteador no anlix</h1>
                </div>
                <div className="flex flex-col">
                    <span>Modelo:</span>
                    <span>PPPoE_User: {searchParams.login}</span>
                    <span>PPPoE_Pass: {searchParams.login_password}</span>
                    <span>SSID: {searchParams.wifi_ssid}</span>
                    <span>SSID_5: {searchParams.wifi_ssid_5}</span>
                </div>
                <button onClick={callPostApi}>Aplicar</button>
            </div>
        </div>
        </DashboardLayout>
    );
}
