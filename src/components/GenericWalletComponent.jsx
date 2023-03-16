import React from 'react'
import './GenericWalletComponent.css'

function GenericWalletComponent({ connectWallet, walletName, walletImg }) {
    return (
        <div className={'walletLog'} onClick={connectWallet}>
            <h3>{walletName}</h3>
            <img src={walletImg} alt="" height={'35px'} width={'35px'} />
        </div>
    )
}

export default GenericWalletComponent