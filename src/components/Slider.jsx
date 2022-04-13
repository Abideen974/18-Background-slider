import React, {useState, useEffect} from "react";
import "./slider.css";
import image1 from './Images/a.jpg';
import image2 from './Images/b.jpg';
import image3 from './Images/c.jpg';
import image4 from './Images/d.jpg';
function Slider() {
  const [count,setCount] = useState({count:0});

  const handleLeft = () => {
    if(count.count == 0 ){
      setCount({
        count:3
      })
      return;
    }

    setCount({
      count:count.count-1
    })
 
  }

  const handleRight = () => {

    if(count.count == 3 ){
      setCount({
        count:0
      })
      return;
    }
    setCount({
      count:count.count+1
    })
 
   
  }

  useEffect(()=>{
    const body = document.body;
    const slides = document.querySelectorAll('.slide')
    const bg = () =>{
      body.style.backgroundImage = slides[count.count].style.backgroundImage;
    }
    bg();

  },[count.count])
  return (
    <>
      <div className="slider-container">
        <div
          className={`slide ${count.count==0 ? "active" : ""}`}
          style={{ backgroundImage: `url(${image1})` }}
        ></div>
        <div
          className={`slide ${count.count==1 ? "active" : ""}`}
          style={{ backgroundImage: `url(${image2})` }}
        ></div>
        <div
          className={`slide ${count.count==2 ? "active" : ""}`}
          style={{ backgroundImage: `url(${image3})` }}
        ></div>
        <div
         className={`slide ${count.count==3 ? "active" : ""}`}
          style={{ backgroundImage: `url(${image4})` }}
        ></div>
          <button className="arrow left-arrow" id="left" onClick={handleLeft}>
            <i className="fas fa-arrow-left"></i>
        </button>
        <button className="arrow right-arrow" id="right" onClick={handleRight}>
            <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default Slider;
