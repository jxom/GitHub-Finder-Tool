import { Provider as BumbagProvider } from 'bumbag';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <BumbagProvider>
      <Navbar />
      <SearchForm />
      <Footer />
    </BumbagProvider>
  );
}

export default App;
