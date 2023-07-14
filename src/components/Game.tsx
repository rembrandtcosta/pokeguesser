import React, { useState } from "react";
import GameMap from "./GameMap";
import GameResult from "./GameResult";
import { Button } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";

const useSelectArea = () => {
  const [selectedArea, setSelectedArea] = useState('Littleroot Town');
  
  const changeSelectedArea = (e: string) => {
    setSelectedArea(e)
  }

  return {
    selectedArea ,
    changeSelectedArea
  }
}


export default function Game() {
    const { selectedArea, changeSelectedArea } = useSelectArea();
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState('Littleroot Town');
    const [answer, setAnswer] = useState('');

    function importAll(r: any) {
      let images: any = {};
      r.keys().forEach((item: any) => {
        images[item.replace('./', '')] = r(item);
      });
     return images;
    }

    const images = importAll(require.context("../../assets", false, /\.(png|jpe?g|svg)$/));

    function setRandomImage() {
      setIsActive(true);
      setAnswer('');
      setImage(getRandomImage(images));
    }

    function getRandomImage(set: Map<string, any>): string {
      set = new Map(Object.entries(set))
      const items = Array.from(set.keys())
      return items[Math.floor(Math.random() * items.length)];
    }

    function guess() {
      const ans = image.slice(0, -4);
      setAnswer(ans)
      if (ans === selectedArea) {
        console.log("Right!");
      } else {
        console.log("Wrong!");
      }

      setIsActive(false);
    }

    return (
    <React.Fragment>
      <div style={
      {"position": "absolute",
      "left": "65%",
      "top": "50%",
      "transform": "translate(-50%, -50%)",
      }} > 
        
        { answer === '' ?
        <img src={images[image]} /> :
        <div/>
        }

      </div>


    <div style={
      {"position": "absolute",
      "left": "50%",
      "top": "50%",
      "transform" : "translate(-50%, -50%)",
      }}>
      {answer === '' ?
      <div/> : 
      <GameResult actual={selectedArea} expected={answer} />
      }
    </div>

      <div style={
      {"position": "absolute",
      "left": "35%",
      "top": "51%",
      "transform": "translate(-50%, -50%)",
      }} > 
        {isActive ?
        <div>
        <GameMap changeSelectedArea={changeSelectedArea} />
        <p>{selectedArea}</p>
        </div> :
        <div />
        }
      </div>
      
      <div style ={
        {"position": "absolute",
        "top" : "70%",
        }}
      >
      {isActive ?
      (<Button variant="contained" onClick={guess}  > Guess! </Button>) :
      (<Button variant="contained" onClick={setRandomImage} startIcon={<PlayArrow />}> Start </Button>)
      }
      </div>
    </React.Fragment>
  )
}
