export const CPU_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        cpu: 80,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        cpu: 100,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        cpu: 70,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        cpu: 10,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        cpu: 20,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        cpu: 40,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        cpu: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        cpu: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        cpu: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        cpu: 100,
    },
];
export const Disk_columns = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    {
        field: 'filesystem',
        headerName: 'File System',
        width: 150,
        flex:1,
        // align: "center",
        // colSpan: 2,
        // editable: true,
    },
    {
        field: 'size',
        headerName: 'Size',
        // type: 'number',
        width: 100,
        flex: 1,
        // align: "center",
        // editable: true,
    },
    {
        field: 'used',
        headerName: 'Used',
        // type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'avail',
        headerName: 'Avail',
        // type: 'number',
        width: 100,
        flex: 1,
        // align: "center"
        // editable: true,
    },
    {
        field: 'useper',
        headerName: 'Use %',
        // type: 'number',
        width: 100,
        flex: 1,
        // align: "center",
        // editable: true,
    },
    // {
    //     field: 'used',
    //     headerName: 'Used',
    //     type: 'number',
    //     width: 200,
    //     editable: true,
    // },

    {
        field: 'mountedOn',
        headerName: 'Mounted On',
        width: 150,
        // align: "center",
        type: 'text',
        colSpan: 2,
        flex: 1,
        // editable: true,
    },

];

export const Disk_rows = [
    { id: 1, filesystem: 'Project1', size: 10, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 2, filesystem: 'Project2', size: 20, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 3, filesystem: 'Project3', size: 30, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 4, filesystem: 'Project4', size: 40, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 5, filesystem: 'Project5', size: 50, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 6, filesystem: 'Project6', size: 60, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 7, filesystem: 'Project7', size: 70, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 8, filesystem: 'Project8', size: 80, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },
    { id: 9, filesystem: 'Project9', size: 90, used: 35, avail: 28, useper: 20, mountedOn: 'localdisk:C/' },

];
export const DISK_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        disk: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        disk: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        disk: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        disk: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        disk: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        disk: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        disk: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        disk: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        disk: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        disk: 100,
    },
];

export const RAM_data = [
    {
        name: 'Day 1',
        // uv: 4000,
        // pv: 2400,
        ram: 25,
    },
    {
        name: 'Day 2',
        // uv: 3000,
        // pv: 1398,
        ram: 45,
    },
    {
        name: 'Day 3',
        // uv: 2000,
        // pv: 9800,
        ram: 33,
    },
    {
        name: 'Day 4',
        // pv: 3908,
        ram: 50,
    },
    {
        name: 'Day 5',
        // uv: 1890,
        // pv: 4800,
        ram: 75,
    },
    {
        name: 'Day 6',
        // uv: 2390,
        // pv: 3800,
        ram: 20,
    },
    {
        name: 'Day 7',
        // uv: 3490,
        // pv: 4300,
        ram: 20,
    },
    {
        name: 'Day 8',
        // uv: 1890,
        // pv: 4800,
        ram: 15,
    },
    {
        name: 'Day 9',
        // uv: 2390,
        // pv: 3800,
        ram: 35,
    },
    {
        name: 'Day 10',
        // uv: 3490,
        // pv: 4300,
        ram: 70,
    },
];
