import { useState } from "react";
import "./index";
export default function App() {
  let contingentObject = {
    Archery: [
      { participant: "Tarundeep Rai", competition: "Men’s Recurve" },
      { participant: "Atanu Das", competition: "Men’s Recurve" },
      { participant: "Pravin Jadhav", competition: "Men’s Recurve" },
      { participant: "Deepika Kumari", competition: " Women's Recurve" }
    ],
    Athletics: [
      { participant: "KT Irfan", competition: " Men's 20km race walking" },
      { participant: "Sandeep Kumar", competition: "Men's 20km race walking" },
      { participant: "Rahul Rohilla", competition: "Men's 20km race walking" },
      { participant: "Gurpreet Singh", competition: "Men's 50km race walking" },
      { participant: "Bhawna Jat", competition: "Women's 20km race walking" },
      {
        participant: "Priyanka Goswami",
        competition: "Women's 20km race walking"
      },
      { participant: "Avinash Sable", competition: "Men's 3000m steeplechase" },
      { participant: "Murali Sreeshankar", competition: "Men's long jump" },
      { participant: "MP Jabir", competition: "Men's 400m hurdles" },
      { participant: "Neeraj Chopra", competition: "Men's javelin throw" },
      { participant: "Shivpal Singh", competition: "Men's javelin throw" },
      { participant: "Annu Rani", competition: "Women's javelin throw" },
      { participant: "Tajinderpal Singh Toor", competition: "Men's shot put" },
      { participant: "Dutee Chand", competition: "Women's 100m and 200m" },
      { participant: "Kamalpreet Kaur", competition: "Women's discus throw" },
      { participant: "Seema Punia", competition: "Women's discus throw" }
    ],
    Badminton: [
      { participant: "PV Sindhu", competition: "Women’s singles" },
      { participant: "B Sai Praneeth", competition: "Men’s singles" },
      {
        participant: "Satwiksairaj Rankireddy and Chirag Shetty",
        competition: "Men’s doubles"
      }
    ],
    Boxing: [
      { participant: "Vikas Krishan", competition: "Men's 69kg" },
      { participant: "Lovlina Borgohain", competition: "Women's 69kg" },
      { participant: "Ashish Kumar ", competition: "Men's 75kg" },
      { participant: "Pooja Rani", competition: "Women's 75kg" },
      { participant: "Satish Kumar", competition: "Men's 91kg" },
      { participant: "Mary Kom ", competition: "Women's 51kg" }
    ],
  
    Swimming: [
      {
        participant: "Sajan Prakash",
        competition: "men's 200m freestyle 100m butterfly 200m butterfly"
      },
      { participant: "Srihari Nataraj men's", competition: "100m backstroke" },
      { participant: "Maana Patel ", competition: " women's 100m backstroke" }
    ],
  
    Wrestling: [
      { participant: "  Seema Bisla", competition: " Women's Freestyle 50kg" },
      { participant: "Vinesh Phogat", competition: "Women’s Freestyle 53kg" },
      { participant: "Anshu Malik ", competition: " Women's Freestyle 57kg" },
      { participant: "Sonam Malik", competition: "Women's Freestyle 62kg" },
      { participant: "Ravi Kumar Dahiya", competition: "Men’s Freestyle 65kg" },
      { participant: "Deepak Punia ", competition: " Men’s Freestyle 86 kg" }
    ]
  };
  const [selectedSport,setSport]=useState("Wrestling");
  function clickHandler(e){
    // console.log(e.target.textContent);
    setSport(e.target.textContent);
  }
  let sportsList=Object.keys(contingentObject) ;
  return (
    <div className="App">
      <h1>Indian olympic contingent</h1>
        <p>This app shows all the Indian players that participated in Olympics 2021.</p>
       <div className="buttonsDiv">
         {
           sportsList.map(function(sport,idx){
              return <button 
              key={idx}
              onClick={clickHandler}
              >{sport}</button>
           })
          
         }
       </div>
       <div>

       <ul>
         {contingentObject[selectedSport].map(function(playerObject,idx){
           return <li key={idx}>
               
              <div className="participant">{playerObject.participant}</div>
              <div className="competition">{playerObject.competition}</div>
           </li>
         })
           
          }
       

       </ul>
       </div>
    </div>
  );
}
