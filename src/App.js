import logo from "./logo.svg";
import "./App.css";
import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        start:"-50px 50%",
        end:"bottom 50%",
        markers:true,
        scrub:1,        
        toggleActions: "restart pause reverse pause ",
        onEnter:() => console.log("enter"),
        onLeave:() => console.log("leave"),
        onEnterBack:() => console.log("enters again"),
        onLeaveBack:() => console.log("leaves again"),
        onUpdate:(self) => console.log("update",self.progress.toFixed(3)),
        onToggle:(self) => console.log("toggled====>",self.isActive),
        toggleClass:true
      },
      x: 1000,
      rotation: 20,
      duration: 2,
    });
  },[])

  return (
    <div className="App">
      <div className="body">
        <div className="box a">a</div>
      </div>
      <div className="body">
        <div className="box b">b</div>
      </div>
      <div className="body">
        <div className="box c">c</div>
      </div>
    </div>
  );
}

export default App;
