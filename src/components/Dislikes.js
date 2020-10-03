import React, { useState, useEffect } from "react";
import axios from "axios";
// import React from 'react'

// const Dislikes = () => {
//     return (
//         <div>People's dislikes</div>
//     )
// }

// export default Dislikes


const Dislikes = ({eventId}) => {
 
const [participants, setParticipants] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          `https://final-mcrcodes-project.herokuapp.com/events/${eventId}/participants`
        )
        .then((response) => setParticipants(response.data))
        .catch((err) => console.log(err));
    }

 fetchData();
  }, [eventId]);

     return(
      <div>
        {participants.map((person, index) => ( <p>{person.dislikes}</p> ))}
      </div>
);
}

export default Dislikes 