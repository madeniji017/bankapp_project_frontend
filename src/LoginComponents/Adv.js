import React from "react"
import MyImage from './NQRBackground-cmfb.jpg';

export default function Adv() {
    return (
        <section>
            <img src={MyImage} style={{display: "flex", width: "80%", marginTop: "80px", marginLeft: "20px", height: "60%"}} />
        </section>
    )
}