//import material ui
import React from 'react';
import { Modal } from '@mui/material';
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Upload(){
    const [isBrowser, setIsBrowser] = useState(false);
    let text = "";
    
    useEffect(() => {
        setIsBrowser(true);
    }, []);
    
    const handleClose = () => {
        if (Modal.loading) return;
    
        setModal({ ...Modal, show: false });
    };
    
    if (Modal.method === "Burn") text = "1 ECO Burned";
    if (Modal.method === "Mint") text = "Mint Sucessful";
    if (Modal.method === "Transfer") text = "Transfer Sucessful";
    
    const ModalContent = Modal.show ? (
        <>
        <div onClick={handleClose} className={styles.overlay} />
        <div className={styles.container}>
            {Modal?.loading ? (
            <p>Transaction Initiated</p>
            ) : (
            <p>Transaction Mined</p>
            )}
            {Modal?.loading ? (
            <Loader />
            ) : (
            <>
                <BsFillCheckCircleFill className={styles.icon} />
                <p>{text}</p>
            </>
            )}
            <a
            href={`https://mumbai.polygonscan.com/tx/${Modal.txn}`}
            target="_blank"
            rel="noreferrer"
            className={styles.link}
            >
            View on Block Explorer <GoLinkExternal />
            </a>
            {!Modal?.loading && (
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />} 
                        onClick={handleClose} 
                        className={styles.close}>
                Close
            </Button>
            )}
        </div>
        </>
    ) : null;
    
    return isBrowser
        ? ReactDOM.createPortal(
            ModalContent,
            document.getElementById("modal-root")
        )
        : null;   
}
