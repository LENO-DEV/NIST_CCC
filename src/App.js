import React, { useContext } from 'react'
import Navbar from './Component/Navigation/Navbar';
import SideBar from './Component/Navigation/SideBar'
import Home from './Pages/Home';
import { Switch, Route } from 'react-router-dom';
import { GlobalContext } from './Context';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';
import Tech from './Pages/Tech';
import Members from './Pages/Members/Members';
import Footer from './Component/Footer/Footer';
import MemberBrief from './Pages/Members/MemberBrief';
import EventPage from './Pages/Events/EventPage/EventPage';
import OneEvent from './Pages/Events/EventPage/OneEvent';
import ReactConfetti from 'react-confetti';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Hiring from './Pages/Hiring';
import Blogs from './Pages/Blogs';



const App = () => {
  AOS.init();
  const { modalOpen, dis } = useContext(GlobalContext);



  return <>
    <SideBar />
    <div className={`${modalOpen ? 'opacity--reduce' : null}`}>
      {dis ? <ReactConfetti numberOfPieces="250" run={dis} /> : <ReactConfetti numberOfPieces="0" run="false" />}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/events-all" component={EventPage} />
        <Route path="/events-upcoming" component={EventPage} />
        <Route path="/events-previous" component={EventPage} />
        <Route path="/events-details" component={OneEvent} />
        <Route exact path="/members" component={Members} />
        <Route path="/members/brief" component={MemberBrief} />
        <Route path="/tech" component={Tech} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/hiring" component={Hiring} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="*" component={Error} />
      </Switch>
      <Footer />
    </div>
  </>
}

export default App;
