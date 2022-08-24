import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {FaTwitter}  from 'react-icons/fa';


function App() {
  const [item, setItem] = useState("")
  let random = Math.floor(Math.random()*1643)+1;
  let baseUrl = `https://type.fit/api/quotes`;
  const tweet = () =>{
    window.location.href = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${item.text}"-${item.author}`
 }
 const wrapperFunction = () => {
  getApi();  
}

  useEffect(()=>{
    getApi();
  },[])

  const getApi = () =>{
    axios.get(baseUrl)
    .then((response) =>{
        setItem(response.data[random])
        console.log(response.data)
    })
    .catch(err =>{
      console.log(err);
    })
  }



  return (

    <div className="App flex h-screen bg-slate-800 ">
      <div id="quote-box" className=' m-auto max-w-4xl text-white'>
      <h1 className='text-center text-2xl md:text-4xl my-10 title'>Random Quote Generator</h1>
        <div className='mx-5  p-2 md:p-8'>
          <p id="text" className='text-xl md:text-4xl text-center italic'  data-aos="fade-up"  data-aos-duration="1000" >" {item.text} "</p>
          <p id="author" className='text-right mt-5 text-base md:text-xl '>-{item.author}</p>
            <div className='flex justify-between items-center'>
              <a id="tweet-quote" className='p-10 cursor-pointer hover:text-white ease-in-out' onClick={tweet} ><FaTwitter size={25} /></a>
              <button id="new-quote " className='content-center text-base md:text-2xl px-3 py-2 ring-4 ring-white transition ease-in-out delay-[5ms] hover:bg-white hover:text-black' onClick={wrapperFunction}>New Quote</button>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
