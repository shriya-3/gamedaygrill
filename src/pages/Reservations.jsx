import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Reservations.css"

export default function () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Date:', date);
    console.log('Time:', time);
    console.log('Guests:', guests);

    setSubmitted(true);
  };

  const handleReset = () => {
    setName(' ');
    setEmail('');
    setDate('');
    setTime('');
    setGuests(' ');
    setSubmitted(false);
  };

    return (
        <div className="reservations_page">
          <div className="reserve_con">
            <div className="reservations">
              <div className="timings_con">
                <div className="timings">
                  <h2>Open Daily</h2>
                  <h3>Monday - Friday</h3>
                  <p>10am - 12pm: Breakfast</p>
                  <p>12pm - 1am: Lunch & Dinner</p>
                  <h3>Saturday & Sunday</h3>
                  <p>11am - 1pm: Breakfast</p>
                  <p>1pm - 1am: Lunch & Dinner</p>
                  <div className="call">
                    <hr></hr>
                    <h4>Call Us: 298-3985-2092</h4>
                  </div>
                </div>
              </div>

              <div className="bookings">
                
                <div className="bookings_form">
                  <h2>Book a Table</h2>
                  {submitted ? (
                <div className="submitted">
                  <p className="confirmation">Reservation for <strong>{name}</strong> complete!</p>
                  <div className="reserve_details">
                    <p>Reservation Details:</p>
                    <p>Email: {email}</p>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p># of Guests: {guests}</p>
                  </div>
                  <button className="reserve_button" onClick={handleReset}>Submit Another Response</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="bookings_field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        placeholder="Name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <br></br>
                  <div className="bookings_field">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <br></br>
                  <div className="bookings_field">
                    <label htmlFor="date">Date: </label>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <br></br>
                  <div className="bookings_field">
                    <label htmlFor="date">Time: </label>
                    <input
                      type="time"
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <br></br>
                  <div className="bookings_field">
                    <label htmlFor="guests"># of Guests: </label>

                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      required
                    >
                      <option value="">Select...</option>
                      <option value="1">1 person</option>
                      <option value="2">2 persons</option>
                      <option value="3">3 persons</option>
                      <option value="4">4 persons</option>
                      <option value="5">5 persons</option>
                      <option value="6">6 persons</option>
                      <option value="7">7 persons</option>
                      <option value="8">8 persons</option>
                      <option value="9">9 persons</option>
                      <option value="10">10 persons</option>
                      <option value="11">11 persons</option>
                      <option value="12">12 persons</option>
                    </select>
                  </div>  
                  <div className="button_con1">
                    <button type="submit" className="button_r">Submit</button>
                  </div>
                  

                </form>
              )}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}