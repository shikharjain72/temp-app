import { Typography } from 'antd';
import React from 'react';
import { connect } from "react-redux";
import { changeLocation, setCurrentTemp1, setSelected1, setTemp1 } from '../services/Location/actions';

function Form({ setCurrentTemp, setDate, setTemp, setSelected, location, changeLocation }) {
    const { Text } = Typography;
    const API_KEY = '17ab432823793314e12ae0230b35dc20';
    const fetchData = (evt) => {
        evt.preventDefault();
        console.log(location);
        let location1 = encodeURIComponent(location);
        let urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast/?q=';
        let urlSuffix = '&APPID=' + API_KEY + '&units=metric';
        let url = urlPrefix + location1 + urlSuffix;
        console.log("fetch weather data! is ", location1);
        fetch(url).then(res => res.json()).then(json => setReturedValue(json)).catch(e => console.log(e));
    }

    const setReturedValue = (json) => {
        let dates = [];
        let temps = [];

        let list = json.list;
        for (let i = 0; i < list.length; i++) {
            dates.push(list[i].dt_txt);
            temps.push(list[i].main.temp);
        }
        setCurrentTemp(json.list[0].main.temp);
        setDate(dates);
        setTemp(temps);
        setSelected({ date: '', temp: '' });
    }

    const changeLocationFunc = (evt) => {
        changeLocation(evt.target.value);
    }
    return (
        <Typography>
            <Text>
                <form onSubmit={fetchData}>
                    <label>I want to know the weather for  </label>
                    <input style={{ backgroundColor: "#ff5757" }} placeholder={"City,Country"} type="text" onChange={changeLocationFunc} />
                </form>
            </Text>
        </Typography>
    )
}

const mapStateToProps = (state) => ({
    location: state.locationReducer.location
});

const mapDispatchToProps = (dispatch) => ({
    changeLocation: (newLocation) => dispatch(changeLocation(newLocation)),
    setCurrentTemp1: (temp) => dispatch(setCurrentTemp1(temp)),
    setDate1: (dates) => dispatch(setTemp1),
    setSelected1: (selectedValue) => dispatch(setSelected1)
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
