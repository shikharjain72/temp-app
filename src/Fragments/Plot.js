import '../App.css';
import React from "react";
import Plotly from 'plotly.js-dist-min';
import createPlotlyComponent from 'react-plotly.js/factory.js'

function Plot({ dates, temps, setSelected }) {
    const Plot = createPlotlyComponent(Plotly);

    return (
        <div className='plot-alingment'>
            <Plot
                data={[
                    {
                        type: 'scatter',
                        mode: 'lines+markers',
                        x: dates,
                        y: temps,
                    }
                ]}
                onClick={(elem) => {
                    setSelected({
                        date: elem.points[0].x,
                        temp: elem.points[0].y
                    })
                }}
                layout={{
                    paper_bgcolor: "#8c52ff"
                }}
            />
        </div>
    )
}

export default Plot;
