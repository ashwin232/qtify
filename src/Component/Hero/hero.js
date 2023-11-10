import styles from './hero.css';
import heroImage from '../../Assets/vibrating-headphone.svg';

const HeroSection=()=>{
    return(
        <div className='heroSection'>
        <div>
            <h2>100 thousand songs,ad free</h2>
            <h2>over thousand songs</h2>
        </div>
            <div>
                <img src={heroImage} alt=""/>
            </div>
        </div>
    )
}
export default HeroSection;