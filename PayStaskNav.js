import React  , {useState} from "react" 
import {Link, BrowserRouter as Router, } from "react-router-dom"

import "../src/CSS/easyframer.css"
import "../src/CSS/Tricks/style.css"
import "../src/CSS/Tricks/nav.css"
const PayStaskNav = () => {
    let fullWidthClass = [
        "full-frame " , 
        "bg-black "  , 
        "fixed-to-top " , 
        "pad-top-10 " , 
        "pad-bottom-10 " ,  
        "border-bottom-grey "
    ] 

    let mobileClass = "mobile-PayStaskNavs d-md-hide"
    let [isOpen , setIsOpen] = useState(false)
    let [mClass , setMClass] = useState(" d-nothing out-of-view")
    let [toggler , setToggler] = useState("mobile-toggler relative change-toggle pad-top-15")
    const openNav = () => {
        setIsOpen(!isOpen)
        setMClass(mClass.includes("d-nothing") ? "" : " d-nothing out-of-view")
        setToggler(toggler.includes("change-toggle") ? 
            "mobile-toggler relative pad-top-15" 
            : "mobile-toggler relative change-toggle pad-top-15")
    }
    return (
        <Router>
            <div className={fullWidthClass.join("")}>
                <header className="framer1 ">
                    <section className="frame justify-content-between">
                        <div className="d-sm-hide">
                            <Link to="/" className="brand-name">
                                <h1 className="dark-text">PayStack</h1>
                            </Link>
                        </div>
                        <nav 
                            className="d-sm-hide md-nav1 pad-top-15"
                        >
                            <Link to="/oursolution" tabIndex="-1">Why Paystack</Link>
                            <Link to="/developers">Customers</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/resources">Learn</Link>
                            <Link to="/resources">Developers</Link>
                            <Link to="/resources">Support</Link>
                            <Link to="/sign in">Loging</Link>
                            <Link to="/create account" className="md-btn-register1 no-border no-outline radius-5">Create free account</Link>
                        </nav> 
                        <div className="d-md-hide pad-top-15">
                            <a className="brand-name" href="/">
                                <h1 className="dark-text" 
                                    style={{fontWeight:"700" ,fontSize:"1.9rem"}}
                                > 
                                    PayStack
                                </h1>
                            </a>
                        </div> 
                        <div className="d-md-hide search-and-toggle pad-top-15">
                            <button 
                                className={toggler}
                                onClick={openNav}
                            >
                                <span/>   
                                <span/>  
                                <span/>  
                            </button> 
                        </div> 
                        {isOpen ?
                            <section
                                className={mobileClass + mClass}
                            >
                                <Link to="/oursolution" tabIndex="-1">Why Paystack</Link>
                                <Link to="/developers">Customers</Link>
                                <Link to="/pricing">Pricing</Link>
                                <Link to="/resources">Learn</Link>
                                <Link to="/resources">Developers</Link>
                                <Link to="/resources">Support</Link>
                                <Link to="/sign in">Loging</Link>
                                <Link to="/create account" className="md-btn-register no-border no-outline radius-5">Create free account</Link>
                            </section>
                            : null 
                        }
                    </section>
                </header>
            </div>
        </Router>
        
    )
}

export default PayStaskNav