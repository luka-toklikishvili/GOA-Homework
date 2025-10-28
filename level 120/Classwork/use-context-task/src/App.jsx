import { createContext, useContext } from "react";

const Context = createContext();

function App() {
  return (
    <Context.Provider value="luka">
      <Profile />
    </Context.Provider>
  );
}

function Profile() {
  const user = useContext(Context);
  return <h2>user: {user}</h2>;
}

export default App;

