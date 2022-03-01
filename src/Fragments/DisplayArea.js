

function DisplayArea({ currentTemp, selected }) {

    return (
        <div>
            {currentTemp !== "" ?
                <div>
                    <p className='temp-wrapper'>
                        <span className='temp'>{currentTemp}</span>
                        <span className='temp-symbol'>°C</span>
                    </p>
                    {selected.date !== '' && selected.temp !== '' ?
                        <p className='temp-wrapper'>
                            <span>
                                Temp value on {selected.date} is {selected.temp}
                            </span>
                        </p>
                        :
                        null}
                </div>

                : null
            }
        </div>
    )
}

export default DisplayArea;