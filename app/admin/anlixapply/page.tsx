'use client'
import React, { useState } from 'react';


const Anlixapply: React.FC = () => {
    const [pppoe, setPppoe] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const callGetApi = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`http://170.245.175.14:9595/api/api.php?login=${pppoe}`).then((response) => response.json())
            if (!response) {
                alert('não encontramos nada com esse negócio')
                setIsLoading(false)
            } else {
                setIsLoading(false);
                window.location.href = `/admin/anlixapply/cliente/${response.login}`
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        callGetApi()
    }

    return (

        <main className='bg-gradient-to-r from-dark-500 to-slate-500  flex h-screen  items-center flex-col justify-center'>
            <form onSubmit={handleSubmit}>
                <div className='w-96'>
                    <input
                        className='bg-zinc-300/10 p-4 rounded-tl-md rounded-bl-md outline-none'
                        placeholder='Digite pppoe do cliente'
                        type="text"
                        name="pppoe"
                        id="pppoe"
                        value={pppoe}
                        onChange={(e) => setPppoe(e.target.value)} />
                    <input type="submit" value={isLoading ? 'carregando' : 'Buscar'} className='bg-lime-700 p-4 rounded-tr-md rounded-br-md hover:bg-lime-700/50 transition-all cursor-pointer' />
                </div>
            </form>
        </main>
    )
}

export default Anlixapply;