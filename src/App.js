import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero/hero';
import Section from './Component/Section';
import { fetchNewAlbums, fetchTopAlbums } from './Api/api';

function App() {
  
 const [TopAlbums,setTopAlbums] =useState([])
 const [NewAlbums,setNewAlbums] =useState([])

const generateData=async()=>{
  setTopAlbums(await fetchTopAlbums());
  setNewAlbums(await fetchNewAlbums());
}

useEffect(()=>{
  generateData();
},[])

  return (
    <>
  <Navbar/>
  <Hero/>
  <Section title='Top Albums' data={TopAlbums}/>
  <Section title='New Albums' data={NewAlbums}/>
  </>
  );
}

export default App;
