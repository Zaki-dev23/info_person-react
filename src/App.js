
import './App.css';
import ProfilePhoto from './Compenents/Profile/ProfilePhoto';
import FullName from './Compenents/Profile/FullName';
import Address from './Compenents/Profile/Address';
import Header from './Compenents/Profile/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='info'>
      <ProfilePhoto />
      <div className='NameAdress'>
      <FullName />
      <Address />
      </div>
      </div>
    </div>
  );
}

export default App;
