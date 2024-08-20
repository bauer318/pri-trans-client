import React from 'react';
import BoldTextComponent from "../components/BoldTextComponent";
import PriTransWebSiteLinkComponent from "../components/PriTransWebSiteLinkComponent";
import ClientSupportComponent from "../components/ClientSupportComponent";

const TermAndConditionPage = () => {
    return (
        <div className={"container"}>
            <h2 className={"text-center"}>Bienvenue chez Pritrans</h2>
            <p className={"mb-5"}>Le présent Contrat client s'applique à nos produits et services. Il décrit les droits
                et obligations de
                vous et nous et forme un contrat juridiquement contraignant entre vous et Pritrans lorsque vous vous
                inscrivez et utilisez nos services tels que l’envoi d’argent à vos amis , vos connaissances et à votre
                famille ou la détention d’un compte.</p>
            <h2 className={"text-center text-decoration-underline mb-2"}>CHOSES IMPORTANTES À SAVOIR</h2>
            <ul className="custom-list">
                <li>Vous devez avoir au moins 18 ans pour utiliser nos services et lorsque vous le faites, vous
                    acceptez ces conditions. Si vous n'êtes pas d'accord, vous ne devez pas utiliser nos Services;
                </li>
                <li>Il y a certains types d'entreprises et de transactions que nous ne prenons pas en charge.Celles-ci
                    sont appelées "activités restreintes" et nous vous en informons dans notre <a href={"#acceptable"}>Politique
                        d'utilisation
                        acceptable</a> . Vous devez le lire attentivement pour vous assurer de ne réaliser aucune de ces
                    activités. Si vous le faites, nous pouvons vous empêcher d'utiliser nos Services;
                </li>
                <li>Votre profil et votre Compte Pritrans sont destinés à votre usage personnel, vous devez protéger
                    vos informations de sécurité et ne permettre à personne d'autre d'utiliser nos Services en votre
                    nom. Toute utilisation de nos Services à partir de votre profil ou de votre Compte Pritrans est
                    réputée approuvée par vous;
                </li>
                <li>
                    Nous pouvons suspendre votre accès à nos Services si nous pensons que votre profil ou votre Compte
                    Pritrans pourrait être compromis, si vous vous engagez dans une activité restreinte ou si nous
                    pensons que vous pourriez avoir enfreint ou enfreindrez toute loi applicable;
                </li>
                <li>
                    Nous espérons que vous apprécierez l'utilisation de Pritrans, mais si vous souhaitez cesser
                    d'utiliser nos Services ou fermer votre Compte Pritrans, vous pouvez
                    contacter <ClientSupportComponent/>
                </li>
            </ul>
            <section id={"user_agreement"}>
                <h3 className={"text-center"}><i>Contrat d’utilisation</i></h3>
                <i className={"mb-3"}>Dernière mise à jour: 20 août 2024.</i>
                <ol className="list-group-numbered">
                    <h4 className="list-group-item mt-3">À propos de ce contrat client</h4>
                    <p>Le présent Contrat client est un contrat entre vous, en tant qu'individu <BoldTextComponent
                        text={"(“vous”)"}/> et Pritrans
                        <BoldTextComponent text={"(“Pritrans/nous/nos”)"}/> qui définit les conditions générales selon
                        lesquelles nous vous
                        fournissons nos Services <BoldTextComponent text={"(le “Contrat”)"}/>. Le présent Contrat fait
                        référence et incorpore par
                        référence des documents supplémentaires (les <BoldTextComponent
                            text={"\"Documents supplémentaires\""}/>, qui s'appliquent
                        également à votre utilisation de nos Services, notamment:</p>
                    <ul className="custom-letter-list">
                        <li>notre <a href={"#acceptable"}>Politique
                            d'utilisation
                            acceptable</a>, qui définit les utilisations autorisées et restreintes de nos Services.
                        </li>
                        <li>notre <a href={"#confidentiality"}>Politique de Confidentialité.</a></li>
                    </ul>
                    <p>En utilisant nos Services, vous confirmez que vous acceptez le présent Contrat dans sa forme la
                        plus récente telle qu'elle est publiée sur notre Site Web <a
                            href={"https://pri-trans.com"}>https://pri-trans.com</a> . Si vous n'êtes
                        pas d'accord, vous ne devez pas utiliser nos Services.</p>
                    <p>
                        <BoldTextComponent text={"Comment cet Accord s'applique à vous."}/> Si vous utilisez uniquement
                        nos Services pour effectuer
                        des Transferts d'argent ou maintenir un profil avec Pritrans, vous acceptez cet Accord chaque
                        fois que vous utilisez notre service de cette manière. Lorsque vous ouvrez un Compte Pritrans,
                        le présent Contrat s'applique à ce Compte Pritrans tant que le Compte Pritrans est ouvert.
                    </p>
                    <p><BoldTextComponent text={"Changements futurs."}/> Nous pouvons mettre à jour le présent Contrat
                        de temps à autre, comme indiqué
                        dans " Notre droit d'apporter des modifications". Toute modification apportée au présent Contrat
                        prendra effet dès que le Contrat sera disponible sur notre Site Web ou à la date qui vous a été
                        notifiée.</p>
                    <h4 className="list-group-item mt-3">Mots définis dans le présent Accord</h4>
                    <p><i><BoldTextComponent text={"Services"}/></i> désigne l'ensemble des produits, services,
                        contenus, fonctionnalités, technologies ou
                        fonctions proposés par nous et notre site Web, y compris le Compte Pritrans, les offres de
                        conversion de devises et de Transfert d'Argent, y compris les simples annonces.</p>
                    <p><i><BoldTextComponent text={"Site Web"}/></i> désigne notre page <PriTransWebSiteLinkComponent/>,
                        où nous
                        vous fournissons les Services.</p>
                    <p><i><BoldTextComponent text={"Compte Pritrans"}/></i> désigne le compte détenu par les clients
                        chez Pritrans.</p>
                    <p><i><BoldTextComponent text={"Transfert automatique"}/></i> désigne tout transfert internes
                        effectué par le system Pritrans sans
                        l’intervention du client pour le choix d’un autre client à faire l’échange.</p>
                    <p><i><BoldTextComponent text={"Transfert manuel"}/></i> désigne toute demande de transfert créée
                        par le client lui-même. Pritrans publie
                        simplement la demande sur la plateforme et en informe les autres clients via le bot telegram
                        Pritrans. Quand à la suite de l’opération, toute la responsabilité est assurée par le client
                        créant cette demande.</p>
                    <h4 className="list-group-item mt-3">Qui sommes-nous et comment nous contacter?</h4>
                    <p>Nous sommes Pritrans, une plateforme permettant d'effectuer des transferts d'argent entre la
                        Russie et les pays Africains pris en charge par notre system. La plateforme a été développé et est
                        gérée par <a href="https://portfolio-kivw.onrender.com/">Kibamba Jacques Jacques</a>. Il faut
                        souligner que cette plateforme a été développée uniquement pour aider les étudiants Africains en
                        Russie à recevoir de l'argent de leurs parents et proches pour subvenir à leurs besoins
                        académiques et autres, et aussi pour ces Africains vivant en Russie et souhaitant aider leurs
                        proches en Afrique.</p>
                    <p>Vous pouvez nous contacter via l'adresse électronique <span
                        className={"text-primary"}>bauerpictu@gmail.com</span>.</p>
                    <h4 className="list-group-item mt-3">Nos Services dans le cadre de cet Accord</h4>
                    <p>Chacun de nos Services fonctionne légèrement différemment, nous donnons ici un aperçu des
                        services couverts par le présent Contrat et des conditions qui s'appliquent à tous les Services
                        en vertu du présent Contrat. Vous devez lire attentivement la section du Service que vous avez
                        l'intention d'utiliser:</p>
                    <ul className="custom-letter-list">
                        <li><BoldTextComponent text={"Transfert automatique."}/> Vous pouvez effectuer un transfert
                            automatique de la manière
                            suivante: Premièrement vous devez avoir suffisamment de fonds pour effectuer cette
                            opération. Vous pouvez dans tous les cas effectuer un dépôt sur votre compte Pritrans en
                            utilisant les méthodes de paiement tels que le mobile money (argent mobile comme M-Pesa,
                            Airtel Money) ou un virement bancaire. Deuxième vous devez procéder à l'envoi d'argent en
                            indiquant le montant à envoyer, la devise, l'adresse électronique avec lequel votre
                            destinataire s'est enregistré sur Pritrans ansi que son pays de résidence où il s'est
                            enregistré sur Pritrans. Ensuite la plateforme Pritrans s'occupera des opérations restantes
                            pour effectuer le transfert d'argent.
                        </li>
                        <li><BoldTextComponent text={"Transfert manuel."}/> Vous pouvez publier une annonce indiquant
                            votre désir d'envoyer de
                            l'argent personnellement avec votre taux d'échange et vos propres conditions. Les autres
                            clients enregistrés sur la plateforme auront la possibilité de voir votre nom, prénom, le
                            montant du transfert ansi que votre numéro de téléphone pour vous contacter.
                        </li>
                        <li>
                            <BoldTextComponent text={"Le dépôt."}/> Vous pouvez déposer de l’argent sur votre compte
                            Pritrans en utilisant les
                            méthodes de paiement tels que M-Pesa , Airtel Money ou encore un virement bancaire des
                            banques supportées par la plateforme Pritrans. Vous possédez deux soldes pour chaque devise
                            : principal qui indique l’argent disponible pour un éventuel transfert ou retrait, et de
                            financement qui indique l'argent en cours des opérations (des transferts ou retrait).
                        </li>
                        <li>
                            <BoldTextComponent text={"Le retrait."}/> Vous pouvez retirer votre argent à tout moment.
                            Pour ce faire vous devez
                            avoir un portefeuille (lié à une méthode de paiement) renseignant vos coordonnées
                            financières tels que votre numéro de téléphone qui est lié à votre méthode de paiement
                            (votre
                            banque ou l’argent mobile), ou encore votre numéro bancaire, votre nom du compte et le nom
                            de la banque ou du service de l'argent mobile. L'argent demandé pour le retrait est envoyé à
                            votre compte bancaire ou au service de l'argent mobile. Par conséquent nous vous prions de
                            bien indiquer ces informations et ne pas se tromper en indiquant les informations liées à un
                            compte d'une autre personne. Vous avez la possibilité de changer ces informations à tout
                            moment avant d’effectuer un retrait.
                        </li>
                    </ul>
                    <h4 className="list-group-item mt-3">Qui Peut Utiliser Nos Services?</h4>
                    <p><BoldTextComponent text={"Condition d'âge."}/> Vous devez être un particulier et avoir au moins
                        18 ans pour utiliser nos
                        Services.</p>
                    <p><BoldTextComponent text={"Un compte Pritrans, un profil."}/> Vous ne pouvez ouvrir qu'un seul
                        compte Pritrans et un seul
                        profil.</p>
                    <p><BoldTextComponent text={"Transactions sur votre propre compte."}/> Toutes les activités sous un
                        Compte Pritrans ou un profil
                        Pritrans seront considérées comme des activités menées par vous. Vous acceptez de n'utiliser les
                        Services que pour effectuer des transactions pour votre propre compte et non pour le compte
                        d'une autre personne ou entité. Vous ne devez pas autoriser d'autres personnes à accéder ou à
                        utiliser les Services ou votre Compte Pritrans en votre nom.</p>
                    <h4 className="list-group-item mt-3">Rester En Sécurité Tout En Utilisant Nos Services</h4>
                    <p>Nous vous recommandons d'utiliser les Services pour envoyer de l'argent à vos amis, à votre
                        famille, à des entreprises de confiance et vérifiées et à des tiers que vous connaissez ou avec
                        lesquels vous avez déjà fait affaire. Vous devez être prudent lorsque vous envoyez de l'argent à
                        des destinataires que vous ne connaissez pas et avec lesquels vous n'avez jamais eu affaire
                        auparavant (cas des transferts manuels).</p>
                    <p>Lorsque vous accédez à votre compte ou profil Pritrans, vous devez au minimum procéder comme
                        suit:</p>
                    <ul className="custom-letter-list">
                        <li>Changez régulièrement votre mot de passe et assurez-vous qu'il n'est pas réutilisé pour
                            d'autres comptes en ligne.
                        </li>
                        <li>Ne partagez jamais vos informations de connexion avec quelqu'un d'autre. Cela inclut le
                            mot de passe ou d'autres informations d'identification de sécurité. Si vous pensez que
                            quelqu'un d'autre peut accéder à votre compte, contactez <ClientSupportComponent/>. <span
                                className={"fw-bold text-uppercase"}>Nous ne vous
                                demanderons jamais votre mot de passe</span>.
                        </li>
                        <li>Utilisez toujours des mots de passe forts, par exemple ceux qui utilisent un mélange de
                            lettres, de chiffres et de symboles.
                        </li>
                        <li>Mettez régulièrement à jour le navigateur de votre appareil avec la dernière version
                            disponible.
                        </li>
                        <li>Gardez votre compte de messagerie sécurisé (gmail ou autre). Vous pouvez réinitialiser
                            votre mot de passe en utilisant votre adresse e-mail. Informez
                            immédiatement <ClientSupportComponent/> si votre compte de messagerie est compromis.
                        </li>
                        <li>Entretenez les systèmes d'exploitation de votre appareil avec des mises à jour de sécurité
                            régulières fournies par le fournisseur du système d'exploitation.
                        </li>
                        <li>Installez et maintenez le dernier logiciel antivirus sur votre appareil, le cas échéant.
                        </li>
                        <li>Il est essentiel de vous assurer à chaque fois que vous entrez votre nom d'utilisateur et
                            votre mot de passe Pritrans qu'ils se trouvent uniquement sur un navigateur,
                            à <PriTransWebSiteLinkComponent/>.
                            Les e-mails et SMS envoyés par des fraudeurs peuvent conduire à de
                            faux portails de connexion qui pourraient hameçonner vos informations de connexion. De même,
                            les criminels peuvent placer des publicités malveillantes sur les moteurs de recherche qui
                            mènent à de faux sites Web d'entreprises de confiance, y compris Pritrans.
                        </li>
                        <li>Si vous pensez avoir été victime d'une arnaque, contactez <ClientSupportComponent/>.</li>
                    </ul>
                    <p>Vous <span className={"fw-bold"}>NE DEVEZ PAS:</span></p>
                    <ul className="custom-letter-list">
                        <li>Divulguer vos identifiants de connexion à n'importe qui. Vous devez les garder en
                            sécurité.
                        </li>
                        <li>Permettre à quiconque d'accéder à votre compte ou profil Pritrans, ou regardez-vous y
                            accéder, y compris en laissant quelqu'un d'autre prendre le contrôle à distance de
                            votre(vos) appareil (s).
                        </li>
                        <li>Utiliser toute fonctionnalité qui permet à vos informations de connexion ou mots de passe
                            d'être stockés par l'ordinateur ou le navigateur que vous utilisez ou d'être mis en cache ou
                            autrement enregistrés.
                        </li>
                    </ul>
                    <p>Contactez-nous si vous pensez que votre compte ou profil Pritrans a été compromis. Si vous
                        soupçonnez que votre Compte, profil ou autres identifiants de connexion Pritrans sont volés,
                        perdus, utilisés sans votre autorisation ou autrement compromis, vous devez contacter
                        immédiatement <ClientSupportComponent/>. Il vous est également conseillé de changer votre mot de
                        passe.</p>
                    <p>Tout retard dans la notification d'un compte compromis peut affecter la sécurité de votre compte
                        et entraîner des pertes dont vous seriez responsable. Vous devez nous fournir toute l'aide
                        raisonnable dont nous avons besoin de votre part pour enquêter et prendre toute mesure
                        nécessaire pour sécuriser votre compte.</p>
                    <p>Vous êtes responsable de vous assurer que votre technologie de l'information, vos programmes
                        informatiques et votre plateforme sont configurés pour accéder à nos Services. Nous ne pouvons
                        garantir que nos Services seront exempts de bugs ou de virus.</p>
                    <h4 className="list-group-item mt-3">Limites sur La Façon Dont Vous Pouvez Utiliser Nos
                        Services</h4>
                    <p><BoldTextComponent text={"Vous ne devez pas abuser de nos systèmes."}/> Vous ne devez pas abuser
                        de nos systèmes en:</p>
                    <ul className="custom-letter-list">
                        <li>Introduire des virus, chevaux de Troie, vers, bombes logiques ou autres matériels
                            malveillants ou technologiquement nuisibles.
                        </li>
                        <li>Prendre toute mesure qui impose une charge déraisonnable ou disproportionnée sur nos
                            sites Web, logiciels, systèmes (y compris les réseaux et serveurs utilisés pour fournir l'un
                            des Services) exploités par nous ou en notre nom, ou attaquer notre Site Web avec tout type
                            d'attaque par déni de service.
                        </li>
                        <li>Utiliser un proxy d'anonymisation; utiliser tout robot, araignée, autre appareil
                            automatique ou processus manuel pour surveiller ou copier nos sites Web sans notre
                            autorisation écrite préalable; ou utiliser tout appareil, logiciel ou routine pour
                            contourner nos en-têtes d'exclusion de robot.
                        </li>
                        <li>Interférer, perturber ou tenter d'interférer ou d'obtenir un accès non autorisé à notre
                            site Web, (y compris les réseaux et serveurs utilisés pour fournir l'un des Services
                            Pritrans) exploités par nous ou en notre nom, l'un des Services Pritrans ou l'utilisation
                            par d'autres utilisateurs de l'un des Services Pritrans.
                        </li>
                    </ul>
                    <p><BoldTextComponent text={"Vous ne devez pas abuser de nos systèmes."}/> Vous ne devez pas abuser
                        de nos systèmes en:</p>
                    <ul className="custom-letter-list">
                        <li>Violation du présent Contrat, d'un Document supplémentaire ou de tout autre accord entre
                            vous et toute entité Pritrans.
                        </li>
                        <li>Violer toute loi, statut, ordonnance ou réglementation (par exemple, celles régissant les
                            services financiers, la protection des consommateurs,la concurrence déloyale, la lutte
                            contre la discrimination ou la publicité mensongère).
                        </li>
                        <li>Enfreindre la Propriété Intellectuelle de Pritrans.</li>
                        <li>Agir de manière diffamatoire, calomnieuse, menaçante ou harcelante.</li>
                        <li>Fournir des informations fausses, inexactes ou trompeuses.</li>
                        <li>Envoyer ou recevoir ce que nous pensons être des fonds potentiellement gagnés
                            frauduleusement.
                        </li>
                        <li>Refuser de coopérer à une enquête ou de fournir une confirmation de votre identité ou de
                            toute information demandée par nous.
                        </li>
                        <li>
                            Utiliser les Services de Pritrans d'une manière qui entraîne ou peut entraîner:
                            <ul className={"custom-roman-list"}>
                                <li>plaintes vers ou à propos de Pritrans.</li>
                                <li>demandes de tiers d'invalider les paiements qui vous sont versés.</li>
                                <li>frais, amendes, pénalités ou autres responsabilités ou pertes envers Pritrans,
                                    d'autres clients Pritrans, des tiers ou vous.
                                </li>
                            </ul>
                        </li>
                        <li>Permettre à votre compte Pritrans d'avoir un solde négatif.</li>
                        <li>Accéder aux Services Pritrans à partir d'un pays que Pritrans n'est pas autorisé à
                            exploiter.
                        </li>
                        <li>Prendre toute mesure susceptible de nous faire perdre l'un des services de nos
                            fournisseurs de services Internet, processeurs de paiement ou autres fournisseurs ou
                            prestataires de services.
                        </li>
                        <li>Contourner le présent Contrat ou tout Document supplémentaire ou politique Pritrans ou
                            décisions concernant votre Compte Pritrans, telles que des suspensions temporaires ou
                            indéfinies ou d'autres suspensions, limitations ou restrictions de compte, y compris, mais
                            sans s'y limiter, s'engager dans les actions suivantes:
                            <ul className={"custom-roman-list"}>
                                <li>tenter d'ouvrir un ou plusieurs comptes ou profils Pritrans nouveaux ou
                                    supplémentaires lorsqu'un compte a un solde négatif ou a été restreint, suspendu ou
                                    autrement limité.
                                </li>
                                <li>L'ouverture de comptes ou de profils Pritrans nouveaux ou supplémentaires à
                                    l'aide d'informations qui ne vous appartiennent pas (par exemple, nom, adresse,
                                    adresse e-mail, etc.), ou en utilisant le compte Pritrans de quelqu'un d'autre.
                                </li>
                                <li>Harceler, être abusif envers et / ou menacer nos employés, agents ou autres
                                    clients.
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p><BoldTextComponent
                        text={"Nous pouvons suspendre votre Compte Pritrans ou votre accès à nos Services."}/> Nous
                        pouvons
                        suspendre votre profil ou votre compte Pritrans, ou restreindre ses fonctionnalités si nous
                        avons des préoccupations raisonnables concernant:</p>
                    <ul className={"custom-letter-list"}>
                        <li>la sécurité de votre compte Pritrans ou de votre profil.</li>
                        <li>suspicion d'utilisation non autorisée ou frauduleuse de votre Compte Pritrans ou de nos
                            Services; ou
                        </li>
                        <li>violations présumées du présent Contrat ou des Documents supplémentaires, y compris
                            notre <a href={"#acceptable"}>Politique d'utilisation acceptable</a>.
                        </li>
                    </ul>
                    <p>Nous vous informerons de toute suspension ou restriction et des raisons de cette suspension ou
                        restriction dès que possible, soit avant la mise en place de la suspension ou de la restriction,
                        soit peu de temps après, à moins qu'une notification ne soit illégale ou compromette nos mesures
                        de sécurité raisonnables.</p>
                    <p><BoldTextComponent
                        text={"Les mesures que nous pouvons prendre si vous abusez de nos Services ou systèmes."}/> Si
                        nous pensons
                        que l'une des activités énumérées dans la présente section 7 a été entreprise par vous, nous
                        pouvons prendre plusieurs mesures pour protéger Pritrans, ses clients et d'autres personnes, à
                        tout moment et à notre seule discrétion. Les mesures que nous pouvons prendre comprennent, sans
                        s'y limiter, les suivantes:</p>
                    <ul className={"custom-letter-list"}>
                        <li>résilier le présent Contrat immédiatement;</li>
                        <li>suspension de votre Compte Pritrans ou de votre profil durant une période, pendant
                            laquelle votre Compte Pritrans et votre profil resteront ouverts mais ne pourront pas être
                            exploités ou pourront être soumis à des restrictions, ou vous ne pourrez peut-être pas
                            utiliser nos Services, jusqu'à ce que nous supprimions la suspension;
                        </li>
                        <li>la fermeture de votre Compte Pritrans et la résiliation de votre accès à nos Services, ce
                            qui signifie que votre Compte Pritrans est désactivé et/ou que votre profil ne sera plus
                            disponible, sans préavis et sans pénalité pour nous;
                        </li>
                        <li>signaler une violation présumée de la loi, de la réglementation ou d'une loi pénale aux
                            autorités compétentes chargées de l'application de la loi, et nous coopérerons avec ces
                            autorités, y compris en leur divulguant votre identité;
                        </li>
                        <li>refuser de vous fournir nos Services, à vous ou à vos entreprises ou sociétés affiliées à
                            l'avenir;
                        </li>
                        <li>limiter votre accès à notre Site Web, nos systèmes (y compris tous les réseaux et
                            serveurs utilisés pour fournir l'un des Services Pritrans) exploités par nous ou en notre
                            nom, votre Compte Pritrans ou l'un des Services, y compris limiter votre capacité à payer,
                            convertir ou envoyer de l'argent avec l'une des méthodes de paiement liées à votre Compte
                            Pritrans, restreindre votre capacité à envoyer de l'argent ou à effectuer des retraits;
                        </li>
                        <li>détenir le solde de votre Compte Pritrans si cela est raisonnablement nécessaire pour
                            vous protéger contre le risque de responsabilité ou si nous pensons raisonnablement que vous
                            avez enfreint notre <a href={"#acceptable"}>Politique d'utilisation acceptable</a>;
                        </li>
                        <li>contacter votre banque ou l'émetteur de votre carte de crédit, d'autres tiers concernés
                            ou les forces de l'ordre au sujet de vos actions;
                        </li>
                        <li>mise à jour des informations inexactes que vous nous avez fournies.</li>
                    </ul>
                    <h4 className="list-group-item mt-3">Informations sur votre compte Pritrans</h4>
                    <ul className={"custom-letter-list"}>
                        <li>Votre compte Pritrans vous permet de détenir, envoyer et recevoir des fonds et de convertir
                            des devises.
                        </li>
                        <li>Les fonds détenus sur votre compte Pritrans n'expirent pas.</li>
                        <li>Les fonds détenus sur votre Compte Pritrans peuvent ne rapporter aucun intérêt ni
                            rendement.
                        </li>
                        <li>Vous pouvez détenir vos fonds dans toutes les devises que nous prenons en charge de temps à
                            autre.
                        </li>
                        <li>Vous pouvez retirer des fonds de votre Compte Pritrans à tout moment.</li>
                        <li>Les fonds détenus sur votre Compte Pritrans vous appartiennent en tant que titulaire
                            enregistré du Compte Pritrans.
                        </li>
                        <li>Vous ne pouvez pas placer de frais ou d'autres formes de sécurité sur votre Compte
                            Pritrans.
                        </li>
                        <li>Nous pouvons imposer certaines limites à votre Compte Pritrans en fonction de votre pays
                            de résidence, de votre statut de vérification ou d'autres considérations juridiques.
                        </li>
                        <li>Nous pouvons, à notre seule et absolue discrétion, rejeter une transaction demandée, ou
                            rembourser un paiement ou une autre transaction, pour quelque raison que ce soit, y compris,
                            sans limitation, lorsque la valeur de votre Compte Pritrans pourrait dépasser directement ou
                            indirectement toute valeur autorisée en vertu des lois et réglementations applicables ou
                            toute autre limite réglementaire ou de risque prescrite pour ce Compte Pritrans.
                        </li>
                    </ul>
                    <p><BoldTextComponent
                        text={"Pritrans n'est pas une banque, et votre compte Pritrans n'est pas un compte bancaire."}/> Comme
                        Pritrans n'est pas une banque, nous utilisons la sauvegarde pour protéger votre argent.</p>
                    <p><BoldTextComponent text={"Ajouter de l'argent à votre compte Pritrans."}/> Pour ajouter des fonds
                        à votre compte Pritrans, vous
                        devez vous connecter à votre compte Pritrans et suivre les étapes. Une ou plusieurs méthodes
                        d'ajout de fonds à votre compte Pritrans peuvent vous être présentées. Par exemple, vous pouvez
                        utiliser un virement bancaire, ou de paiement auprès d'un tiers, ou utiliser une carte de crédit
                        ou une carte de débit (dans le présent Contrat, nous appellerons ces méthodes “Méthodes de
                        paiement”). Toute méthode de paiement que vous utilisez pour ajouter de l'argent à votre compte
                        Pritrans doit être à votre nom.</p>
                    <p><BoldTextComponent text={"Méthodes de paiement."}/> Les méthodes de paiement mises à votre
                        disposition dépendront de quelques
                        facteurs, notamment de votre lieu de résidence et de votre statut de vérification auprès de
                        nous. Vous verrez la méthode de paiement disponible lorsque vous choisirez d'ajouter des fonds à
                        votre compte Pritrans ou ajouter une méthode de paiement dans l’ongle «Portefeuille». Nous ne
                        pouvons pas garantir la disponibilité d'une Méthode de paiement particulière et nous pouvons
                        modifier ou cesser d'offrir une Méthode de paiement à tout moment sans préavis.</p>
                    <p><BoldTextComponent text={"Restrictions sur l'ajout d'argent."}/> Nous proposons uniquement les
                        Méthodes de paiement que vous
                        voyez lorsque vous accédez à nos Services. Les autres méthodes, comme un chèque papier ou
                        électronique, et l'argent comptant ne seront pas acceptés. Pour des raisons juridiques, de
                        sécurité ou autres, il peut y avoir des limites financières sur les méthodes de paiement ou les
                        devises que vous avez choisies, y compris le montant que vous pouvez ajouter à votre Compte
                        Pritrans. Nous vous ferons savoir au moment d'ajouter de l'argent s'il y a une limite.</p>
                    <p><BoldTextComponent text={"Lorsque l'argent reçu est affiché sur votre compte Pritrans."}/> Tout
                        argent que vous recevez sur
                        votre compte Pritrans sera converti en monnaie électronique et enregistré dans votre historique
                        de transactions. Vous devez vérifier et confirmer régulièrement la réception des fonds entrants
                        sur votre compte Pritrans et nous informer de toute irrégularité ou divergence.</p>
                    <p><BoldTextComponent text={"Quand nous créditerons votre compte Pritrans."}/> Nous ne sommes pas
                        responsables des fonds que vous
                        avez ajoutés jusqu'à ce que nous les ayons reçus. Pour plus de clarté, lorsque vous ajoutez des
                        fonds à votre compte Pritrans, nous sommes le destinataire de ces fonds. Cela signifie que la
                        banque ou le prestataire de services de paiement que vous avez utilisé pour nous envoyer les
                        fonds est responsable de s'assurer que nous les recevons afin que nous puissions les créditer
                        sur votre Compte Pritrans. </p>
                    <h4 className="list-group-item mt-3">Retirer des fonds de votre compte Pritrans</h4>
                    <p><BoldTextComponent text={"Vous pouvez demander à retirer vos fonds."}/> Vous pouvez retirer tout
                        ou partie du solde principal
                        de votre compte Pritrans. Nous pouvons vous facturer des frais pour chaque demande de retrait,
                        nous vous indiquerons le montant (allant de 1 à 2%) exact lorsque vous soumettrez votre
                        demande. </p>
                    <p><BoldTextComponent text={"Méthodes de paiement à votre disposition."}/> Une ou plusieurs méthodes
                        de retrait peuvent vous être
                        présentées (dans le présent Contrat, nous appellerons ces méthodes "Méthodes de paiement"). Le
                        nombre de méthodes de paiement mises à votre disposition dépendra de quelques facteurs,
                        notamment de votre lieu de résidence et de votre statut de vérification auprès de nous. Nous ne
                        pouvons garantir l'utilisation d'aucune Méthode de Paiement et pouvons modifier ou cesser
                        d'offrir une Méthode de Paiement à tout moment sans préavis.</p>
                    <p><BoldTextComponent text={"Vous devez nous fournir des informations correctes."}/> Lors de la
                        configuration (ou l’ajout de votre
                        portefeuille) de votre demande de retrait, vous devez vous assurer que les informations que vous
                        fournissez sont correctes et complètes. Nous ne serons pas responsables de l'argent envoyé au
                        mauvais destinataire en raison d'informations incorrectes fournies par vous.</p>
                    <p><BoldTextComponent text={"Votre demande de retrait est soumise à des limites."}/> Vous acceptez
                        que votre Compte Pritrans soit
                        soumis à des limites de retrait. Si votre demande de retrait dépasse la limite actuelle, nous
                        pouvons refuser votre demande ou nous pouvons vous demander de nous fournir des documents
                        supplémentaires afin que nous puissions effectuer des vérifications supplémentaires avant
                        d'autoriser le retrait de l'argent.</p>
                    <p><BoldTextComponent text={"Délai du retrait."}/> Nous pouvons retarder un retrait dans certaines
                        situations, y compris si nous
                        devons confirmer que le retrait a été autorisé, pour effectuer des vérifications, ou si d'autres
                        paiements sur votre Compte Pritrans ont été annulés (par exemple, en raison d'un rejet de débit
                        ou d'une annulation). Nous ne pouvons être tenus responsables de tels retards, à condition que
                        nous ayons agi raisonnablement en retardant un retrait.</p>
                    <h4 className="list-group-item mt-3">Envoyer de l'argent.</h4>
                    <p><BoldTextComponent
                        text={"Informations que vous devez fournir pour effectuer un transfert d'argent."}/> Pour
                        effectuer un
                        Transfert d'argent, vous devrez nous fournir certaines informations, y compris, mais sans s'y
                        limiter, l'adresse électronique avec lequel votre destinataire s’est enregistré sur Pritrans,
                        son pays d’enregistrement sur Pritrans, et le montant et la devise que vous envoyez.</p>
                    <p>Vous devrez vous connecter à votre Compte Pritrans en utilisant tous les mots de passe et invites
                        pertinents pour effectuer une transaction de transfert d'argent. Nous considérerons votre
                        utilisation de tous les mots de passe et invites pertinents comme un consentement de votre part
                        à effectuer un Transfert d'argent.</p>
                    <p><BoldTextComponent text={"Limites des ordres de paiement."}/> Nous pouvons imposer des limites
                        sur le montant que vous pouvez
                        envoyer par Transfert d'argent. </p>
                    <p>Nous utilisons le taux d'échange de <BoldTextComponent text={"Sberbank"}/> au moment où vous
                        effectuez votre transfert de
                        fonds.</p>
                    <h4 className="list-group-item mt-3">Droits de Propriété Intellectuelle</h4>
                    <p>Tous les droits, titres et intérêts relatifs à tout logiciel (y compris, sans limitation, le Site
                        Web, les outils de développement, les exemples de code source et les bibliothèques de codes),
                        données, documents, contenus et documentation imprimée et électronique (y compris toutes
                        spécifications et guides d'intégration) développés, fournis ou mis à votre disposition par nous
                        ou nos sociétés affiliées, y compris le contenu du Site Web, et toute technologie et tout
                        contenu créés ou dérivés de l'un de ces éléments et nos Services sont la propriété exclusive de
                        Pritrans et de ses concédants de licence. Tous ces droits sont réservés.</p>
                    <h4 className="list-group-item mt-3">Notre responsabilité en cas de perte ou de dommage</h4>
                    <p><BoldTextComponent text={"Perte ou dommage imprévisible."}/> Nous ne sommes pas responsables de
                        toute perte ou dommage qui
                        n'est pas prévisible. Une perte ou un dommage est prévisible s'il est évident que cela se
                        produira ou si, au moment de la conclusion du contrat, vous et nous savions que cela pourrait se
                        produire, par exemple, si vous en avez discuté avec nous lors de votre processus
                        d'inscription.</p>
                    <p><BoldTextComponent text={"Nous ne sommes pas responsables des pertes commerciales."}/> Dans la
                        mesure permise par la loi, si
                        vous utilisez nos Services à des fins commerciales ou affaires, nous n'aurons aucune
                        responsabilité envers vous pour toute perte de profit, perte d'activité, interruption
                        d'activité, perte d'opportunité commerciale ou similaire.</p>
                    <p><BoldTextComponent text={"Nous ne sommes pas responsables des attaques technologiques."}/> Nous
                        ne serons pas responsables de
                        toute perte ou dommage causé par un virus, ou d'autres problèmes technologiques ou attaques ou
                        matériel nuisible pouvant infecter votre équipement informatique, vos programmes informatiques,
                        vos données ou tout autre matériel propriétaire lié à votre utilisation de nos Services.</p>
                    <p><BoldTextComponent
                        text={"Nous ne sommes pas responsables des choses qui échappent à notre contrôle."}/> Nous (et
                        nos affiliés)
                        ne pouvons être tenus responsables de notre incapacité à livrer ou de notre retard en raison de
                        choses indépendantes de notre volonté.</p>
                    <h4 className="list-group-item mt-3">Notre droit d'apporter des modifications</h4>
                    <ol className={"list-group-numbered"}>
                        <li className={"list-group-item"}><BoldTextComponent
                            text={"Nous pouvons modifier le présent Contrat en vous donnant un préavis écrit d'au moins un (1) mois."}/> Cet
                            avis sera fourni soit par e-mail, soit en
                            affichant un avis sur notre page Web. Si nous faisons cela, vous pouvez résilier le présent
                            Contrat immédiatement en fermant votre Compte ou profil Pritrans et en cessant d'utiliser
                            nos Services pendant la période de préavis. Si nous n'avons pas de vos nouvelles pendant la
                            période de préavis, vous serez considéré comme ayant accepté les modifications proposées et
                            elles s'appliqueront à vous à compter de la date d'entrée en vigueur spécifiée sur l'avis.
                        </li>
                        <li className={"list-group-item"}><BoldTextComponent
                            text={"Dans certains cas, nous pouvons modifier cet Accord immédiatement."}/> Nonobstant
                            l'article 13.1, les
                            modifications apportées au présent Contrat qui
                            ne nécessitent pas un préavis d’un mois ou qui sont :
                            <ul className={'custom-roman-list'}>
                                <li>plus favorables pour vous;</li>
                                <li>requis par la loi;</li>
                                <li>lié à l'ajout d'un nouveau service, de fonctionnalités supplémentaires au Service
                                    existant; ou;
                                </li>
                                <li>les modifications qui ne réduisent pas vos droits ni n'augmentent vos
                                    responsabilités entreront en vigueur immédiatement si elles sont indiquées dans
                                    l'avis de modification. Les modifications des taux de change entreront en vigueur
                                    immédiatement sans préavis et vous n'aurez pas le droit de vous opposer à une telle
                                    modification.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </ol>
            </section>
            <section id={"acceptable"}>
                <h3 className={"text-center"}><i>Politique d'Utilisation Acceptable</i></h3>
                <i className={"mb-3"}>Dernière mise à jour: 20 août 2024.</i>
                <p>Cette Politique d'utilisation acceptable définit les conditions dans lesquelles vous pouvez accéder à
                    nos Services et s'applique dès que vous accédez et/ou utilisez Pritrans.</p>
                <p>Veuillez vérifier <a href={"#user_agreement"}>le Contrat d'utilisation</a> pour la signification des
                    mots définis.</p>
                <ol className="list-group-numbered">
                    <h4 className="list-group-item mt-3">Activités restreintes.</h4>
                    <p><BoldTextComponent
                        text={"Vous ne pouvez utiliser nos Services qu'à des fins légales. Vous ne pouvez pas utiliser nos Services:"}/>
                    </p>
                    <ul className={"custom-letter-list"}>
                        <li>d'une manière qui enfreint toute loi ou réglementation locale, nationale ou
                            internationale applicable, ou amène Pritrans à enfreindre toute loi ou réglementation
                            applicable;
                        </li>
                        <li>d'une manière illégale ou frauduleuse, ou ayant un but ou un effet illégal ou
                            frauduleux;
                        </li>
                        <li>dans le but de nuire ou de tenter de nuire à des mineurs de quelque manière que ce
                            soit;
                        </li>
                        <li>pour tout ce qui est abusif, nuisible ou non conforme à nos normes de contenu;</li>
                        <li>pour toute publicité non sollicitée ou non autorisée, matériel promotionnel ou toute
                            autre forme de spam;
                        </li>
                        <li>pour traiter des programmes nuisibles tels que des virus, des logiciels espions ou des
                            codes informatiques similaires conçus pour nuire au fonctionnement de tout logiciel ou
                            matériel informatique;
                        </li>
                        <li>d'une manière qui éviterait localement ou internationalement toute taxe applicable ou
                            faciliterait l'évasion fiscale.
                        </li>
                    </ul>
                    <p><BoldTextComponent text={"Entreprises et transactions non prises en charge"}/></p>
                    <p>Nous ne soutenons pas les entreprises ou les transactions qui sont impliquées dans l'une des
                        catégories suivantes, ces entreprises ou transactions peuvent être refusées. Bien que cette
                        liste soit représentative, elle n'est pas exhaustive et nous nous réservons le droit de refuser
                        nos services à tout client qui dépasse notre tolérance au risque.</p>
                    <p><BoldTextComponent text={"Produits et services réglementés ou illégaux"}/></p>
                    <ul className={"custom-letter-list"}>
                        <li>Contenu pour adultes.</li>
                        <ul className={"custom-roman-list"}>
                            <li>Pornographie et autres contenus visuels décrivant explicitement des actes sexuels.</li>
                            <li>Services à caractère sexuel (shows webcam, chats en direct, prostitution, escortes,
                                etc.).
                            </li>
                            <li>Établissements à orientation sexuelle (salons de massage, clubs de strip-tease, clubs
                                pour hommes).
                            </li>
                        </ul>
                        <li>Entreprises d'alcool.</li>
                        <ul className={"custom-roman-list"}>
                            <li>Les paiements pour la vente d'alcool aux clients de détail ne sont pas pris en charge.
                            </li>
                        </ul>
                        <li>Produits du tabac.</li>
                        <li>Le Cannabis</li>
                        <ul className={"custom-roman-list"}>
                            <li>Produits contenant du CBD.</li>
                            <li>Tout autre produit ou service lié au commerce légal de marijuana.</li>
                        </ul>
                        <li>Certaines substances réglementées ou d'autres produits qui présentent un risque pour la
                            sécurité des consommateurs.
                        </li>
                        <ul className={"custom-roman-list"}>
                            <li>Drogues intelligents, suppléments nootropiques.</li>
                            <li>Les substances qui procurent des effets similaires à ceux des drogues illicites (kratom,
                                khat, etc.).
                            </li>
                            <li>Stéroïdes anabolisants et peptides.</li>
                        </ul>
                        <li>Attirail de drogue</li>
                        <ul className={"custom-roman-list"}>
                            <li>Tout équipement, produit ou matériel destiné à la fabrication, à l'utilisation ou à
                                la dissimulation de drogues.
                            </li>
                        </ul>
                        <li>Violation de la propriété intellectuelle ou des droits de propriété.</li>
                        <ul className={"custom-roman-list"}>
                            <li>Tout produit ou service qui enfreint directement ou facilite la violation des droits
                                d'auteur, brevets, marques de commerce, secrets commerciaux, droits de propriété ou de
                                confidentialité d'un tiers.
                            </li>
                        </ul>
                        <li>Jeux d'Argent</li>
                        <li>Produits et services qui ne sont pas légaux dans la juridiction dans laquelle ils sont
                            proposés.
                        </li>
                        <li>Marchandises contrefaites ou non autorisées.</li>
                        <li>Produits Chimiques.</li>
                        <ul className={"custom-roman-list"}>
                            <li>Produits chimiques de base.
                            </li>
                        </ul>
                        <li>Produits Pharmaceutiques.</li>
                        <ul className={"custom-roman-list"}>
                            <li>Pharmacies en ligne.</li>
                            <li>Les paiements pour la vente de produits pharmaceutiques à des clients de détail ne
                                sont pas pris en charge.
                            </li>
                        </ul>
                    </ul>
                    <p><BoldTextComponent text={"Services financiers et autres services professionnels"}/></p>
                    <ul className={"custom-letter-list"}>
                        <li>Services d'entiercement.</li>
                        <li>Plateformes permettant le trading et / ou l'échange de FX / CFD / options</li>
                        <li>Banques écrans.</li>
                        <li>Fonds de pension de retraite.</li>
                        <li>Tout autre service financier opérant sans licence lorsqu'une licence est requise.</li>
                    </ul>
                    <h4 className="list-group-item mt-3">Modifications de la Politique d'utilisation acceptable</h4>
                    <p>Nous pouvons réviser cette Politique d'utilisation acceptable à tout moment en modifiant cette
                        page. Nous vous recommandons de consulter régulièrement cette page car elle est juridiquement
                        contraignante pour vous.</p>
                </ol>
            </section>
            <section id={"confidentiality"} className={"mb-5"}>
                <h3 className={"text-center"}><i>Politique de confidentialité</i></h3>
                <i className={"mb-3"}>L’actuelle Politique de confidentialité entre en vigueur le 20 août 2024.</i>
                <p>La présente Politique de confidentialité (<BoldTextComponent text={"« Politique »"}/>) explique
                    comment nous collectons, utilisons
                    et traitons vos données à caractère personnel lorsque vous utilisez notre site
                    Web <PriTransWebSiteLinkComponent/> (<BoldTextComponent text={"« Site Web »"}/>) et les messages
                    électroniques que
                    nous vous envoyons
                    (conjointement appelés les <BoldTextComponent text={"« Services »"}/> ) par e-mail ou notre bot
                    telegram. Si une de ces
                    dispositions s’applique uniquement à un de nos Services ou à des clients dans un pays particulier,
                    nous vous le signalerons explicitement. </p>
                <p>En poursuivant vos interactions avec nous, par exemple en nous soumettant des informations ou en
                    utilisant nos Services, vous confirmez que vous comprenez et acceptez la collecte, l’utilisation,
                    la divulgation et le traitement de vos données à caractère personnel (ou des données à caractère
                    personnel de toute personne que vous fournissez) comme décrit dans la présente Politique de
                    confidentialité.</p>
                <ol className="list-group-numbered">
                    <h4 className="list-group-item mt-3">Données que nous collectons à votre sujet</h4>
                    <p>Les données à caractère personnel, ou informations personnelles, désignent toute information
                        concernant une personne identifiée ou identifiable. Elles ne comprennent pas les données
                        anonymes, qui ne peuvent pas être liées à un individu. Nous collecterons et traiterons vos
                        données à caractère personnel comme suit :</p>
                    <BoldTextComponent text={"Les informations que vous nous fournissez."}/>
                    <ul className={"custom-letter-list"}>
                        <li>Vous pouvez nous fournir des informations vous concernant lorsque vous vous inscrivez
                            pour utiliser nos Services, par exemple : lorsque vous nous fournissez des informations
                            personnelles, y compris votre nom complet et votre adresse e-mail. Cela inclut également les
                            informations que vous fournissez par le biais de votre utilisation continue de nos Services,
                            à une enquête et en signalant des problèmes avec nos Services. Les informations
                            supplémentaires que vous nous fournissez à des fins de sécurité, d’identification et de
                            vérification peuvent inclure votre adresse, votre numéro de téléphone,votre date de
                            naissance, des informations financières (y compris les informations de carte de crédit, de
                            carte de débit ou de compte bancaire). Si vous ne fournissez pas l’une de ces informations,
                            cela pourrait affecter notre capacité à vous fournir nos Services.
                        </li>
                        <li>En fournissant les données à caractère personnel de toute personne autre que vous-même, y
                            compris les personnes liées, vous confirmez que vous avez obtenu le consentement de ces
                            personnes pour nous divulguer leurs données à caractère personnel ou que vous êtes autrement
                            autorisé à nous fournir ces informations. Vous confirmez également que vous avez porté cette
                            Politique à leur attention si la loi l’exige et que vous avez reçu leur consentement pour la
                            collecte, l’utilisation et la divulgation de ces données à caractère personnel aux fins
                            énoncées dans la présente Politique. Le terme « personne liée » désigne une personne liée à
                            Pritrans par l’utilisation de nos Services et peut être un titulaire de compte, un
                            bénéficiaire de paiement, le destinataire d’un paiement désigné, un garant, un directeur, un
                            actionnaire, des partenaires ou des membres d’un partenariat, un fiduciaire, un signataire
                            autorisé d’un compte désigné, un ami que vous avez recommandé, ou toute autre personne ayant
                            une relation pertinente avec Pritrans.
                        </li>
                        <li>Veuillez vous assurer que vos données à caractère personnel sont à jour, complètes et
                            exactes en vous connectant à votre compte et en les mettant à jour chaque fois que
                            nécessaire.
                        </li>
                        <li>Tout utilisateur de nos Service peut avoir accès à votre numéro de téléphone lorsque vous
                            publier une annonce de transfert manuel.
                        </li>
                    </ul>
                    <p><BoldTextComponent text={"Données sur les enfants."}/></p>
                    <p>Nos produits et services s’adressent aux adultes et ne sont pas destinés aux enfants. Par
                        conséquent, nous ne collectons pas sciemment de données auprès des enfants. Toutes les données
                        collectées auprès d’un enfant avant que son âge ne soit déterminé seront supprimées.</p>
                    <h4 className="list-group-item mt-3">Comment nous protégeons vos informations personnelles</h4>
                    <p><BoldTextComponent text={"Nous prenons très au sérieux la protection de vos informations."}/> La
                        transmission d’informations
                        via Internet n’est pas totalement sécurisée. Bien que nous fassions de notre mieux pour protéger
                        vos données à caractère personnel, nous ne pouvons pas garantir la sécurité de vos données
                        pendant la transmission, et toute transmission se fait à vos propres risques. Une fois que nous
                        avons reçu vos informations, nous utilisons des procédures et des dispositifs de sécurité
                        stricts pour nous assurer qu’elles restent sécurisées, notamment :</p>
                    <ul className={"custom-letter-list"}>
                        <li>les communications sur Internet entre vous et les systèmes Pritrans sont chiffrées à
                            l’aide d’un cryptage asymétrique puissant ce qui les rend illisibles pour toute personne qui
                            pourrait écouter;
                        </li>
                        <li>nous mettons à jour et patchons nos serveurs en temps opportun.
                        </li>
                    </ul>
                    <h4 className="list-group-item mt-3">Comment nous utilisons vos informations</h4>
                    <p><BoldTextComponent text={"Base légale:"}/> Nous n’utiliserons vos données à caractère personnel
                        que lorsque la loi nous le
                        permet. Selon le pays dans lequel vous vous trouvez, nous nous appuyons sur les bases légales
                        suivantes pour traiter vos données à caractère personnel : </p>
                    <ul className={"custom-letter-list"}>
                        <li>lorsque vous nous avez donné votre consentement pour le traitement de vos données,
                            veuillez noter que lorsque nous traitons vos données à caractère personnel sur la base du
                            consentement, les réglementations locales applicables s’appliquent;
                        </li>
                        <li>lorsque cela est nécessaire pour nos intérêts légitimes (ou ceux d’un tiers) et que vos
                            intérêts et droits fondamentaux ne prévalent pas sur ces intérêts;
                        </li>
                        <li>lorsque nous avons l’obligation légale de traiter vos données à caractère personnel pour
                            nous conformer aux lois, réglementations ou ordonnances d’un tribunal;
                        </li>
                        <li>lorsque cela est nécessaire pour remplir nos obligations en vertu d’un contrat avec vous;
                        </li>
                        <li>lorsqu’il est nécessaire de protéger vos intérêts vitaux ou ceux d’autrui.</li>
                    </ul>
                    <h4 className="list-group-item mt-3">Modifications de notre Politique de confidentialité</h4>
                    <p>Pour suivre l’évolution de la législation, des meilleures pratiques et des changements dans la
                        façon dont nous traitons les informations personnelles, nous pouvons réviser cette Politique à
                        tout moment en publiant une version révisée sur ce site Web. Pour rester informé de tout
                        changement, revenez régulièrement.</p>
                </ol>
            </section>
            <hr/>
            <hr/>
            <hr/>
        </div>
    );
};

export default TermAndConditionPage;