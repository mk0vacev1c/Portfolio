import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

let isLoading = true;

export default function Intro() {
  const textFieldRef = useRef(null)

  useEffect(()=> {
    if (textFieldRef.current && isLoading) {
      isLoading = false;

    init(textFieldRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
         strings: ['Software Engineer', 'Designer', 'Brand-Maker' ]
        });
  } }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Image.jpeg" alt="" />  
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Milos Kovacevic</h1>
          <h3>Freelance <span ref={textFieldRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}
