import './home.css';
import { Link } from 'react-router-dom';
import placeholder from "../../../assets/placeholder.png";

function Home() {
  return (
    <div className='homeContainer'>
      <div className='homeLinkWrapper'>
        <Link to="/series" className='link'>
          <img src={placeholder} alt='series_img' className='homeSectionImg'/>
          <p className='homeTitle'>Series</p>
          <p className='popularTitle'>Popular Series</p>
        </Link>
        <Link to="/movies" className='link'>
        <img src={placeholder} alt='movies_img' className='homeSectionImg'/>
        <p className='homeTitle'>Movies</p>
        <p className='popularTitle'>Popular Movies</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;