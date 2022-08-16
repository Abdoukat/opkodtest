import React from 'react'

function FAQ({faq, index, toggleFAQ}) {
  return (
    <div className={"faq " + (faq.ouvert ? 'ouvert' : '')} key={index} 
    onClick={() => toggleFAQ(index)}>
        <div className='faq-question'>
            {faq.id + " " +faq.question}
        </div>
        <hr/>
        <div className='faq-reponse'>
            {faq.reponse}
            <hr/>
        </div>
    </div>
  )
}

export default FAQ