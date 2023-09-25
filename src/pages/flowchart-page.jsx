import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutFlow from '../components/flowchart'

const Flowchart = () => {
  const { id } = useParams();
  return (
      <div className="flowchart"><LayoutFlow/></div>
  )
}

export default Flowchart