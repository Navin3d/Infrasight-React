import { Box, Grid, Paper, Typography } from '@mui/material'

import React, { useEffect, useState } from 'react'
import Chart from '../components/chart'
// import MemoryIcon from '@mui/icons-material/Memory';
// import StorageIcon from '@mui/icons-material/Storage';
import { DataGrid } from '@mui/x-data-grid';
import { CPU_data, Disk_columns, Disk_rows, RAM_data } from '../components/data/graphData';
import '../styles/index.css'
import Loading from '../components/loading';


const Charts = () => {
    const [columnVisibilityModel, setColumnVisibilityModel] = useState({
        id: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [isCpu, setCpu] = useState(true);
    const [isRam, setRam] = useState(false);
    const [isDisk, setDisk] = useState(false);
    useEffect(() => {
        setDisk(false);
        setRam(false);
        setCpu(true);
    }, [])
    return (
        <>{isLoading ? <Loading /> : <div className="chart-back">
            <Grid
                container
                direction="row"
                justifyContent="center"
            // alignItems="center"
            >

                <Grid item xs={12} sm={12} md={12} lg={12} sx={{ marginTop: "3rem" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item ><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"

                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    76
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    CPU Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    86
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    RAM Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    34
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    DISK Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                        <Grid item><Paper sx={{ maxWidth: "500px", width: 250, padding: 2, borderRadius: 3, backgroundColor: "black", border: "1px solid white" }} elevation={1}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid item><Typography variant="h3" color="#3185FC" gutterBottom>
                                    40
                                </Typography></Grid>
                                <Grid item><Typography variant="subtitle2" color="white" gutterBottom>
                                    Overall Utilization %
                                </Typography></Grid>
                            </Grid>
                        </Paper></Grid>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm={10} md={10} lg={10}>

                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item lg={2} md={2} sm={10}>

                                    <Grid
                                        container
                                        direction="column"
                                        justifyContent="space-around"
                                    >
                                        <Grid item><button className={`${isCpu ? "selected" : "list_items"}`}
                                            onClick={() => {
                                                setCpu(true);
                                                setDisk(false);
                                                setRam(false);
                                            }}
                                        >CPU</button></Grid>
                                        <Grid item><button className={`${isDisk ? "selected" : "list_items"}`} onClick={() => {
                                            setCpu(false);
                                            setDisk(true);
                                            setRam(false);
                                        }}>DISK</button></Grid>
                                        <Grid item><button className={`${isRam ? "selected" : "list_items"}`} onClick={() => {
                                            setCpu(false);
                                            setDisk(false);
                                            setRam(true);
                                        }}>MEMORY</button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={9} md={9} sm={10}>
                                    {isCpu ? <Chart data={CPU_data} name="cpu" color="#3185FC" /> : <></>}
                                    {isDisk ? <Box sx={{ height: 400, width: '100%', boxShadow: 1, marginTop: 3 }}>
                                        <DataGrid
                                            sx={{ color: "#fff" }}
                                            rows={Disk_rows}
                                            columns={Disk_columns}
                                            columnVisibilityModel={columnVisibilityModel}
                                            initialState={{
                                                pagination: {
                                                    paginationModel: {
                                                        pageSize: 10,
                                                    },
                                                },
                                            }}
                                            pageSizeOptions={[5]}

                                            disableRowSelectionOnClick
                                        />
                                    </Box> : <></>}
                                    {isRam ? <Chart data={RAM_data} name="ram" color="#3185FC" /> : <></>}
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Grid item><button className="nav-btn">Back</button></Grid>
                <Grid item><button className="nav-btn">Next</button></Grid>
            </Grid>
        </div>}
        </>

    )
}

export default Charts