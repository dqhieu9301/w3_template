import React from "react";
import ContentTwo from "./content_two";
import ContentOne from "./content_one";
import Slider from "./slider";
import ContenThree from "./content_three";
import Information from "./content_information";
const Content = () => {
    return (
        <div className="content">
            <Slider />
            <ContentOne />
            <ContentTwo />
            <ContenThree />
            <Information />
        </div>
    )
}

export default Content;