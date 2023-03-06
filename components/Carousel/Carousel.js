/**
 * it create a carousel in the home page to display the games available that are stored in the database
 * @param {object} games - contains all the information regarding each game (like title, video tutorial, istructions etc.)
 * @returns the carousel that maps through the games in the database and display their packaging images
 */
export default function Carousel({games}){
        return (
        <div style={{marginRight:"2rem", display:'flex', justifyContent:'center'}} className="landing-content ">
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