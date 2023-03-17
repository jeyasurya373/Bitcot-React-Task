import "./footer.css";
import facebook from "../../assets/social/facebook-white.svg";
import twitter from "../../assets/social/twitter-white.svg";
import instagram from "../../assets/social/instagram-white.svg";
import appstore from "../../assets/store/app-store.svg";
import playstore from "../../assets/store/play-store.svg";
import windows from "../../assets/store/windows-store.svg";

function Footer (){
    return(
        <div className="footerContainer">
        <ul className="seoItems">
         <li className="seoItem">Home</li>
         <li className="seoItem">Terms and conditios</li>
         <li className="seoItem">Privacy Policy</li>
         <li className="seoItem"> Collection Statement</li>
         <li className="seoItem">Help</li>
         <li className="seoItem">Mange Account</li>
        </ul>
        <p className="copyRightTxt">Copyright &#169; 2016 Demo Streaming.All Rights Reserved.</p>
        <div className="footerIconContainer">
        <div className="socialIcons">
        <img src={facebook} alt="fb-social-icon" className="socialImg"/>
        <img src={twitter} alt="fb-social-icon" className="socialImg"/>
        <img src={instagram} alt="fb-social-icon" className="socialImg"/>
        </div>
        <div className="storeIcons">
        <img src={appstore} className='storeImg' alt="app-store-icon"/>
        <img src={playstore} className='storeImg' alt="play-store-icon"/>
        <img src={windows} className='storeImg' alt="window-store-icon"/>
        </div>
        </div>
        </div>
    )
}

export default Footer