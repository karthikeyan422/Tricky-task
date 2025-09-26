

// DogGallery.jsx

import Doggy from "../assets/images/doggy.jpg"
import Puppy from "../assets/images/puppyy.jpeg"
import Rabbit from "../assets/images/rabbit.jpg"
import Dog from "../assets/images/dog.jpeg"




function DogGallery() {

  return (

    <div style={{display:"flex",justifyContent:"space-between",marginLeft:"8%",marginRight:"8%",marginTop:"8%",marginBottom:"1%", textAlign:"center"}}>
      <div style={{width:"20%", border:"solid", padding:"6px", height:"55%"}}>
        <img style={{width:"100%", height:"100%" }} src={Rabbit} alt="" />
        <h4>Julie's Rabbit Ears</h4>
      </div>
      <div style={{width:"20%",  border:"solid", padding:"7px", height:"50%"}}>
        <img style={{width:"100%", height:"100%",}} src={Puppy} alt="" />
        <h4>The Innocent Look</h4>
      </div>
      <div style={{width:"20%", border:"solid",padding:"6px",}}>
        <img style={{width:"100%",}} src={Dog} alt="" />
        <h4>Big Eyed Buggy</h4>
      </div>
      <div style={{width:"20%", border:"solid",padding:"6px"}}>
        <img style={{width:"100%", height:"55%"}} src={Doggy} alt="" />
        <h4>The Saint Doggo</h4>
      </div>
    </div>




  )



}

export default DogGallery