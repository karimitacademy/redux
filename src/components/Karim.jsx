import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Karim = () => {
  const goldCardState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newUser, setnewUser] = useState({ user: "", cash: 0 });

  return (
    <div>
      <h1>{goldCardState.user}</h1>
      <h2>{goldCardState.cash}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD CASH",
            payload: Number(prompt("пополните cash")),
          })
        }
      >
        {" "}
        + cash
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE CASH ",
            payload: Number(prompt("пополните cash")),
          })
        }
      >
        {" "}
        - cash
      </button>

      <input
        type="text"
        onChange={(e) => {
          setnewUser({ ...newUser, user: e.target.value });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setnewUser({ ...newUser, cash: e.target.value });
        }}
      />

      <button
        onClick={() => dispatch({ type: "IZMENIT", payload: newUser })}
        извенить
      >
        {" "}
        hcwhvihw
      </button>
    </div>
  );
};

export default Karim;
