import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

function Backdrop(props) {
  function handleClick() {
    console.log("clicked");
    props.setModal(!props.modal);
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-20 bg-backdrop bg-opacity-75"
      onClick={handleClick}
    ></div>
  );
}

function ModalOverlay(props) {
  return (
    <div className="fixed w-6/12 top-[15vh] left-[5%] w-[80%] bg-white p-[1%] rounded-[14px] shadow-md z-30 animate-slide-down overflow-hidden md:top-[15%] md:h-[38rem] md:rounded-[10px] md:p-[2%] sm:h-[30rem] sm:top-[11%] sm:rounded-[2%] sm:overflow-scroll">
      <div>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop setModal={props.setModal} modal={props.modal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
