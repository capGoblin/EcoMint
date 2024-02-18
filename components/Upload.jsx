//import material ui
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Upload(){
    const [isBrowser, setIsBrowser] = useState(false);
    let text = "";
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    
    const handleClose = () => {
        if (modal.loading) return;
    
        setModal({ ...modal, show: false });
    };
    
    if (modal.method === "Burn") text = "1 ECO Burned";
    if (modal.method === "Mint") text = "Mint Sucessful";
    if (modal.method === "Transfer") text = "Transfer Sucessful";
    
    const modalContent = modal.show ? (
        <>
        <div onClick={handleClose} className={styles.overlay} />
        <div className={styles.container}>
            {modal?.loading ? (
            <p>Transaction Initiated</p>
            ) : (
            <p>Transaction Mined</p>
            )}
            {modal?.loading ? (
            <Loader />
            ) : (
            <>
                <BsFillCheckCircleFill className={styles.icon} />
                <p>{text}</p>
            </>
            )}
            <a
            href={`https://mumbai.polygonscan.com/tx/${modal.txn}`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            >
            View on Block Explorer <GoLinkExternal />
            </a>
            {!modal?.loading && (
            <button onClick={handleClose} className={styles.close}>
                Close
            </button>
            )}
        </div>
        </>
    ) : null;
    
    if (isBrowser) {
        return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
        );
    } else {
        return null;
    }    
}
