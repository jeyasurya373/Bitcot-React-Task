import Home from "./components/content/home/Home";
import Movies from "./components/content/movies/Movies";
import Series from "./components/content/series/Series";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh',overflow:'hidden'}}>
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route  path="/"  element={<Home/>} />
      <Route path="/movies"  element={<Movies/>}/>
      <Route path="/series" element={<Series/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;