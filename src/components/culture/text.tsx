import React from "react";
import Image from "next/image";
import Nowruz from "/src/public/culture/Nowruz.png";
import ShabeYalda from "/src/public/culture/ShabeYalda.png";

const CultureText = () => {
  return (
    <div>
      <div className="container text-center text-5xl text-isa-dark-yellow">
        <h1>
          <b>Culture</b>
        </h1>
      </div>
      <div className="container pl-16 pt-24 text-start text-4xl text-isa-dark-red">
        <p>
          <b>Nowruz Significance:</b> Nowruz, the Persian New Year, is a
          significant cultural celebration that marks the beginning of the new
          year in the Iranian calendar. It typically falls on the vernal
          equinox, around March 20th or 21st, and is celebrated by millions of
          people not only in Iran but also in many other countries with Persian
          cultural influence.
        </p>
      </div>
        <br></br>
        <div className = "flex flex-row">
            <Image className = "w-1/2 pl-9  scale-90" src = {ShabeYalda} alt = "ShabeYaldaPhoto" width = {711} height = {433} ></Image>
            <Image className = "w-1/2 pr-10 scale-90" src = {Nowruz} alt = "NowruzPhoto" width = {556} height = {431} ></Image>
            
        </div> 
        <br></br>
      <div className="container pl-16 text-start text-4xl text-isa-dark-red">
        <p>
          <b>Shabe Yalda Significance:</b> Shabe Yalda, also known as Yalda
          Night or the Winter Solstice celebration, is a significant and ancient
          Persian festival observed on the longest night of the year, which
          typically falls on December 20th or 21st. This celebration marks the
          victory of light over darkness as the days begin to grow longer after
          the solstice. It is an event rich in symbolism and cultural importance
          for Iranians and others with Persian cultural ties.
        </p>
      </div>
    </div>
  );
};

export default CultureText;
