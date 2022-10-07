import React, { useRef, useEffect, memo } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/navstyles.css";
import "./css/home.css";
import "./css/input.css";
import "./css/cards.css";
import "./css/reviews.css";
import "./css/DarkMode.css";
import styles from "./css/styles.css";
import { BrowserRouter } from "react-router-dom"
import { motion } from "framer-motion"
import { type, type as loopedType } from "@camwiegert/typical";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

const Typical = ({ steps, loop, className, wrapper = "p" }) => {
  const typicalRef = useRef(null);
  const Component = wrapper;
  const classNames = [styles.typicalWrapper];
  
  if (className) {
    classNames.unshift(className);
  }

  useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current, ...steps, loopedType);
    } else if (typeof loop === "number") {
      type(
        typicalRef.current,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(typicalRef.current, ...steps);
    }
  });

  return <Component ref={typicalRef} className={classNames.join(' ')}/>;
}

export default memo(Typical)
