import React from "react";

// function Card(props) {
//   return (
//     <>
//       <h1 className="text-2xl mt-4">Inside Card: {props.sports}</h1>
//     </>
//   );
// }

//here the word "sports" should exactly match with the word "sports" used in <Card sports={"cricket"} /> used in App.jsx, then only it will work
function Card({ sports = "football" }) {
  return (
    <>
      <h1 className="text-2xl mt-4">Inside Card: {sports}</h1>
    </>
  );
}

export default Card;
