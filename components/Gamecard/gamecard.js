import { useState } from "react";

import Tabs from "../Tabs/Tabs.js";
import Summary from "../Tabs/TabsCollection/Summary";
import About from "../Tabs/TabsCollection/About";
import Review from "../Tabs/TabsCollection/Review";

/**
 * it creates a GameCard component that contains a collection tab where the user can swap between different card sections (summary, about, review) 
 * @param {object} game - single card object that contains all the game info like title, description, images etc.
 * @returns conditionally return the content of each tab depending on which tab the user select 
 */
function Gamecard({ game }) {
  const [tab, setTab] = useState("Summary");

  return (
    <>
      <div className="tabsContainer mt-10">
        <Tabs setTab={setTab} />
      </div>
      {tab === "Summary" ? (
        <Summary game={game} />
      ) : tab === "About" ? (
        <About
          video={game.video_rules}
          image={game.artwork_image_url}
          description={game.description}
          rules={game.rules}
          title={game.title}
        />
      ) : (
        <Review title={game.title} id={game.id} />
      )}
    </>
  );
}

export default Gamecard;
