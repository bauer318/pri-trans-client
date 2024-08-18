import React from 'react';
import AboutComponentCard from "./AboutComponentCard";

const AboutComponent = () => {
    const aboutData = [
        {
            imageLink: "/first_problem.PNG",
            alt: "first problem image",
            cardTitle: "L'actuel problème:",
            cardText: "Actuellement l'envoi ou la réception de l'argent est difficile (ou impossible). Ils existent bien sûr" +
                " des moyens pour effectuer ces transferts, des moyens qui, selon nous,  " +
                "ne résolvent toujours pas ce problème comme il se doit, d'où la motivation de mettre en place cette plateforme. " +
                "Jacob au Congo doit envoyer 10.000₽ à Michael en Russie. David en Russie doit envoyer $120 à Benjamin au Congo."
        },
        {
            imageLink: "/first_approach.png",
            alt: "first approach image",
            cardTitle: "L'approche adaptée:",
            cardText: "David en Russie va chercher une personne qui doit recevoir de l'argent depuis le Congo. Une fois la personne trouvée" +
                "(ici Michael), David va proposer à cette dernière de faire une sorte d'échange. David doit envoyer l'équivalent de 10.000₽ à " +
                "Michael, et Jacob au Congo doit envoyer la même somme, mais en USD à Benjamin, le correspondant de David."
        },
        {
            imageLink: "/second_problem.PNG",
            alt: "second problem image",
            cardTitle: "Le problème lié à l'approche ci-dessus:",
            cardText: "Rappelons que David ne connais pas Michael en Russie, Benjamin non plus ne connais pas Jacob au Congo. " +
                "David envoie l'équivalent de 10.000₽ à Michael en Russie, pendant ce temps au Congo, Jacob le correspondant" +
                " de Michael doit en principe envoyer aussi la même somme (en USD) à Benjamin... Cette dernière étape n'est toujours " +
                "pas effectuée facilement. Jacob peut carrément disparaître du schéma de l'opération, de toutes façons, son correspondant en Russie" +
                " à déjà reçu de l'argent venant de David. Benjamin dans ce cas se retrouve sans argent et ne sait où trouver Jacob."
        },
        {
            imageLink: "/our_solution.PNG",
            alt: "our solution image",
            cardTitle: "La solution proposée:",
            cardText: "Premièrement David n'aura plus à chercher une personne pour faire cette sorte d'échange. David n'aura qu'à faire " +
                "un dépôt sur pri-trans. Ensuite effectuer un transfert à Benjamin au Congo, qui logiquement aura aussi un compte sur pri-trans." +
                "Jacob fera la même chose pour envoyer à Michael. Dépôt -> Envoi. Une fois que la plateforme trouve deux transferts" +
                " de directions opposées, elle réalise le transfert automatiquement. Elle convertit en utilisant le taux de Sberbank " +
                "et envoie à chacun des destinataires. Ces derniers n'auront qu'à faire des retraits depuis la plateforme." +
                "Les participants ne sont plus obligés de se connaitre ou de se faire confiance (Deuxièmement)."
        }
    ];
    return (
        <div className="card-body">
            <h5 className="card-title">La présentation de l'actuel problème et la solution proposée.</h5>
            <hr/>
            <div className={"row justify-content-md-center"}>
                {aboutData?.map((data, key) => <AboutComponentCard aboutData={data} key={key}/>)}
            </div>
        </div>
    );
};

export default AboutComponent;