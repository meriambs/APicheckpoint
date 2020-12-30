
import './App.css';
import UserList from './UserList'
function App() {
  return (
    <div className="App">
      <div><h2>User List</h2></div>
      <div  style={{listStyle:"none"}}>
    <UserList/></div>
    </div>
  );
}

export default App;
