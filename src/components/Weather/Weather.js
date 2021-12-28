import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import './Weather.scss';
import _ from "lodash";

const Weather = () => {
    const [title, setTitle] = useState("");
    useEffect(async () => {

        let response = await axios({
            method: 'post',
            url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
            data: { url: 'https://www.metaweather.com/api/location/1236594/' },

        });

        setTimeout(() => {
            setTitle(response.data.title)
        }, 1000)
    }, []);


    return (
        <div className="weather-app-container">
            <Search />
        </div>
    )
}




// class Weather extends React.Component {

//     constructor(props) {
//         super(props);
//         console.log(">>> run constructor: 000")
//         this.state = {
//             title: ""
//         }
//     }


//     async componentDidMount() {
//         console.log(">>> run didmout")
//         let response = await axios({
//             method: 'post',
//             url: "https://reacthook-hoidanit-backend.herokuapp.com/get-data-by-url",
//             data: { url: 'https://www.metaweather.com/api/location/1236594/' },

//         });

//         setTimeout(() => {
//             this.setState({
//                 title: response.data.title
//             })
//         }, 3000)

//         // console.log(">>> check data: ", response.data);
//     }

//     render() {
//         console.log(">>> run render: ")
//         return (
//             <div> inside weather component: title = {this.state.title}</div>
//         )
//     }
// }


export default Weather;