import React from 'react';
import './Modal.css';
import meta from '../logo/MetaMask_Fox.png';
import coinbase from '../logo/coinbase.svg';
import GenericWalletComponent from './GenericWalletComponent';
import { connectCoinbase } from './config/connectCoinbase';
import { connectMetmask } from './config/connectMetamask';
import logo from '../logo/LumosLogo.png';

function Modal({ show, modalClose, setAddress}) {
    
    const metamaskConnect = async() =>{
        const metamaskAddress = await connectMetmask();
        setAddress(metamaskAddress);
        modalClose();
    }

    const coinbaseConnect = async() => {
        const coinbaseAddress =  await connectCoinbase();
        setAddress(coinbaseAddress);
        modalClose();
    }


    return (
        <div className={'modal'}>
            <div className={show ? `modalShow` : `modalHide`}>
                <div className='modalControl'>
                    <img src={logo} className="logo" alt="" />
                    <button className={'modalButton'} onClick={modalClose}>X</button>
                </div>
                <div>
                    <GenericWalletComponent connectWallet={metamaskConnect} walletName={"Metamask"} walletImg={meta}/>
                    <GenericWalletComponent connectWallet={coinbaseConnect} walletName={"Coinbase"} walletImg={coinbase}/>
                </div>

            </div>
        </div>
    )
}

export default Modal