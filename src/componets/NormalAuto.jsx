import { useState } from "react"

const NormalAuto = () => {

    const [buttons, setButtons] = useState([
        {type: "Normal", selected: true},
        {type: "Auto", selected: false}
    ])

    const handleSelectedButton = (ClickedButton) => {
        const changeButton = buttons.map(button => {
            if(ClickedButton === button){
                return {...button, selected: true}
            }else {
                return {...button, selected: false}
            }
        })


        setButtons(changeButton);

    }


    return(
        <div id="normal_auto">
            {buttons.map((button, index) => <div key={index} style={button.selected ? {border: "1px solid white"} : {border: "1px solid var(--color-lines)"}} onClick={() => handleSelectedButton(button)} className="nav_button">{button.type}</div>)}
        </div>
    )
}

export default NormalAuto