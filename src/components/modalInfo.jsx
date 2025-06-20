import React from "react";
import Modal from "../ui/modal";
import { workInfo } from "../files/workinfo.jsx";

function ModalInfo({ modal, setModal, modalInfo, infos }) {
  const result = infos.find((item) => item.key === 1);

  return <Modal modal={modal} setModal={setModal}></Modal>;
}

export default ModalInfo;
