import { useState } from "react";

export default function Carousel({games}){
        return (
        <div style={{marginTop: "3rem", marginRight:"2rem"}} className="landing-content ">
          <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box bg-opacity-0">
                {games && games.map((game)=>
                <>
                <div className="carousel-item">
              <img
                src={game.packaging_image_url}
                className="rounded-box"
                style={{height: '15vh'}}
              />
            </div>
            </>
                )}
          </div>
          </div>
)

}