import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MyGalleryA from './components/MyGalleryA';
import MyGalleryB from './components/MyGalleryB';
import MyHeader from './components/MyHeader';
import MyGalleryC from './components/MyGalleryC';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyHeader />
      <MyGalleryA />
      <MyGalleryB />
      <MyGalleryC />
      <MyFooter />
    </div>
  );
}

export default App;
