import axios from 'axios';

const BACKEND_ENDPOINT='https://qtify-backend-labs.crio.do'

export const fetchTopAlbums=async ()=>{
    try{
        const res=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return res.data;
    }catch(err){
        console.log(err);
    }
}

export const fetchNewAlbums=async ()=>{
  try{
    const res=await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  }catch(err){
    console.log(err)
  }
}


export const fetchSongs=async ()=>{
    try{
      const res=await axios.get(`${BACKEND_ENDPOINT}/songs`);
      return res.data;
    }catch(err){
      console.log(err)
    }
  }



  export const fetchGenreList=async()=>{
    try{
        const allobj={
            key:"all",
            label:'ALL'
        }
        const res=await axios.get(`${BACKEND_ENDPOINT}/genres`);
        const genreData=res.data.data;
        genreData.unshift(allobj);
        return(genreData);
    }
    catch(err){
        console.log(err);
    }
}  

