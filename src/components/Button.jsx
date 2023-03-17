import { useState } from "react";
import Modal from './Modal'

function Button({address, setAddress}) {
    const [modalVisible, setModalVisible] = useState(false);

    const connectWalletButton = {
        padding: '20px',
        border: 'none',
        borderRadius: '0.375rem',
        fontSize: '17px',
        fontWeight: 'bold',
        width: '10rem',
        color: '#36104C',
        background: 'linear-gradient(90deg, rgba(43, 242, 255, 1) 0%, rgba(1, 195, 241, 1) 100%)',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    }

    return (
        <div>
            <Modal show={modalVisible} modalClose={()=>{setModalVisible(false)}} setAddress={setAddress}/>
            <button style={connectWalletButton} onClick={()=>{setModalVisible(true)}}>{address ? `Connected ${address}` : "Connect wallet"}</button>
        </div>
    );
}

export default Button;
