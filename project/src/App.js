import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto'
import FullName from './Component/Profile/FullName'
import Address from './Component/Profile/Address'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <>
      <header>
        <div className="container text-center">

          <div className="logo">
            <h1><b>Welcom to My Profil</b></h1>
          </div>

          <h1>Full Strack Developper</h1>

        </div>
      </header>
      <div className="contain" >


        <ProfilPhoto />

        <br />
        <FullName />
        <Address />
      </div>
      <div className="share-button">
        <span>Fllow Me</span>
        <a href="#" ><i className="fa fa-facebook-f"></i></a>
        <a href="#" ><i className="fa fa-twitter"></i></a>
        <a href="#" ><i className="fa fa-instagram"></i></a>
        <a href="#" ><i className="fa fa-linkedin"></i></a>

      </div>
    </>
  );
}

export default App;
