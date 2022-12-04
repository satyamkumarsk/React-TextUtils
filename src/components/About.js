import React from 'react'

export default function About(props) {

    let myStyle={
        color:props.mode==="dark"?"yellow":"#092a47",
        backgroundColor:props.mode==="dark"?"#092a47":"yellow"
    }
 
//    const [myStyle,setMyStyle]=useState({
//     color:"black",
//     backgroundColor:"yellow"
//    })

//    const[btntext, setBtnText]=useState("Enable to dark mode")

//    const handleClick=()=>{
//     if(myStyle.color==='yellow'){
//         setMyStyle({
//             color:"black",
//             backgroundColor:"yellow"
//            })
//         setBtnText("Enable to dark mode")
//     }
//     else{
//         setMyStyle({
//             color:"yellow",
//             backgroundColor:"black"
//            })
//         setBtnText("Enable to yellow mode")
//     }
//    }


    return (

        <div className='container' style={{color:props.mode==="dark"?"yellow":"#042743"}} >
            <h2 className='my-2'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Introduction:</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                        <p>My Name is Satyam Kuamr. I am Pursuing my Devlopment course in Full Stack Web Devloper from AlmaBetter. I have completed my B.Tech in Electronic & Telecommunication Engineering From C.V.Raman Global university, Bhubaneswar.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Skills:</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body " style={myStyle} >
                            <ul>
                                <li>JavaScript</li>
                                <li>Java</li>
                                <li>React.js</li>
                                <li>HTML</li>
                                <li>Css</li>
                                <li>Oops</li>
                                <li>MySql</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Project:</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                           <p>Fake Currency Detector</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button type="button" className="btn btn-info" onClick={handleClick}>{btntext}</button>
            </div> */}
        </div>
    )
}
