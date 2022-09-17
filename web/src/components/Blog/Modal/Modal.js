import styles from "src/modal.css"

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="darkenBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className="modal">

            <div className="modalContent">
              // QR code Here
            </div>

            <div className="modalActions">
              <div className="actionsContainer">
                <button
                  className="cancelBtn"
                  onClick={() => setIsOpen(false)}
                >
                  Thanks
                </button>
              </div>
            </div>

          </div>
        </div>
    </>
  )
}

export default Modal
