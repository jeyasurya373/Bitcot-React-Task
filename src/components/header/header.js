import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';

function Header (){
    const [title,setTitle] = useState('');
    const location = useLocation();
    const path =location.pathname;

    useEffect(() => {
        if (path === '/movies') {
            setTitle('Popular Movies')
        } else if (path === '/series') {
            setTitle('Popular Series')
        } else {
            setTitle('Popular Titles')
        }
    }, [path]);

    return(
        <div className="headerContainer">
            <div className='headerItemWrapper'>
             <h2 className='headerTitle'>DEMO Streaming</h2>
            <div className='headerRightSectionWrapper'>
             <button className='headerLoginBtn'>Login</button>
             <button className='headerTrialBtn'>Start your free trial</button>
            </div>
            </div>
            <div className='titleWrapper'>
            <p className='titleWrapperName'>{title}</p>
            </div>
        </div>
    )
};

export default Header