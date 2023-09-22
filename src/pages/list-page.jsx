import React, { useState, useEffect } from "react";
import { getServersList } from "../services/api.service";

const INITIAL_SERVERS = [
    {
        "id": "165",
        "name": "Ubuntu-Server-1",
        "description": "This is an ubuntu containmer running in Docker.",
        "ramCPU": [
            {
                "availableRam": 7170508,
                "cpuPerformance": 0.25
            },
            {
                "availableRam": 7170028,
                "cpuPerformance": 0.5
            },
            {
                "availableRam": 7166976,
                "cpuPerformance": 0.74
            },
            {
                "availableRam": 7176856,
                "cpuPerformance": 1.75
            },
            {
                "availableRam": 7172852,
                "cpuPerformance": 0.0
            },
            {
                "availableRam": 7168600,
                "cpuPerformance": 1.0
            },
            {
                "availableRam": 7177040,
                "cpuPerformance": 1.0
            },
            {
                "availableRam": 7173072,
                "cpuPerformance": 0.75
            },
            {
                "availableRam": 7167568,
                "cpuPerformance": 1.25
            },
            {
                "availableRam": 7164308,
                "cpuPerformance": 0.5
            },
            {
                "availableRam": 7161392,
                "cpuPerformance": 1.02
            },
            {
                "availableRam": 7158044,
                "cpuPerformance": 0.75
            }
        ],
        "discStats": [
            {
                "discMounts": [
                    {
                        "available": "68M"
                    },
                    {
                        "available": "4.2G"
                    },
                    {
                        "available": "68M"
                    },
                    {
                        "available": "8.9G"
                    },
                    {
                        "available": "8.9G"
                    }
                ]
            },
            {
                "discMounts": [
                    {
                        "available": "68M"
                    },
                    {
                        "available": "4.2G"
                    },
                    {
                        "available": "68M"
                    },
                    {
                        "available": "8.9G"
                    },
                    {
                        "available": "8.9G"
                    }
                ]
            },
            {
                "discMounts": [
                    {
                        "available": "68M"
                    },
                    {
                        "available": "4.2G"
                    },
                    {
                        "available": "68M"
                    },
                    {
                        "available": "8.9G"
                    },
                    {
                        "available": "8.9G"
                    }
                ]
            }
        ]
    },
];
const ListPage = () => {
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
        <div>
            {
                (!isLoading) &&
                servers.map(server => (
                    <div key={server.id}>
                        <a href={`/chart/${server.id}`}>{server.name}</a>
                    </div>
                ))
            }
        </div>
    );
}

export default ListPage;
