import { useState } from "react" 
const About=()=>{
        const [college,updateCollege]=useState("KEC")
        const updatingClg=()=>{
            // console.log("Hello")
            updateCollege("Kongu Engineering College")
        }
        return(
            <div>
                <h1> Welcome to {college}</h1>
                {/* <a href="mailto:kaviyap.21ece@kongu.edu">kaviyap.21ece@kongu.edu</a> */}
                <button onDoubleClick={updatingClg}>update college name</button>
            </div>
        )
 }
export default About
