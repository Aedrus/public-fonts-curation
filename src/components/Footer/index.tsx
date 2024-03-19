import { ParallaxLayer } from "@react-spring/parallax"
import { off } from "process"

// Variables
const brandLogo = "../icon.png"

// Component Function
export default function Footer({offset, factor, speed}: {offset: number, factor: number, speed: number}) {
    // Logic

    // JSX
    return (
        <ParallaxLayer offset={offset} factor={factor} speed={speed}>
            <footer id="footer" className="grid grid-cols-2 px-8 items-center">
                <div className="">
                    <h2>Public Font <span className="text-brand">Curation</span></h2>
                </div>
                <div className="col-start-3">
                    <h3>Socials</h3>
                </div>
            </footer>
        </ParallaxLayer>
    )
}