import react from "react";
import nav from "../index.jsx"
export default function NavItem({ title }) {
    let elements = title.map((ev, index) => {
        return <div className="nav__item-content"> <span key={index} >{ev}</span>
            <svg viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61035 1.40001L3.66535 3.45501C3.75903 3.54814 3.88576 3.60041 4.01785 3.60041C4.14994 3.60041 4.27667 3.54814 4.37035 3.45501L6.37035 1.45501" stroke="#6A983C" strokeWidth="1.5" strokeLinecap="round" strokeLineJoin="bevel" />
            </svg></div >
    })
    return (
        <div className="nav__item">
            {elements}
            {/* <svg viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.61035 1.40001L3.66535 3.45501C3.75903 3.54814 3.88576 3.60041 4.01785 3.60041C4.14994 3.60041 4.27667 3.54814 4.37035 3.45501L6.37035 1.45501" stroke="#6A983C" strokeWidth="1.5" strokeLinecap="round" strokeLineJoin="bevel" />
            </svg> */}

        </div>
    )
}