import cross from "../images/cross.svg"

function Modal ({close, children}) {
    return <div className="modalOverlay">
        <div className="modalContent">
            <img src={cross} className="close" onClick={close} />
            {children}
        </div>
    </div>
}

export default Modal;