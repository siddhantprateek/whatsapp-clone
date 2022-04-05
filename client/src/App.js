
import './App.css';
import { Sidebar, Chat } from './components'
import Pusher from 'pusher-js'
import { useEffect, useState } from 'react';
import axios from './config/axios';
function App() {
  const [ messages, setMessages ] = useState([])
  useEffect(() => {

    axios.get('/message/sync')
    .then(response => {
      console.log(response.data)
      setMessages(response.data)
    })
  },[])

  useEffect(() => {
    const pusher = new Pusher('fa8d3cdfdc57d878364c', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=>{
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  return (
    <div className="App">
      <div className='app-main-container'>
        <Sidebar message={messages[messages.length - 1]}/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
