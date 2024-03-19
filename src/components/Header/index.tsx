// imports
import { ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./NavBar";

// Function Component
export default function Header({offset}: {offset: number}) {
    // stateful logic

    // JSX
    return (
        <ParallaxLayer offset={offset} speed={2} style={{zIndex: "3"}}>
            <header id="header" className="bg-white px-12">
                <div className="header-container flex items-center">
                    <div className="header-title">
                        <h1>Public Font <span className="text-brand">Curation</span></h1>
                    </div>
                    <div className="header-nav">
                        <Navbar />
                    </div>
                </div> 
            </header>
        </ParallaxLayer>
    )
};