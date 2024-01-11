import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyGalleryHP from './components/MyGalleryHP';
import MyGalleryLOTR from './components/MyGalleryLOTR';
import MyHeader from './components/MyHeader';
import MyGallerySW from './components/MyGallerySW';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />
      <MyGalleryHP />
      <MyGalleryLOTR />
      <MyGallerySW />
      <MyFooter />
    </div>
  );
}

export default App;
