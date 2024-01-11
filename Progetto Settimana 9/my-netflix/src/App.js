import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyHeader from './components/MyHeader';
import MyGalleryA from './components/MyGalleryA';
import MyGalleryB from './components/MyGalleryB';
import MyGalleryC from './components/MyGalleryC';
import MyGalleryD from './components/MyGalleryD';
import MyFooter from './components/MyFooter';



function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />
      <MyGalleryA />
      <MyGalleryB />
      <MyGalleryC />
      <MyGalleryD />
      <MyFooter />
    </div>
  );
}

export default App;
