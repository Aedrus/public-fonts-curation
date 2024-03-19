// Imports
import { useState } from "react";
import { CaretRight } from "@phosphor-icons/react";
import "./FontCard.css";

// Function Component
// Font cards are dynamic and are only updated as they are scrolled into the vp.
// Font cards have the name in a normal font with the preview below.
export default function FontCard({ title }: { title: string}) {
    // Logic
    const [ddToggled, setToggled] = useState(false)

    function toggleCardBody() {
        if (ddToggled === false) {
            setToggled(true)
        }
        else {
            setToggled(false)
        }
    }

    // Function Component
    return (
        <div className="font-card-wrapper">
            {/* Links */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link rel="stylesheet" href="src/css/FontCard.css" />

            {/* font card header */}
            <div className="font-card py-6 border-b-2 bc-primary">
                <div className="fontCard-title">
                    <h3>{title}</h3>
                </div>
                <div className="fontCard-preview">
                    <div>
                        <p>
                            They walk unseen and foul in lonely places where the words have been spoken and the rites howled through at their seasons.
                        </p>
                    </div>
                </div>
                <div className="fontCard-open">
                    <span tabIndex={0} onClick={toggleCardBody}>
                        {/* <CaretRight className={
                                (ddToggled) ? "active-dd" : undefined
                            }/> */}
                    </span>
                </div>
            </div>
            
            {/* font card body */}
            <div className={`info-card infoCard-container ${(ddToggled) ? "active-infoCard" : ""}`}>
                <div className="infoCard-body">
                    <div className="infoCard-info">
                        <h2>Information</h2>
                        <table className="info-table">
                            <tr>
                                <td className="info-table-header">License</td>
                                <td className="info-table-body license">Open-Source</td>
                            </tr>
                            <tr>
                                <td className="info-table-header">Source</td>
                                <td className="info-table-body source">Google Fonts</td>
                            </tr>
                            <tr>
                                <td className="info-table-header">Category</td>
                                <td className="info-table-body category">Serif</td>
                            </tr>
                            <tr>
                                <td className="info-table-header">Rating</td>
                                <td className="info-table-body rating">
                                    <img 
                                    src="./images/Star Rating_3.png" 
                                    alt="star rating of three out of five" width="90px" 
                                    />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="infoCard-link1">
                        <a href="" target="_blank" title="Font Page"><button className="btn-primary">Font Page</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}