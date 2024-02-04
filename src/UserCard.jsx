import PropTypes from "prop-types";
const userData = [
    {
        name : "Vijay",
        city : "Chennai",
        description : "Front-end developer",
        skills : ["UI/UX","front-end development","html","CSS","Javascript","React","Node"],
        online : false,
        profile : "images/1.jpg",
    },
    {
        name : "Ajith",
        city : "Hyderabad",
        description : "Full Stack developer",
        skills : ["Vlogging","Web development","html","CSS","Javascript","React","Angular"],
        online : false,
        profile : "images/2.jpg",
    },
    {
        name : "Surya",
        city : "Vellore",
        description : "Senior Software developer",
        skills : ["C","C++","html","CSS","Javascript","React","Node"],
        online : false,
        profile : "images/3.jpg",
    },
]

function User (props) {
    return <div className="card-container">
        <span className={props.online ? "pro online" : "pro offline"}>{props.online? "ONLINE" : "OFFLINE"}</span>
        <img src={props.profile} className = "img" alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary outline">Following</button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (<>
  {
    userData.map((user, index) => (
        <User 
        key = {index}
        name = {user.name}
        city = {user.city}
        description = {user.description}
        online = {user.online}
        profile = {user.profile}
        skills= {user.skills}
        />
    ))
  }
  </>
  )
    
        // <User name = "Vijay" city = "Chennai" description = "Front-end developer" skills = {["UI/UX","front-end development","html","CSS","Javascript","React","Node"]} online = {true} profile = "images/1.jpg"/>
    
  
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
}
