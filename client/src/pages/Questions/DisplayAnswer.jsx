import React from 'react'
// import QuestionsDetails from './QuestionsDetails'
import {Link} from "react-router-dom"
import Avatar from '../../components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {
  return (
    <div>
        {
          question.answer.map((ans) => (
            <div className="display-ans" key={ans._id}>
             <div  className="question-actions-user">
              <p style={{display:"block"}}>{ans.answerBody}</p>
              <div>
                <button type="button" >Share</button>
                <button type="button">Delete</button>
              </div>
              <div>
                 <p>answered {ans.answeredOn}</p>
              <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8', textDecoration:"none"}}>
                  <Avatar backgroundColor="green" px="8px" py="5px" textDecoration="none">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                  <div>
                      {ans.userAnswered}
                  </div>
              </Link>
              </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default DisplayAnswer