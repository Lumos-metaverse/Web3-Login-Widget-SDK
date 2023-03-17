import React, {useState} from 'react';
import meta from '../logo/MetaMask_Fox.png';
import coinbase from '../logo/coinbase.svg';
import GenericWalletComponent from '../GenericComponent/GenericWalletComponent';
import { connectCoinbase } from './config/connectCoinbase';
import { connectMetmask } from './config/connectMetamask';
import logo from '../logo/LumosLogo.png';

function Modal({ show, modalClose, setAddress}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const styles = {
        modal : {
            margin: 'auto',
            width: '35%',
            height: '20%',
        },
          
        modalShow : {
            width: '18rem',
            height: '19rem',
            background: '#240834',
            borderRadius: '15px',
            boxShadow: '18px 15px 200px -15px rgba(0,0,0,0.75)',
            filter: 'blur(0)',
            transform: 'scale(1)',
            opacity: '1',
            visibility: 'visible',
            position: 'absolute',
        },
          
          modalHide : {
              width: '300px',
              height: '350px',
              background: '#454184',
              borderRadius: '15px',
              boxShadow: '18px 15px 200px -15px rgba(0,0,0,0.75)',
              filter: 'blur(0)',
              transform: 'scale(1)',
              opacity: '0',
              zIndex: '-10',
              visibility: 'hidden',
              position: 'absolute',
            },
          
          modalButton : {
              font: '1em sans-serif',
              fontWeight: '900',
              border: 'none',
              background: 'none',
              padding: '18px',
              transition: isHover ? "0.5s ease-out" : "",
              color:  isHover ? "#2BF2FF" : "#ffffff",
          },
          
          logo : {
            width: '15%',
            padding: '10px' ,
          },
          
          modalControl : {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '0 0 0 0',
          }
    }
    
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
        <div style={styles.modal}>
            <div style={show ? styles.modalShow : styles.modalHide}>
                <div style={styles.modalControl}>
                    <img src={logo} style={styles.logo}alt="" />
                    <button style={styles.modalButton} onClick={modalClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>X</button>
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