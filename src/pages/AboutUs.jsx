import React from "react";
import { Link } from "react-router-dom";
import Sports from "../assets/sports.jpg"
import Flying from "../assets/flying.jpg"
import "./AboutUs.css";


export default function Rewards() {
    return ( 
        <div className="aboutUs_page">
            <p>.</p>
            <div className="first_con">
                <div className="first_sec">
                    <div className="first_left_sec">
                        <h1>About Game Day Grill</h1>
                        <p>Game Day Grill started in 2023 as an idea to bring together sports lovers alike. 
                            Come experience <span><strong>American and Tex-Mex</strong></span> style cuisine with family and friends along with special 
                            deals and incentives on game days! We are so excited to bring this concept to you in 
                            the Dallas metroplex.</p>
                        <p>We encourage inclusivity with our <span><strong>numerous options</strong></span> and dietary information. We are also highly 
                            flexible in taking special requests in the making of the foods to fit our customers needs. We 
                            are committed to bringing those who walk in an unforgettable experience with our highly trained 
                            chefs and daily freshly made foods.</p>
                        <p>The restaurant is constructed with big open spaces and plenty of natural light coming in. Additionally, 
                            the building features a public room to hold watch parties on the daily. The interior design is also intended 
                            to bring the customers comfort and safety when they visit our restaurant.</p>
                    </div>
                    <div className="first_right_sec">
                        <div className="sports_img_con">
                            <img src={Sports} className="sports_img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="second_con">
                <div className="second_sec">
                    <div className="second_left_sec">
                        <div className="flying_con">
                            <img src={Flying} className="flying"></img>
                        </div>
                    </div>
                    <div className="second_right_sec">
                        <h1>Taste the Victory!</h1>
                        <p>Game Day Grill upholds exceptional standards by prioritizing the use of premium ingredients in 
                            every dish. With an unwavering commitment to quality, we 
                            ensure that each ingredient is carefully selected to maximize their freshness 
                            and flavor.</p>
                        <p>From the savory meats and crisp vegetables to the refreshing fruits, Game Day Grill sources its produce responsibly, 
                            emphasizing locally-sourced and sustainable options whenever possible. We take pride in crafting dishes 
                            that not only cater to the diverse tastes of their patrons but also showcase the finest ingredients available.</p>
                    </div>
                </div>
            </div>
            <div className="third_con">
                <div className="third_sec">
                    <div className="third_left_sec">
                        <h2>Website Creation</h2>
                        <p>Game Day Grill also takes pride in their easy-to-use, functional, and navigable website which allows customers to 
                            place orders, make reservations, join rewards, and more!</p>
                        <p>Questions or suggestions? <br></br>Contact us at info@gamedaygrill.com or 298-3985-2092</p>
                    </div>
                    <div className="third_right_sec">
                        <h2>Website Developer:</h2>
                        <div className="name_list">
                            <ul>
                                <li>Shriya Kaza- Website Developer</li>
                            </ul>
                        </div>
                        {/*
                        <p>CTE BPA Chapter</p>
                        <p>Theme: Game Night Sports Diner</p>
                        <p>School: Centennial High School</p>
                        <p>City: Frisco</p>
                        <p>State: Texas</p>
    <p>Year: 2023-2024</p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}