'use client';

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { LuSearch, LuWifi } from "react-icons/lu";
import Link from "next/link";

interface ClienteProps {
    cpf: string;
    params: {
        cpf: string;
    };
    login?: string;
    nome?: string;
    mac_address?: string;
    wifi_ssid?: string;
    wifi_password?: string;
    wifi_ssid_5?: string;
    wifi_password_5?: string;

}

export default function Cliente({ params: { cpf } }: ClienteProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [dataSgp, setDataSgp] = useState<Partial<ClienteProps>>({});
    const [macAddress, setMacAddress] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Lógica para o envio do formulário
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const callGetApi = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://170.245.175.14:9595/api/api.php?login=${cpf}`).then((res) => res.json());
            if (!response) {
                alert('Não encontramos nada com esse negócio');
            } else {
                setDataSgp(response);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        callGetApi();
    }, [macAddress]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataSgp(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <main className="flex justify-center">
            <form method="post" action="/config" onSubmit={handleSubmit} className="w-1/2 p-1">
                <header className="flex justify-between py-4 gap-10 items-center">
                    <span>Buscar MAC (resetdefault)</span>
                    <button className="p-2 px-10 bg-lime-500 rounded-md">
                        <LuSearch />
                    </button>
                </header>
                <div className="flex flex-col rounded-md gap-2">
                    <input
                        className='bg-zinc-300/10 p-4 rounded-md outline-none'
                        type="text"
                        name="mac_address"
                        id="mac_address"
                        value={macAddress}
                        onChange={(e) => setMacAddress(e.target.value)}
                    />
                    <Link href={{
                        pathname: '/config',
                        query : { ...dataSgp, mac_address: macAddress }
                    }} className='bg-lime-700 p-4 rounded-md hover:bg-lime-700/50 transition-all cursor-pointer text-center'>
                        {isLoading ? 'carregando' : 'Gerenciar CPE'}
                    </Link>
                </div>

                <div className="mt-10 flex flex-col">
                    <div className="flex flex-col mb-5">
                        <strong>{dataSgp.nome}</strong>
                        <span>PPPoE: {dataSgp.login}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LuWifi /> <span>Wifi 2.4Ghz</span>
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <h4>SSID</h4>
                        <input
                            className='bg-zinc-300/10 p-3 rounded-md outline-none'
                            placeholder='DIGITE O SSID'
                            type="text"
                            name="wifi_ssid"
                            id="wifi_ssid"
                            value={dataSgp.wifi_ssid || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <h1>Password</h1>
                        <input
                            className='bg-zinc-300/10 p-3 rounded-md outline-none'
                            placeholder='DIGITE A SENHA'
                            type="text"
                            name="wifi_password"
                            id="wifi_password"
                            value={dataSgp.wifi_password || ''}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="flex gap-2 mt-10 items-center">
                        <LuWifi /> <span>Wifi 5.8Ghz</span>
                    </div>

                    <div className="mt-2 flex gap-2 items-center">
                        <h4>SSID</h4>
                        <input
                            className='bg-zinc-300/10 p-3 rounded-md outline-none'
                            placeholder='DIGITE O SSID'
                            type="text"
                            name="wifi_ssid_5"
                            id="wifi_ssid_5"
                            value={dataSgp.wifi_ssid_5 || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mt-2 flex gap-2 items-center">
                        <h1>Password</h1>
                        <input
                            className='bg-zinc-300/10 p-3 rounded-md outline-none'
                            placeholder='DIGITE A SENHA'
                            type="text"
                            name="wifi_password_5"
                            id="wifi_password_5"
                            value={dataSgp.wifi_password_5 || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </form>
        </main>
    );
}
