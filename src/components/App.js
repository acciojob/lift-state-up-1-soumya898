
import React from "react";
import './../styles/App.css';

const App = () => {
 const [showModel, setShowModel] = useState(false);

  function toggleModel() {
    setShowModel(!showModel);
  }

  return (
    <div className="App">
      <div className="parent">
        <h1>Parent Component</h1>
        <div className="child">
          <h2>Child Component</h2>

          <button onClick={toggleModel}>Show Model</button>
          
          {showModel && (
            <div className="model">
              <h2>Model Content</h2>
              <p>This is a model content</p>
              // <button onClick={toggleModel}>X</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );


  
}

export default App
