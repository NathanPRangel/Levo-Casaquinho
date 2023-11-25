import styled from "styled-components";
import { FeaturesWeather, TodayOrNext, NameAndLocation, NextDays } from "./";
import { useState } from "react";

export function VisualSide(props) {
    const {name, coord, main, wind, scale, mapData}= props;
    const [toggleMap, setToggleMap] = useState(true)
    return (
        <CsVisualSide>
            <div className="container">
                <TodayOrNext setToggleMap={setToggleMap} />
                <NameAndLocation
                    name={name}
                    coord={coord}
                />

                {
                    toggleMap ?
                        <FeaturesWeather
                            scale={scale} 
                            main={main}
                            wind={wind}
                        /> :
                        <NextDays 
                            scale={scale}
                            mapData={mapData}
                        />
                }
                

                <div className="siteInformation">Dados fornecidos pela Open Weather API</div>
            </div>
        </CsVisualSide>
    )
}

const CsVisualSide = styled.div`
    width: 70%;
    border: 1px;
    background-color: #EFEFEF;


    padding: 15px 20px 5px;

    .container{
        width: 100%;
        height: 100%;
        position: relative;

        .siteInformation{

            position: absolute;
            left: 0%;
            bottom: 0%;
        }

    }
    
`