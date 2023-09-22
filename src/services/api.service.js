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
