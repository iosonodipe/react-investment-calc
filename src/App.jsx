import Header from "./components/Header/Header.jsx";
import UserInput from "./components/UserInput/UserInput.jsx";

import {useState} from "react";

function App() {
    const [userData, setUserData] = useState({
        initial: 0,
        annual: 0,
        expected: 0,
        duration: 0
    });

    function handleInputChange(input, value){
        setUserData(prevUserData => {
            return{
                ...prevUserData,
                [input]: value
            }
        })
    }

    return (
        <>
            <Header/>
            <section id="user-input">
                <div className='input-group'>
                    <UserInput title='initial-investment' onInputChange={handleInputChange}/>
                    <UserInput title='annual-investment' onInputChange={handleInputChange}/>
                </div>
                <div className='input-group mt'>
                    <UserInput title='expected-return' onInputChange={handleInputChange}/>
                    <UserInput title='duration' onInputChange={handleInputChange}/>
                </div>
            </section>
        </>
    )
}

export default App
