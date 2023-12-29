import { Button } from '@mui/material'
import React, { useState } from 'react'
import ProductionData from './ProductionData';

const SelectOption = ({option , setShowProductionData , showProductionData}) => {
//   const [showProductionData, setShowProductionData] = useState(false);
  const [bgBlue, setBgBlue] = useState('blue');
  

  return (
    <div >
        
        <h4 style={{textAlign: 'center' , fontWeight: 'bold'}}>
        {option}
        </h4>
        <div>
            <Button onClick={() => setShowProductionData(!showProductionData)} style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Production data</Button>
        </div>
        <div>
            <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Maintenance Data</Button>
        </div>
        <div>
            <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Work Permits</Button>
        </div>
        <div>
            <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Overview</Button>
        </div>
    </div>
  )
}

export default SelectOption