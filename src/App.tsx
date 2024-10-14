
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const PersonName={
    firstname:"Simran",
    lastname:"Singh"
  }
  
  const nameList=[
    {first:"ranu",
      last:"ranjan"
    },
    {first:"ranu",
      last:"ranjan"
    },
    {first:"ranu",
      last:"ranjan"
    }
  ]

  return (
    <div className="App">
      <Greet name='Welcome' messageNumber={2} isloggedIn={false} />
      <Person name={PersonName}/>
      <PersonList name={nameList}/>
    </div>
  );
}

export default App;
