import React from 'react';
import Name from './Name';
import Surname from './Surname';


    const name =['John', 'Bobby', 'Smith','Dan', 'Steve']
    const surname =['Smith', 'Pedersen', 'Johnson', 'Lee', 'Brown']
 
    function App (){
      return(
        <div className="App">
          {name.map((name, index) =>(
            <div key={index}>
              <Name name={name} />
              <Surname surname={surname[index]} />
            </div>
          ))}
          </div>
      )
    }

export default App
