
import './App.css';
import { Sidebar, Chat } from './components'
function App() {
  return (
    <div className="App">
      <div className='app-main-container'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  );
}

export default App;
