"use client"
import './searchbar.css'
import { useState } from 'react'
import { scrapeProduct } from '../../../serve';
const Searchbar = () => {
    const [searchPrompt,setsearchPrompt] = useState('');
    // const form = document.getElementById('myform');
    const checkValidity = (url)=>{
      try{
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;
        if(
          hostname.includes('amazon.com') ||
          hostname.includes('amazon.') ||
          hostname.endsWith('amazon') 
          ){
            return true;
          }
      }
      catch(err){
        console.log(err);
      }
    }
   const postData = async(e)=>{
    e.preventDefault();

    const valid = checkValidity(searchPrompt);
    try{
      const product = await scrapeProduct(searchPrompt)
    }
    catch(err){
      console.log(err);
    }
  }
    
    const handleSubmit = (e)=>{
        // alert("Pressed")
        const name = e.target.name;
        const value = e.target.value;
    // console.log(name);
    // console.log(e.target.value);
    setsearchPrompt(value);
    // setUser({...user,[name]:value});
    }
  return (
    <div className='sbar'>
        <form id="myform">
        <input type="text" placeholder="Enter product link" className="searchbar" 
        value={searchPrompt}
        onChange={handleSubmit}
        />
        {/* <button type="submit" className="searchbtn" >Search</button> */}
        <input type="button" value="Search" className="searchbtn" onClick={postData}/>
        </form>
        
    </div>
  )
}

export default Searchbar