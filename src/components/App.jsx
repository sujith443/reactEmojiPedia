import React from "react";
import Entry from "./entry";
import emoji from "../emojipedia";

function result(item) {
  console.log(item);
  return (
    <Entry
      char={item.emoji}
      name={item.name}
      meaning={item.meaning}
      key={item.id}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emoji.map(result)}</dl>
    </div>
  );
}

export default App;
