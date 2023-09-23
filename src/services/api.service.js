import axios from "axios";


const BASEURL = "http://localhost:8081";
const LOGINURL = `${BASEURL}/auth/login`;
const PRESENTATIONURL = `${BASEURL}/graphql`;

export const login = async (loginData) => {
    try {
        const response = await axios.post(LOGINURL, loginData);
        return response;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServerByOneMonth = async () => {
    const to = getTodaysDate();
    const from = getOneMonth(to);
    try {
        const query = `query {
            servers(limit: 100, page: 0, from: "${from}", to: "${to}") {
                id,
                name,
                description,
                ramCPU {
                    availableRam,
                    totalRam,
                    cpuPerformance,
                },
                discStats {
                    discMounts {
                        use,
                    },
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        let returnServers = [];
        for (let server of data["data"]["servers"]) {
            server["maxRAMUsed"] = 0;
            server["maxCPUUsed"] = 0;
            server["maxDisc"] = 0;
            for (let ramCPU of server["ramCPU"]) {
                try {
                    const totalRam = ramCPU["totalRam"];
                    const availableRam = ramCPU["availableRam"];
                    const usedRam = totalRam - availableRam;
                    const usePercentage = Math.round((usedRam / totalRam) * 100);
                    if (server["maxRAMUsed"] < usePercentage)
                        server["maxRAMUsed"] = usePercentage;
                    const cpuPerformance = ramCPU["cpuPerformance"];
                    if (server["maxCPUUsed"] < cpuPerformance)
                        server["maxCPUUsed"] = cpuPerformance;
                } catch (e) {
                    console.log(e);
                }
            }
            for (let discStat of server["discStats"]) {
                try {
                    for (let discMount of discStat["discMounts"]) {
                        const use = discMount["use"].split("%")[0];
                        if (server["maxDisc"] < use)
                            server["maxDisc"] = use;
                    }
                } catch (e) {
                    console.log(e);
                }
            }
            returnServers.push(server);
        }
        return returnServers;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServersList = async () => {
    try {
        const query = `query {
            servers(limit: 100, page: 0) {
                id,
                name,
                description,
                ramCPU {
                    availableRam,
                    cpuPerformance
                },
                discStats {
                    discMounts {
                        available,
                    }
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        return data["data"]["servers"];
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export const getServer = async (id) => {
    try {
        const query = `query {
            server(id: "${id}") {
                name,
                description,
                host,
                isActive,
                ramCPU {
                    availableRam,
                    totalRam,
                    cpuPerformance,
                    capturedAt
                },
                discStats {
                    discMounts {
                        fileSystem,
                        used,
                        use,
                        available,
                        size
                    }
                    capturedAt
                }
            }
        }`;
        const { data } = await axios.post(PRESENTATIONURL, { query });
        console.log("data: ", data["data"]["server"]);
        return data["data"]["server"];
    } catch (e) {
        console.log(e);
        throw e;
    }
}

const getOneMonth = (currentDate) => {
    try {
        const inputDateObj = new Date(currentDate);
        inputDateObj.setMonth(inputDateObj.getMonth() - 1);
        const result = inputDateObj.toISOString().slice(0, 10);
        return result;
    } catch (error) {
        return "Invalid date format. Please use yyyy-MM-dd.";
    }
}

const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
