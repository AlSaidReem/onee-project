import {React,useState, useEffect} from 'react'
import '../styles/contractHome.css';



function ContractHome() {

const [Contact_1, setContactOne] = useState('');
const [Contact_2, setContactTwo] = useState('');
const [Contact_3 , setContactThree] = useState('');

  
const handleButtonClick = (contactName) => {
    // Handle button click and set the corresponding state
    switch (contactName) {
      case 'Contact_1':
        setContactOne('value for contactOne');
        break;
      case 'Contact_2':
        setContactTwo('value for contactTwo');
        break;
      case 'Contact_3':
        setContactThree('value for contactThree');
        break;
      default:
        break;
    }
  
    // Save the button name in sessionStorage
    sessionStorage.setItem('selectedContact', contactName);
  };
  


  return (
    <>
   
    <div className='contractHome'>
        <div className='flexes'>
            <div className='leftFlex'>
            <div className="cards">

                <article className="plan [ card ]" style={{backgroundColor:"#00a8e8"}}>
                    <div className="inner" style={{backgroundColor:"#e9ecef"}}>
            
                        <span className="pricing" style={{backgroundColor:"#00a8e8"}}>
                            <span>
                                $150 <small>/ m</small>
                            </span>
                        </span>
                        <h2 className="title">Professional</h2>
                        <p className="info">This plan is for those who have a team already and running a large business.</p>
                        <ul className="features">
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span><strong>20</strong> team members</span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>Plan <strong>team meetings</strong></span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>File sharing</span>
                            </li>
                        </ul>
                        <button className="button"style={{backgroundColor:"#00a8e8"}} 
                         onClick={() => handleButtonClick('Contact_1')}>
                        <a href='/contractstest'>  Choose plan</a>
                        </button>
                      </div>
                   </article>
                </div>
            </div>



            <div className='middleFlex'>
            <div className="cards">

                <article className="plan [ card ]"  style={{backgroundColor:"red"}}>
                    <div className="inner" style={{backgroundColor:"#e9ecef"}} >
                
                        <span className="pricing" style={{backgroundColor:"red"}}>
                            <span>
                                $75<small>/ m</small>
                            </span>
                        </span>
                        <h2 className="title">Professional</h2>
                        <p className="info">This plan is for those who have a team already and running a large business.</p>
                        <ul className="features">
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span><strong>20</strong> team members</span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>Plan <strong>team meetings</strong></span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>File sharing</span>
                            </li>
                        </ul>
                        <button className="button" style={{backgroundColor:"red"}} 
                         onClick={() => handleButtonClick('Contact_2')}>
                        <a href='/contractstest'>  Choose plan</a>
                        </button>
                    </div>
                </article>
                        </div>
            </div>





            <div className='rightFlex'>
            <div className="cards">
            

            <article className="plan [ card ]" style={{backgroundColor:"#80ed99"}}>
                    <div className="inner" style={{backgroundColor:"#e9ecef"}}>
            
                        <span className="pricing" style={{backgroundColor:"#80ed99"}}>
                            <span>
                                $150 <small>/ m</small>
                            </span>
                        </span>
                        <h2 className="title">Professional</h2>
                        <p className="info">This plan is for those who have a team already and running a large business.</p>
                        <ul className="features">
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span><strong>20</strong> team members</span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>Plan <strong>team meetings</strong></span>
                            </li>
                            <li>
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                                    </svg>
                                </span>
                                <span>File sharing</span>
                            </li>
                        </ul>
                       <button className="button" style={{backgroundColor:"#80ed99"}} 
                       onClick={() => handleButtonClick('Contact_3')}>
                       <a href='/contractstest'>  Choose plan</a>
                        </button>
                    </div>
                </article>
                        </div>
            </div>
        </div>

    </div>

    </>
  )
}

export default ContractHome