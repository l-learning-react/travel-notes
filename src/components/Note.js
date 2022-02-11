import react from "react";

import iconlocation from "../assets/images/location.svg"

export default function Note(){
    return (
        <div className="note">
            <div className="left">
                <img src="https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FGEO.2Fvar.2Fgeo.2Fstorage.2Fimages.2Fmedia.2Fla-pagode-chureito-dans-le-sanctuaire-arakura-sangen-a-fujiyoshida-devant-le-mont-fuji.2F2049587-1-fre-FR.2Fla-pagode-chureito-dans-le-sanctuaire-arakura-sangen-a-fujiyoshida-devant-le-mont-fuji.2Ejpg/1150x647/background-color/ffffff/quality/70/japon-le-mont-fuji-montagne-sacree.jpg" alt="photo"/>
            </div>
            <div className="right">
                <div className="note-locaton">
                    <img src={iconlocation} alt="icon location"/>
                    <span className="note-country">JAPAN</span>
                    <a href="https://www.google.com" className="note-gmaps link">View on Google Maps</a>
                </div>
                <h1 className="note-title">Mont Fuji</h1>
            </div>
        </div>
    )
}