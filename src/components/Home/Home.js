import React, {useEffect, useRef} from "react";
import "./Home.css";
function Home(props) {
    const mapRef = useRef();
    const initMap = () => {
        let options = {
          center: {lat: 16.072163491469226, lng: 108.22690536081757},
          zoom: 15,
          controls: true
        }
        let map = new map4d.Map(mapRef.current, options)
      }
      useEffect(() => {
        initMap();
       }, []);
    return (
        <div>
            <h2>Đây là trang chủ</h2>
            <div ref={mapRef} id="map" style={{width:'100%',height:'300px'}}></div>
        </div>
        
    ); 
   
}

export default Home;
