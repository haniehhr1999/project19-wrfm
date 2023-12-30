import { Button } from '@mui/material'
import React, { useState } from 'react'
import BasicModalProductionData from './BasicModalProductionData';
import BasicModal from './BasicModalProductionData';
import BasicModalMaintenanceData from './BasicModalMaintenanceData';
import BasicModalWorkPermis from './BasicModalWorkPermis';

const SelectOption = ({option , setShowProductionData , showProductionData}) => {
//   const [showProductionData, setShowProductionData] = useState(false);
  const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
 

  return (
    <div >
        
        <h4 style={{textAlign: 'center' , fontWeight: 'bold'}}>
        {option}
        </h4>
        <div>
            <BasicModalProductionData name={'Production Data'} />
        </div>
        <div>
            <BasicModalMaintenanceData name={'Maintenance Data'} />
        </div>
        <div>
            <BasicModalWorkPermis      name={'WorkPermis'}/>
        </div>
        <div>
            <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Overview</Button>
        </div>
    </div>
  )
}

export default SelectOption