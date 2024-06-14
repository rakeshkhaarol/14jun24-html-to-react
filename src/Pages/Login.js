import React from 'react'

function Login() {

	//hooks area


	//function definetion area
	let hendalSubmit=()=>{
		window.location.href='/dashboard'
	}
  return (
   <>
   <div id="loading-overlay"></div>
    <div id="loading">
      <span>Loading...</span>
    </div>
 
    <section id="toolbar">
      <div className="container_12">
    
        <div className="left">
          <ul className="breadcrumb">
          
            <li><a href="#">Mango</a></li>
            <li><a href="#">Login</a></li>
            
          </ul>
        </div>

        <div className="right">
          <ul>
          
            <li><a href="dashboard.html"><span className="icon i14_bended-arrow-left"></span>Back to Dashboard</a></li>
            
            <li className="red"><a target="_blank" href="http://themeforest.net/item/mango-slick-responsive-admin-template/2728748?ref=Stammi">Purchase</a></li>
            
          </ul>
        </div>
        
        {/* <!-- Phone only items --> */}
        <div className="phone">
          
          {/* <!-- User Link --> */}
          <li><a href="#"><span className="icon icon-home"></span></a></li>
          {/* <!-- Navigation --> */}
          <li><a href="#"><span className="icon icon-heart"></span></a></li>
        
        </div>
        
      </div>
    </section>
    
    {/* <!-- The header containing the logo --> */}
    <header className="container_12">
      
      <div className="container">
      
        {/* <!-- Your logos --> */}
        <a href="https://envato.stammtec.de/tf-mango/"><img src="img/logo-light.png" alt="Mango" width="210" height="67"/></a>
        <a className="phone-title" href="login.html"><img src="img/logo-mobile.png" alt="Mango" height="22" width="70" /></a>
        
        {/* <!-- Right link --> */}
        <div className="right">
          <span>Got no account?</span>
          <a href="#">Register</a>
        </div>
        
      </div>
    
    </header>
    
    {/* <!-- The container of the sidebar and content box --> */}
    <section id="login" className="container_12 clearfix">
    
      <form action="https://envato.stammtec.de/themeforest/mango/dashboard.html" method="post" className="box validate">
      
        <div className="header">
          <h2><span className="icon icon-lock"></span>Login</h2>
        </div>
        
        <div className="content">
          
          {/* <!-- Login messages --> */}
          <div className="login-messages">
            <div className="message welcome">Welcome back!</div>
            <div className="message failure">Invalid credentials.</div>
          </div>
        
          {/* <!-- The form --> */}
          <div className="form-box">
          
            <div className="row">
              <label htmlFor="login_name">
                <strong>Username</strong>
                <small>Or email address</small>
              </label>
              <div>
                <input tabIndex='1' type="text" className="required noerror" name='login_name' id='login_name' />
              </div>
            </div>
            
            <div className="row">
              <label htmlFor="login_pw">
                <strong>Password</strong>
                <small><a href="#" id="">Forgot it?</a></small>
              </label>
              <div>
                <input tabIndex="2" type="password" className="required noerror" name="login_pw" id="login_pw" />
              </div>
            </div>
            
          </div>
          
        </div>
        
        <div className="actions">
          <div className="left">
            <div className="rememberme">
              <input tabIndex="4" type="checkbox" name="login_remember" id="login_remember" checked onChange={()=>{}}/><label htmlFor="login_remember">Remember me?</label>
            </div>
          </div>
          <div className="right">
            <input tabIndex="3" type="submit" value="Sign In" onClick={()=>{hendalSubmit()}} name="login_btn" />
          </div>
        </div>
        
      </form>
  
    </section>
   </>
  )
}

export default Login