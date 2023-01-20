import "./topbar.scss"
import { MdPerson, MdEmail } from "react-icons/md";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">MKovacevic</a>
          <div className="itemContainer">
            <MdPerson className="icon"/>
            <span>+381 65 22 66 369</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon"/>
            <span> <a href="mailto:m_k0vacev1c@hotmail.com">m_k0vacev1c@hotmail.com </a> </span>
          </div>
        </div>
        <div className="right">
                 <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
                 </div>
        </div>
        </div></div>
  )
}
