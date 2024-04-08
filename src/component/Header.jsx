import React from "react"
const Header = ({styleBox}) => {
    return (
        <div style={{backgroundColor: 'green', padding: '5px 0', margin: '10px'}}>
            <ul style={styleBox}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header