import { useState } from "react";

import Tabs from "../Tabs/Tabs.js";
import Summary from "../Tabs/TabsCollection/Summary";
import About from "../Tabs/TabsCollection/About";
import Review from "../Tabs/TabsCollection/Review";

function Gamecard({ game }) {
const [tab, setTab] = useState("Summary")

  
  return (
    <>
    <div className="tabsContainer mt-10">

<Tabs setTab={setTab}/>
</div>
{tab === 'Summary' ? <Summary game={game}/> : (tab ==='About'? <About video={game.video_rules} image={game.artwork_image_url} description={game.description} rules={game.rules} title={game.title}/> : <Review title={game.title} id ={game.id}/>)
}
    
      </>
  );
}
 

export default Gamecard;
