import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import "../CSS-Components/TinderCards.css"


function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Sadio Mané",
            url : 
                "https://images.beinsports.com/K6I5M3yYh7lOaSpn-GTcEwU7Bek=/full-fit-in/1000x0/3824618-2019-07-19T193806Z_494093109_RC1395BA9240_RTRMADP_3_SOCCER-NATIONS-SEN-DZA.JPG"
        },
        {
            name: "Gana Gueye",
            url : 
                "https://www.africatopsports.com/wp-content/uploads/2019/08/Idrissa-Gueye.jpg"
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Suppression : " + nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen !");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                { people.map((person) => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                       <div
                           style={{ backgroundImage: `url(${person.url})`}}
                           className="card"
                       >
                           <h3>{person.name}</h3>
                       </div>
                    </TinderCard>
                ))
                }
            </div>      
        </div>
    )
}

export default TinderCards
