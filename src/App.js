import { useReducer } from 'react';
import { Developer, addAction } from './components/Developer';
import './App.css';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';

function App() {
  const [users, dipatch] = useReducer(Developer, [{ name: 'ahmad', id: 1 }, { name: 'ahmad', id: 2 }, { name: 'ahmad', id: 3 }]);
  return (
    <div className="App">
      <DeveloperForm />
      <DeveloperList users={users} dispatch={dipatch} />
    </div>
  );
}

export default App;
