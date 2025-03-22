import HeaderComponent from '../components/HeaderComponent/HeaderComponent';
import LandingComponent from '../components/LandingComponent/LandingComponent';
import './App.css';

// set page title
const webName = process.env.REACT_APP_TITLE
document.title = `${webName} | Home`

const LandingPage = () => {
  return (
    <main>
        <HeaderComponent/>   
        <LandingComponent/>
    </main>
  );
}

export default LandingPage;
