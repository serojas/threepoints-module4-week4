import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"


function DelayedSpinner (props) {
    const styleBeatLoader = {
        position: "fixed",
        top: "60%", 
        left: "50%", 
        transform: "translate(-50%, -50%)"
   }

    const [showSpinner, setShowSpinner] = useState(false);
    const [delay, setDelay] = useState(0);
    const [timer, setTimer] = useState(0);


   useEffect(()=>{
        setDelay(props.delay);
        setTimer( setTimeout(() => setShowSpinner(true), delay));
        return () => {
            clearTimeout(timer)
        };
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])
    

    return (
        <div style={styleBeatLoader}>
            <BeatLoader loading={props.loading} size='50px' margin='2px' />
        </div>)
    
}

export default DelayedSpinner