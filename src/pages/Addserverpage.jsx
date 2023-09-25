import React from 'react'
import '../css/Addserver.css';

const Addserverpage = () => {
  return (
    <div>
        <div className="login-container1">
              <div className="login-box1">
                <h2 className="login-title1">SERVER ADDING PAGE</h2>
                 <form className="login-form1">
                        <div className="row">
                        <div id='loga' className="col-md-6">
                        <input id='pad-gap' type="text" placeholder="Name" />
                        <input id='pad-gap' type="text" placeholder="Host" />
                        <input id='pad-gap' type="number" placeholder="port" />
                        <input id='pad-gap' type="text" placeholder="Username" />
                        <input id='pad-gap' type="password" placeholder="Password" />
                       
                        </div>
                        <div id='loga' className="col-md-6">
                        <input id='pad-gap' type="number" placeholder="Cpu limit" />
                        <input id='pad-gap' type="number" placeholder="Ram limit" />
                        <textarea id="pad-gap" placeholder='Description' className='textarea' name="w3review" rows="8" cols="26"></textarea>
                        </div>
                        </div>

                  <button type="submit" className="login-button">
                    Add server
                  </button>
                </form>
              </div>
            </div>  
    </div>
  )
}

export default Addserverpage