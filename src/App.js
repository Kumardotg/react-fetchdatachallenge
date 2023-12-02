import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
import Form from './Form';
import List from './List';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com';
  const [request, setRequest] = useState('posts');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const getData = async () =>{
      try{
         
          const reqUrl = `${API_URL}/${request}`;
          console.log(reqUrl)
          const response = await fetch(reqUrl);
          if(!response.ok) throw Error('Did not receive expected data');
          const listItems  = await response.json();
          
          setItems(listItems);
      }
      catch(err){
          console.log(err.message);
      }
      finally{
      }
    }

(async() => await getData())();

 },[request]);

 
  return (
    <div className="App" >
     
       <Form request ={request} setRequest={setRequest} />
       <List items= {items}></List>

    </div>
  );
}

export default App;
