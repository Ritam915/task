import React, { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, SetListdata] = useState([]);
  const eventhandler = (e) => {
    setActivity(e.target.value);
    console.log(activity);
  };
  const handlesubmmit = () => {
    SetListdata((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
    console.log(listData);
  };
  return (
    <>
      <div>
        <h2>Display Data</h2>
      </div>
      <div>
        <input
          placeholder="enter your task"
          value={activity}
          onChange={eventhandler}
        />
        <button onClick={handlesubmmit}>ADD </button>

        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p>{data}</p>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
