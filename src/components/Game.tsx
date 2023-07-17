import React, { useState } from "react";
import GameMap from "./GameMap";
import GameResult from "./GameResult";
import { Button } from "@mui/material";
import { CloseSharp, LocationSearching, PlayArrow } from "@mui/icons-material";

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
    const [isMapOpen, setIsMapOpen] = useState(false);

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
      setIsMapOpen(false);
    }

    return (
    <React.Fragment>
      <div style={
      {"position": "absolute",
      "left": "50%",
      "top": "50%",
      "transform": "translate(-50%, -50%)",
      }} > 
        { answer === '' && !isMapOpen ?
        <div style={
          {"display": "flex",
          "flexDirection": "column",
          "justifyContent": "flex-start",
          }}>
        <Button 
          variant="contained" 
          onClick={() => setIsMapOpen(true)} 
          startIcon={<LocationSearching />} > Map 
        </Button>
        <p>{selectedArea}</p>
        <img src={images[image]} />
        </div> :
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
      "left": "50%",
      "top": "45%",
      "transform": "translate(-50%, -50%)",
      }} > 
        {isMapOpen && isActive ?
        <div style={{
        "display": "flex",
        "flexDirection": "column",
        }}>
        <div style={{
        "display": "flex",
        "flexDirection": "row",
        }} >
        <p>{selectedArea}</p>
        <Button 
          style={{
            "position": "absolute",
            "top": "8%",
            "left" : "88%",
            "right": "0%",
          }} 
          onClick={() => setIsMapOpen(false)}
          startIcon={<CloseSharp />} 
        />
        </div>
        <GameMap changeSelectedArea={changeSelectedArea} />
        </div> :
        <div />
        }
      </div>
      
      <div style ={
        {"position": "absolute",
        "top" : "80%",
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
