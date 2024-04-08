import React, {useState} from 'react'
import styles from "./../styles/toggledarkmode.module.css"

const ToggleDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <React.Fragment>
    <div>
      <button onClick={() => setIsDarkMode(curr => !curr)}>{isDarkMode ? "Go to light mode" : "Go to Dark mode"}</button>
    </div>
    <div className= {isDarkMode ? styles.dark : styles.light}>
        <p>ToggleDark/LightMode</p>
    </div>
    </React.Fragment>
  )
}

export default ToggleDarkMode
