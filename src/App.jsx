import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import HomeIcon from '@mui/icons-material/Home';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { useState } from 'react';
import SelectOption from './components/SelectOption';
import ProductionData from './components/ProductionData';

function App() {
  const [option, setOption] = useState('');
  const [openMenu, setOpenMenu] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const [showSelectOptionComponent, setShowSelectOptionComponent] = useState(false);

  const [showProductionData, setShowProductionData] = useState(false);

  const optionSelects =['SM-01' , 'SM-02' , 'SPH-01' , 'SPH-02', 'SPH-03' , 'SPH-04', 'SPH-05' , 'SPH-06', 'SPH-07' , 'SPH-08', 'SPH-09' , 'SPH-10', 'SPH-11' , 'JR-01' , 'JR-02' , 'JR-03' , 'JR-04' , 'JR-05' , 'JR-06' , 'JR-07' , 'JR-08' , 'JR-09', 'JR-10' , 'JR-11' ]

  const handleChange = (event) => {
    setShowArrow(true)
    setShowSelectOptionComponent(true)
    setOption(event.target.value);
  };

  const openMenuHandler = ()=>{
    setOpenMenu(!openMenu)
  }

  const backHandler = ()=>{
    setShowArrow(false)
    setShowSelectOptionComponent(false)
  }

  
  return (
    <div style={{backgroundColor: '#ccc' , height: '100vh', position: 'relative'}}>
        {
          showProductionData && <ProductionData setShowProductionData={setShowProductionData} />
        }
      <div onClick={openMenuHandler} style={{ position: 'absolute',zIndex: '222', top:'20px', right:'20px' ,backgroundColor: '#FFFAFA' , borderRadius: '10px', cursor: 'pointer', display: 'flex',alignItems: 'center', justifyContent:'center' , width:'50px' , height: '50px' }}>
        <MenuIcon />
      </div>
      {
        openMenu &&
        <div style={{ position: 'absolute',zIndex: '221', top:'20px', right:'20px' , padding:'20px'  ,backgroundColor: '#FFFAFA' , borderRadius: '10px' , width: '300px' }}>
          <div style={{ display: 'flex' , justifyContent: 'space-between' , paddingBottom:'20px'}}>
            {
              showArrow ? <ArrowCircleLeftIcon onClick={backHandler} /> : <div></div>
            }
            <HomeIcon />
            <HomeIcon />
          </div>
          {
            showSelectOptionComponent ? <SelectOption option={option} showProductionData={showProductionData} setShowProductionData={setShowProductionData} /> :
            <>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Choose the Well</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={option}
                  label="Age"
                  onChange={handleChange}
                >
                  {
                    optionSelects.map((optionSelect , index) => <MenuItem key={index} value={optionSelect}>{optionSelect}</MenuItem>)
                  }
                </Select>
              </FormControl>
              <div>
                <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">North Manifold</Button>
              </div>
              <div>
                <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Receiving Area</Button>
              </div>
              <div>
                <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">JR CLSR</Button>
              </div>
              <div>
                <Button style={{backgroundColor:'#FFFAFA' , width: '100%', color:'#000', margin: '1vh 0'}} variant="contained">Field overview</Button>
              </div>
            </>

          }
        </div>


      }
      
    </div>
  );
}

export default App;
