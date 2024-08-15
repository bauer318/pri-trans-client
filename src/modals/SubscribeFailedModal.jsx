import React from 'react';
import {Modal} from "react-bootstrap";
import {MdErrorOutline} from "react-icons/md";

const SubscribeFailedModal = ({showModal, handleModal, isSubscription}) => {
    const getTitle = ()=> isSubscription ? "L'inscription " : "La désinscription ";
    return (
        <Modal show={showModal} onHide={handleModal}>
            <Modal.Header closeButton>
                <Modal.Title><MdErrorOutline /> <span className={"text-danger"}>{getTitle().concat("a échoué")}</span></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3">
                    <div className="card-body">
                        <h4 className="card-text">Les causes possibles:</h4>
                        <p className={"card-text text-secondary"}>- Vous n'avez pas envoyé le code sur <i>le bot
                            telegram</i> avant de cliquer sur le bouton <span className={"text-primary"}>Confirmer</span>
                        </p>
                        <p className={"card-text text-secondary"}>- Vous avez envoyé le code déjà expiré ou utilisé
                            sur <i>le bot telegram</i>
                        </p>
                        <hr/>
                        <h4 className="card-text">Veuillez svp:</h4>
                        <p className={"card-text text-secondary"}>- Obtenir un nouveau code et l'envoyer sur <i>le bot
                            telegram</i>
                        </p>
                        <p className={"card-text text-secondary"}>- <span
                            className={"text-primary"}>Confirmer</span> l'envoie du code en cliquant sur le bouton
                            respectif avant 15 min dès la génération du code
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className={"btn btn-secondary"} onClick={handleModal}>Compris</button>
            </Modal.Footer>
        </Modal>
    );
};

export default SubscribeFailedModal;