import React, { useEffect, useState } from 'react'
import Box from '../components/box'
import Loading from '../components/loading'
import { useNavigate } from 'react-router-dom';
import { getServersList } from '../services/api.service';

const INITIAL_SERVERS = [
    {
        "name": "Ubuntu-Server",
        "description": "This is an ubuntu containmer running in Docker.",
        "ramCPU": [
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            },
            {
                "availableRam": null,
                "cpuPerformance": null
            }
        ],
        "discStats": []
    },
];

const ListPage = () => {
    const navigate = useNavigate();

    const [isLoading, setLoading] = useState(false);
    const [servers, setServers] = useState(INITIAL_SERVERS);

    const onInit = async () => {
        try {
            setLoading(() => true);
            const serversData = await getServersList();
            setServers((prev) => [...serversData]);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(() => false);
        }
    }

    useEffect(() => {
        onInit();
    }, []);

    return (
        <>
            {
                isLoading ? <Loading />
                    :
                    <div className='listpage'>
                        <Box id="1234" name="Voldemart" cpu="89" ram="60" disk="37" />
                        <Box id="1234" name="ConnectVerse" cpu="15" ram="20" disk="35" />
                        <Box id="1234" name="LegalChain" cpu="52" ram="77" disk="12" />
                        <Box id="1234" name="Innovatree" cpu="77" ram="80" disk="50" />
                    </div>
            }
        </>
    )
}

export default ListPage
