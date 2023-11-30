import styled from "styled-components";

export function InformationResearchSide(props) {

  const { temp, icon, description, scale, weatherMain } = props;

  function choiceColor(weatherMain) {

    switch (weatherMain) {
      case 'Clear':
        return '#ffa500';

      case 'Clouds':
        return '#808080';

      case 'Rain':
        return '#0000ff';

      case 'Snow':
        return '#d3d3d3';

      case 'Thunderstorm':
        return '#993399';

      case 'Drizzle':
        return '#add8e6';

      case 'Mist':
        return '#d3d3d3';

      default:
        return '#000000';
    }
  }

   const textColor = choiceColor(weatherMain);

  return (
    <CsInformationResearchSide 
      style={{color:textColor }}
    >
      <div className="molde">
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        {
          scale === 'CELSIUS' ?
            `${parseInt(temp - 273.15)} °C` :
            `${parseInt(temp * 1.8 - 459.67)} °F`
        }
      </div>

      <p>{description}</p>
    </CsInformationResearchSide>
  )
}

const CsInformationResearchSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 7vw;
  margin-bottom: 2em; 
  
  .molde{
    display: flex;
    align-items: center;
  }

  img{
    width: 8vw;
    @media (max-width: 600px) { 
        width: 16vw;
    }
  }

  p{
    font-family: Poppins;
    font-size: 2vw;
    font-style: normal;
    font-weight: 400;
    @media (max-width: 600px) { // Ajusta o tamanho da fonte para telas pequenas
        font-size: 4vw;
    }
  }

`
