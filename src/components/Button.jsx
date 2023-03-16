import { useState } from "react";
import Modal from './Modal.jsx'
import './Button.css'

function Button({address, setAddress}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className={'connectWallet'}>
            <Modal show={modalVisible} modalClose={()=>{setModalVisible(false)}} setAddress={setAddress}/>
            <button className={'connectWalletButton'} onClick={()=>{setModalVisible(true)}}>{address ? `Connected ${address}` : "Connect wallet"}</button>
        </div>
    );
}

export default Button;
