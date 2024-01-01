import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const firstCall = async () => {
    try {
      const url = process.env.BACKEND_URL;
      await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    firstCall();
  }, []);

  return <div className="App"></div>;
}

export default App;
