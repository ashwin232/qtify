import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero/hero';
import Section from './Component/Section';
import Filter from './Component/Filter';
import axios from 'axios';


const ENDPOINT='https://qtify-backend-labs.crio.do/'

function App() {
  
const[TopAlbums,setTopAlbums]=useState([])
const[NewAlbums,setNewAlbums]=useState([])
const[songs,setsongs]=useState([])
const[genres,setgenres]=useState([])
const[filteredsongs,setfilteredsongs]=useState([])


useEffect(()=>{
  axios.get(`${ENDPOINT}/albums/top`)
.then(({data})=>{
  setTopAlbums(data);
})
axios.get(`${ENDPOINT}/albums/new`)
.then((res)=>{
  setNewAlbums(res.data);
})
axios.get(`${ENDPOINT}/songs`)
.then((res)=>{
  setsongs(res.data);
  setfilteredsongs(res.data)
})
axios.get(`${ENDPOINT}genres`)
.then((res)=>{
  setgenres([{"key":"all","label":"All"},...res.data.data]);
})
},[])


  return (
    <>
  <Navbar/>
  <Hero/>
  <Section navId='ta' title='Top Albums' data={TopAlbums}/>
  <Section navId='na'title='New Albums' data={NewAlbums}/>
  <Filter title='songs' data={filteredsongs} filters={genres}
  executeFilter={(genre)=>{
    if(genre==='all'){
      setfilteredsongs(songs)
    }else{
      setfilteredsongs(songs.filter(song=>song.genre.key===genre))
    }
  }}
  />  
  </>
  );
}

export default App;
