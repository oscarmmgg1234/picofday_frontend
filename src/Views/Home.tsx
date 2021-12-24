import React, {Component,useState, useRef, useEffect} from 'react';
import moment from 'moment';
import "../Style/HomeStyle.css";
import {Color_RGB_Rand_toString, getRandomInt, DefaultImageOBJ} from '../Components/utills'
import { api } from '../HTTPClient/api';



export default function Home(){
    
    const [rgba, setRGBA] = useState("");
    let interval= useRef(setInterval(()=>null));
    let imageOBJ = useRef(DefaultImageOBJ)

    useEffect(()=>{api.getImage().then((obj)=>{imageOBJ.current = obj; console.log(imageOBJ.current)})}, [])
    useEffect(()=>{interval.current = setInterval(()=>setRGBA(Color_RGB_Rand_toString()),1000);
         return ()=>{clearInterval(interval.current)} },[])

        return(<>
        {/* background effects */}
        <div  style={{width: window.innerWidth, height: window.innerHeight, position: "absolute", zIndex: -100,backgroundColor: "orange"}}/>
            <div  style={{width: window.innerWidth, height: window.innerHeight, position: "absolute", zIndex: -80, 
        background: "linear-gradient(" + getRandomInt(360) + "deg," + rgba +", transparent)"}}/>
        <div  style={{width: window.innerWidth, height: window.innerHeight, position: "absolute", zIndex: -70,backgroundColor: "rgba(0,0,0,0.5)"}}/>
          
          {/* container */}
           <div className="ViewContainer" >        
            <div className="SubviewContainer">
            {/* header */}
            <div className="TitleContainer">
                <h1 className="Title">MaldoRamos Family.</h1>
                <div style={{width: "80%", height: "2px", background: 
                "linear-gradient(90deg," + rgba +", orange)",borderRadius: 20}}/>
            </div>
            {/* body */}
            <div className="BodyTitle">
                <h2 style={{marginBottom: 1, marginTop: 2}}>{moment().format("L")}</h2>
             <h1> Pic of the day!</h1>
            </div>
            
            <div className="contentContainer">
                
                <div>
                    {imageOBJ.current.image != "" ? <img src={"data:image/jpg;base64,"+imageOBJ.current.image} className="image"/> : null}
                    <div className="overlay">
                        <p className='text'>{"Author: "+ imageOBJ.current.author}</p>
                        <p className='text1'>{"Description: "+ imageOBJ.current.description}</p>
                        <p className='text2'>{"Date: "+ imageOBJ.current.date}</p>
                    </div>
                </div>
            </div>
            <div style={{width: "60%", height: "2px", backgroundColor: "rgba(0,0,0,0.5)",borderRadius: 20, alignSelf: 'center', marginTop: 50}}/>
                <h2 style={{alignSelf: "center"}}>
                    {/* comments panel */}
                    comments
                    </h2>
                    <p style={{alignSelf: "center"}}>Coming soon...</p>

            <div>

            </div>
            {/* end */}
            </div>
           </div>
           </>
        );
    
}