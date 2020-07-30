import React from 'react'

function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p style={{margin: '10px'}}>水会沸腾！</p>
    }
    return <p style={{margin: '10px'}}>水不会沸腾！</p>
}

const scaleNames = {
    c: '摄氏度',
    f: '华氏温度'
}

function toCelsius(fahrenheit) {
    return (fahrenheit -32) * 5 / 9;
}
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert){
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Boiling extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset style={{margin: '10px 0 0 10px',padding: '5px'}}>
                <legend>请输入{scaleNames[scale]}:</legend>
                温度:  <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {
            temperature: '', 
            scale: 'c'
        };
    }
    handleCelsiusChange(temperature) {
        this.setState({
            temperature, 
            scale: 'c'
        })
    }
    handleFahrenheitChange(temperature) {
        this.setState({
            temperature, 
            scale: 'f'
        })
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) :temperature;
        return (
            <div>
                <Boiling scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <Boiling scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict
                 celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

export default Calculator