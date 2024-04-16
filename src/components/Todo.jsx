import React, { useEffect, useState } from "react";
const taskdata = localStorage.getItem("listData");
console.log(taskdata);
const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, SetListdata] = useState(JSON.parse(taskdata));
  // save tasks using local storage
  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(listData));
  }, [listData]);
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
          listData.map((data, index) => {
            return (
              <>
                {/* {   unique id for each task use index no} */}
                <p key={index}>{data}</p>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
