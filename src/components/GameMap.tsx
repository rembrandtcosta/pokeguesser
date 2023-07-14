import React, { useState } from "react"
import hoenn from "../pokearth/hoenn.png"


export default function Map(props: { changeSelectedArea: Function }) {
  const { changeSelectedArea } = props;

  const getArea = (e: any) => {
    changeSelectedArea(e.target.title);
  }
  
  return (
    <React.Fragment>

      <img src={hoenn} useMap="#hoenn" width="306" height="221" />
      <map name="hoenn">
      <area onClick={getArea} shape="rect" coords="57, 147, 65, 155" title="Littleroot Town" />
      <area onClick={getArea} shape="rect" coords="57, 122, 65, 129" title="Oldale Town" />
      <area onClick={getArea} shape="rect" coords="30, 122, 45, 130" title="Petalburg City" />
      <area onClick={getArea} shape="rect" coords="11, 82, 26, 90" title="Rustboro City" />
      <area onClick={getArea} shape="rect" coords="11, 82, 19, 97" title="Rustboro City" />
      <area onClick={getArea} shape="rect" coords="38, 185, 46, 193" title="Dewford Town" />
      <area onClick={getArea} shape="rect" coords="85, 140, 100, 155" title="Slateport City" />
      <area onClick={getArea} shape="rect" coords="85, 89, 99, 96" title="Mauville City" />
      <area onClick={getArea} shape="rect" coords="85, 89, 93, 104" title="Mauville City" />
      <area onClick={getArea} shape="rect" coords="57, 89, 65, 97" title="Verdanturf Town" />
      <area onClick={getArea} shape="rect" coords="64, 64, 72, 72" title="Lavaridge Town" />
      <area onClick={getArea} shape="rect" coords="44, 43, 59, 51" title="Fallarbor Town" />
      <area onClick={getArea} shape="rect" coords="109, 43, 117, 51" title="Fortree City" />
      <area onClick={getArea} shape="rect" coords="156, 61, 171, 76" title="Lilycove City" />
      <area onClick={getArea} shape="rect" coords="172, 147, 180, 155" title="Pacifidlog Town" />
      <area onClick={getArea} shape="rect" coords="199, 109, 207, 117" title="Sootopolis City" />
      <area onClick={getArea} shape="rect" coords="227, 79, 242, 87" title="Mossdeep City" />
      <area onClick={getArea} shape="rect" coords="268, 130, 276, 144" title="Evergrande City" />
      <area onClick={getArea} shape="rect" coords="221, 174, 237, 191" title="Battle Frontier" />
      <area onClick={getArea} shape="rect" coords="268, 196, 280, 208" title="Southern Island" />
      <area onClick={getArea} shape="rect" coords="57, 130, 65, 147" title="Route 101" />
      <area onClick={getArea} shape="rect" coords="45, 122, 57, 130" title="Route 102" />
      <area onClick={getArea} shape="rect" coords="57, 115, 85, 123" title="Route 103" />
      <area onClick={getArea} shape="rect" coords="11, 122, 29, 129" title="Route 104" />
      <area onClick={getArea} shape="rect" coords="11, 122, 19, 97" title="Route 104" />
      <area onClick={getArea} shape="rect" coords="11, 129, 19, 177" title="Route 105" />
      <area onClick={getArea} shape="rect" coords="11, 177, 46, 185" title="Route 106" />
      <area onClick={getArea} shape="rect" coords="46, 186, 61, 192" title="Route 107" />
      <area onClick={getArea} shape="rect" coords="61, 186, 85, 192" title="Route 108" />
      <area onClick={getArea} shape="rect" coords="85, 155, 93, 193" title="Route 109" />
      <area onClick={getArea} shape="rect" coords="85, 104, 93, 140" title="Route 110" />
      <area onClick={getArea} shape="rect" coords="85, 43, 93, 89" title="Route 111" />
      <area onClick={getArea} shape="rect" coords="72, 64, 85, 72" title="Route 112" />
      <area onClick={getArea} shape="rect" coords="59, 43, 85, 51" title="Route 113" />
      <area onClick={getArea} shape="rect" coords="27, 43, 44, 51" title="Route 114" />
      <area onClick={getArea} shape="rect" coords="27, 43, 35, 63" title="Route 114" />
      <area onClick={getArea} shape="rect" coords="18, 55, 27, 63" title="Meteor Falls" />
      <area onClick={getArea} shape="rect" coords="11, 55, 19, 82" title="Route 115" />
      <area onClick={getArea} shape="rect" coords="26, 82, 65, 90" title="Route 116" />
      <area onClick={getArea} shape="rect" coords="65, 89, 85, 97" title="Route 117" />
      <area onClick={getArea} shape="rect" coords="99, 89, 112, 97" title="Route 118" />
      <area onClick={getArea} shape="rect" coords="100, 43, 108, 89" title="Route 119" />
      <area onClick={getArea} shape="rect" coords="118, 43, 125, 69" title="Route 120" />
      <area onClick={getArea} shape="rect" coords="126, 61, 156, 70" title="Route 121" />
      <area onClick={getArea} shape="rect" coords="142, 69, 149, 89" title="Route 122" />
      <area onClick={getArea} shape="rect" coords="112, 89, 150, 97" title="Route 123" />
      <area onClick={getArea} shape="rect" coords="171, 61, 227, 69" title="Route 124" />
      <area onClick={getArea} shape="rect" coords="183, 69, 227, 86" title="Route 124" />
      <area onClick={getArea} shape="rect" coords="227, 61, 242, 79" title="Route 125" />
      <area onClick={getArea} shape="rect" coords="183, 86, 223, 134" title="Route 126" />
      <area onClick={getArea} shape="rect" coords="223, 86, 241, 136" title="Route 127" />
      <area onClick={getArea} shape="rect" coords="223, 136, 268, 144" title="Route 128" />
      <area onClick={getArea} shape="rect" coords="222, 144, 242, 155" title="Route 129" />
      <area onClick={getArea} shape="rect" coords="204, 147, 222, 155" title="Route 130" />
      <area onClick={getArea} shape="rect" coords="180, 147, 204, 155" title="Route 131" />
      <area onClick={getArea} shape="rect" coords="153, 147, 172, 155" title="Route 132" />
      <area onClick={getArea} shape="rect" coords="131, 147, 153, 155" title="Route 133" />
      <area onClick={getArea} shape="rect" coords="100, 147, 131, 155" title="Route 134" />
      {/*
        TODO:
        Add the locations:
        - Scorched Slab
        - Marine Cave
        - Cave of Origin
        - Battle Tower
        - Victory Road
        - Meteor Falls
        - Terra Cave
        - Granite Cave
        - Mirage Tower
        - Fiery Path
        - Trainer Hill
        - Sky Pillar
        - New Mauville
        - Safari Zone
        - Shoal Cave
        - Mt. Chimney
      
      */}
      </map>
    </React.Fragment>
  );
}
