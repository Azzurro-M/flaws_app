import { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/auth.Context";
import App from "../App";

function CalendarPage() {
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();

  if (user) {
    return (
      <>
        <Navbar />
        <div className="app">
          <h1 className="text-center">React Calendar</h1>
          <div className="calendar-container">
            <Calendar onChange={setDate} value={date} />
          </div>
          <p className="text-center">
            <span className="bold">Selected Date:</span> {date.toDateString()}
          </p>
        </div>
      </>
    );
  }
  return (
    <>
      <App />
    </>
  );
}

export default CalendarPage;
