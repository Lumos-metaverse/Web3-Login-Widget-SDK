import React, {useState} from 'react'


function GenericWalletComponent({ connectWallet, walletName, walletImg }) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const genericWalletComponentStyle = {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "18px",
            paddingRight: "18px",
            borderTop: "1px solid #454184",
            transition: "0.5s ease-out",
            backgroundColor: isHover ? "#2BF2FF" : "",
            boxShadow: isHover ? "0px 0px 13px 6px rgba(28,226,250,0.25)" : "",
            color: isHover ? "#000000" : "#ffffff",
    };

    return (
        <div style={genericWalletComponentStyle} onClick={connectWallet} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h3>{walletName}</h3>
            <img src={walletImg} alt="" height={'35px'} width={'35px'} />
        </div>
    )
}

export default GenericWalletComponent