import { Button, Input } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [emoji, setemoji] = useState("")
  const [a, seta] = useState([""])
  const url = 'https://emoji-api.com/emojis?search=' + emoji + '&access_key=YOUR API';
  const url2 = 'https://emoji-api.com/emojis?access_key=YOUR API';
  
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  


  useEffect( () => {
    axios.get(url)
    .then(response => {
      const data = response.data;

      seta(data[getRandomNumber(1, data.length)].character)
      console.log(a);
    })
    .catch(error => {
      console.log(error);
    });
  }, [emoji]);

  function pickRandom(){
    axios.get(url2)
    .then(response => {
      const data = response.data;
      seta(data[getRandomNumber(1, 1000)].character)
      console.log(a);
    })
    .catch(error => {
      console.log(error);
    });
  }


  return (
    <>

      <h1>{a}</h1>


      <Input  bg='#e8e5dc' color='#000000' boxShadow='lg' p='6' rounded='md' placeholder='Write something...' onChange={e => {setemoji(e.target.value)}}></Input>
      <Button bg='#e8e5dc' boxShadow='inner' p='6' rounded='md' onClick={pickRandom}>🎲</Button>
    </>
  )
}

export default App
