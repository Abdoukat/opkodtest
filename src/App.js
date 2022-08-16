import React, {useState} from "react";
import Header from "./Header";
import FAQ from "./FAQ";



function App() {
  
  const [faqs, setfaqs] = useState([
    {
      id: 1,
      question: "Commande",
      reponse: "Commande de A à Z",
      ouvert: false
    },
    {
      id: 2,
      question: "Paiement",
      reponse: "Paiement de A à Z",
      ouvert: false
    },
    {
      id: 3,
      question: "Offres promotionnelles",
      reponse: "Offres promotionnelles de A à Z",
      ouvert: false
    },
    {
      id: 4,
      question: "Livraison",
      reponse: "Livraison de A à Z",
      ouvert: false
    },
    {
      id: 5,
      question: "Retour",
      reponse: "Retour de A à Z",
      ouvert: false
    },
    {
      id: 6,
      question: "Remboursement",
      reponse: "Remboursement de A à Z",
      ouvert: false
    },
    {
      id: 7,
      question: "Service après-vente",
      reponse: "Le SAV de A à Z",
      ouvert: false
    },
    {
      id: 8,
      question: "Mon compte",
      reponse: "Mon compte de A à Z",
      ouvert: false
    },
    {
      id: 9,
      question: "DOM-TOM",
      reponse: "DOM-TOM de A à Z",
      ouvert: false
    },
    {
      id: 10,
      question: "La marketplace",
      reponse: "La marketplace de A à Z",
      ouvert: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.ouvert = !faq.ouvert
      } else {
        faq.ouvert = false;
      }
      
      return faq;
    }))
  }
  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
        ))}
      </div>
    </div>
  );
}

export default App;
