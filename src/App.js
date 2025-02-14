import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ServiceArea from './components/ServiceArea';
import Destination from './components/Destination';
import TravelPoint from './components/TravelPoint';
import Trustedclient from './components/Trustedclient';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ServiceArea/>
      <Destination/>
      <TravelPoint/>
      <Trustedclient/>
      <Footer/>
    </div>
  );
}

export default App;
