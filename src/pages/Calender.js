// import React from "react";
// import Navbar from "../components/Navbar";
// import Calendar from "react-calendar";
// import { useState } from "react";

// function PeriodCalendar() {
//   const [date, setDate] = useState(new Date());
//   return (
//     <div className="calendar">
//       <Navbar />
//       <h1 className="text-center">React Calendar</h1>
//       <div className="calendar-container">
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <p className="text-center">
//         <span className="bold">Selected Date:</span> {date.toDateString()}
//       </p>
//     </div>
//   );
// }

// export default PeriodCalendar;

import React from "react";
import Navbar from "../components/Navbar";

const Calender = () => {
    return (
        <div>
          <Navbar />
          <h1>Calender</h1>
        </div>
      );
    };


export default Calender;