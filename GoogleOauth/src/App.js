// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import { Home } from './components/Home';
// import  { Layout } from './components/Layout';
// import { Books } from './components/Books';
// import { Cart } from './components/Cart';
// import { Apis } from './components/Apis';
// import { NotFound } from './components/NotFound';
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';
import { useSpring,animated } from 'react-spring';
function NumberAnimation({n}){
  const {number} = useSpring({
    from : {number : 0},
    number : n,
    delay : 200,
    config : {mass:1,tension:20,friction:10},
  })

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
function App() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[]);
  return (
    // <BrowserRouter>
    // <Routes location="/hello">
    //  <Route path="/hello" element={<Home name="ramesh" />} />
    //  </Routes>
    // <Routes >
    //  <Route path="/hello" element={<Layout />}>
    //    <Route index element={<Home name="devaraj" age="57"/>} />
    //    <Route path="books" element={<Books />} />
    //    <Route path="books/:id" element={<Books />} />
    //    <Route path="cart" element={<Cart />} />
    //    <Route path="apis" element={<Apis/>} />
    //  </Route>
    //  <Route path="*" element={<NotFound />} />
    //  </Routes>
    // </BrowserRouter>
   <div>
    <div className='num'>
    <NumberAnimation n={100000000} />
    </div>
    <div data-aos="zoom-in"  data-aos-duration="1000"></div>
    <div data-aos="fade-up"></div>
    <div data-aos="fade-up"></div>
    <div data-aos="fade-up"></div>
    <div data-aos="fade-up"></div>
    <div data-aos="fade-up"></div>
    <div data-aos="zoom-in"></div>
    <div data-aos="zoom-in"></div>
    <div data-aos="zoom-in"></div>
    <div data-aos="zoom"></div>
    <div data-aos="fade"></div>
    <div data-aos="fade"></div>
    <div data-aos="fade"></div>
    <div data-aos="fade"></div>
    <div data-aos="fade"></div>
   </div>
  );
}

export default App;
