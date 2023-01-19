import { useState } from "react";

import Tabs from "../Tabs/tabs";
import Summary from "../Tabs/TabsCollection/Summary";
import About from "../Tabs/TabsCollection/About";
import Review from "../Tabs/TabsCollection/Review";

function Gamecard({ game }) {
const [tab, setTab] = useState("Summary")

  
  return (
    <>
    <div>
<Tabs setTab={setTab}/>
</div>
{tab === 'Summary' ? <Summary game={game}/> : (tab ==='About'? <About description={game.description} location={game.location} title={game.title}/> : <Review/>)
}
    
      </>
  );
}
 

export default Gamecard;
