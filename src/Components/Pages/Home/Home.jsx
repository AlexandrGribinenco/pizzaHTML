import React from "react";
import useTranslation from "../../customHooks/translations";

function Home(props) {
    const translation = useTranslation();

    return (
        <div className="">
            <p>{translation.homePara}</p>
        </div>
    );
}

export default Home;
