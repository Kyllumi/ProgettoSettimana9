import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import MyGalleryA from './components/MyGalleryA';
import MyGalleryB from './components/MyGalleryB';
import MyGalleryC from './components/MyGalleryC';
import MyGalleryD from './components/MyGalleryD';
import MyFooter from './components/MyFooter';
import MyAccount from './components/MyAccount';
import MySettings from './components/MySettings';



function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* Commentare il successivo blocco di codice per visualizzare pagina profilo/impostazioni */}
      <MyHeader />
      <MyGalleryA />
      <MyGalleryB />
      <MyGalleryC />
      <MyGalleryD />

      {/* Decommentare il successivo blocco di codice per visualizzare pagina profilo/impostazioni */}
      {/* <MyAccount /> */}
      {/* <MySettings /> */}

      <MyFooter />
    </div>
  );
}

export default App;
