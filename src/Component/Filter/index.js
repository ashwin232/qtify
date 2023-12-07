import Carousel from "../Carousel";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './fsec.css'
import { useState } from "react";



// eslint-disable-next-line import/no-anonymous-default-export
export default ({title,data,filters,executeFilter})=>{

    const[selectedTab,setSelectedTab]=useState(0);
    return <div className='section'>
      <div>
        <h1 className='top'>{title}</h1>
      </div>
      <Tabs
      value={selectedTab}
      onChange={(e,value)=>{
          executeFilter(filters[value].key)
            setSelectedTab(value)
      }}
      TabIndicatorProps={{
        style:{
          backgroundColor:'var(--css-primary)'
        }
      }}
      >
        {filters.map(f=><Tab className='tab'key={f.key} label={f.label}/>)}
      </Tabs>
     <Carousel data={data} navId='filter'/> 
    </div>
}