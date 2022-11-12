import classes from"./Model.module.css"
import {createPortal} from "react-dom";



const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays")

const Model = props => {
    return(
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement  )}
        </>
    )
}

export default Model
