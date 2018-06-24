import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
	state={
        input: '',
        alpha_word_array: {Aries:["Choo", "Che", "Cho", "Laa", "Lee", "Loo", "Le", "Lo", "A"],Taurus:["I", "U", "E", "O", "Wa", "Wee", "oo", "We", "Wo"],Gemini:["Kaa", "Kee", "Koo", "Gh", "Ang", "Chh", "Ke", "Ko", "Haa"],Cancer:["Hee", "Hoo", "He", "Daa", "Dee", "Doo", "De", "Do"],Leo:["Maa", "Mee", "Moo", "Me", "Mo", "Taa", "Tee","Too", "Te"],Virgo:["To", "Paa", "Pee", "Poo", "Sh", "Th", "Pe", "Po"],Libra:["Raa", "Ree", "Roo", "Re", "Ro", "Taa", "Tee", "Too", "Te"],Scorpio:["To", "Naa", "Nee", "Noo", "Ne", "No", "Yaa", "Yee", "Yu"],Saggitarius:["Ye", "Yo", "Bhaa", "Bhee", "Bhoo", "Dhaa", "Phaa", "Taa", "Bhe"],Capricorn:["Bho", "Jaa", "Jee", "Khee", "Khoo", "Khe", "Kho", "Gaa", "Gee"],Aquarius:["Goo", "Ge", "Go", "Saa", "See", "Soo", "Se", "So", "Da"],Pisces:["Dee", "Doo", "Th", "Jh", "Yan", "De", "Do", "Chaa", "Chee"]}
    };
    
    inputChangeHandler = (event) => {
        const val = event.target.value;
        this.setState((prevState) => {
            return {
                input: val
            };
        });
    }

    findemyzodiac = () => {
        const {
            input,
            alpha_word_array
        } = this.state;
        for(var i in alpha_word_array){
            for(var k=0;k<alpha_word_array[i].length;k++){
                if(String(alpha_word_array[i][k]).toLowerCase().search(input.toLowerCase().toString()[0])>=0){
                    console.log([i][0]);
                }
            }
        }
    };

    render() {
        const {input} = this.state;
        return (
            <div className="App">
                <div className="root-container">
                    <h1 className="heading-cmpo">ZODIAC SIGNS FINDER</h1>
                    <div className="app-container">
                        <div className="navbar-form navbar-left">
                            <div className="form-group"> 
                                <input className="form-control" placeholder="Search" value={input} onChange={this.inputChangeHandler} />
                            </div> 
                            <button type="button" className="btn btn-default" onClick={this.findemyzodiac}>Submit</button>
                            
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default App;
