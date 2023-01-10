import "./App.css";

import Map from "./Map/Map";

const App = () => {
  return (
    <div className="app">
      <header className="app-header"></header>

      <h1>Functional Component</h1>

      <div className="maps">
        <Map />
      </div>
    </div>
  );
};

export default App;
