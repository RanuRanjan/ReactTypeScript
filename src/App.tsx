
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscas from './components/Oscas';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

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
      <Status status='success'/>
      <Heading>Welcome Again</Heading>
      <Oscas>
        <Heading>Hello EveryOne</Heading>
      </Oscas>
    </div>
  );
}

export default App;
