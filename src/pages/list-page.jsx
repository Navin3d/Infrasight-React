import React, { useState } from 'react'
import Box from '../components/box'
import Loading from '../components/loading'
import { useNavigate } from 'react-router-dom';

const ListPage = () => {
  const[isLoading,setIsLoading]=useState(false);
  const navigate = useNavigate();

  return (
    <>

    {isLoading?<Loading/>
    : <div className='listpage'>
        <Box name="Voldemart" cpu="89" ram="60" disk="37" onClick={()=>navigate("/chart")}/>
          <Box name="ConnectVerse" cpu="15" ram="20" disk="35" onClick={() => navigate("/chart")} />
          <Box name="LegalChain" cpu="52" ram="77" disk="12" onClick={() => navigate("/chart")} />
          <Box name="Innovatree" cpu="77" ram="80" disk="50" onClick={() => navigate("/chart")} />
    </div>
}
    </>
  )
}

export default ListPage