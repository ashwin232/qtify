import './section.css';
import Card from '../Card'
import { useState } from 'react';
import Carousel from '../Carousel'


export default({title,data})=>{
      const [isCollapse,setIsCollapse]= useState(false)

    return <div className='section'>
      <div className='sec-header'>
        <h1 className='top'>{title}</h1>
        <h1 className='sec-toggle-btn'
        onClick={()=>{
          setIsCollapse(!isCollapse)
        }}>{isCollapse ?'Show All':'collapse'}</h1>
      </div>
     {isCollapse?<Carousel data={data}/> : <div className='card-container'>
        {data.map(cardData=><Card
           key={cardData.id}
          imgSrc={cardData.image}
          title={cardData.title}
          follows={cardData.follows}/>)}
        </div>}    
    </div>
}