import { Provider as BumbagProvider } from "bumbag";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";

import "./App.css";

function App() {
  return (
    <BumbagProvider>
      <Navbar />
      <SearchForm />
    </BumbagProvider>
  );
}

export default App;
