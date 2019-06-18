import React from 'react';
import './sign-up.css'

class SignUp extends React.Component {
    render() {
        return (
          <>
          <header></header>
          <section>
             <div class="form-style-5">
               <form>
                 <fieldset>
                  <legend>Sign up</legend>
                     <input type="text" name="field1" placeholder="Your Name *"/>
                     <input type="email" name="field2" placeholder="Your Email *"/>
                     <input type="text" name="field3" placeholder="Password *"/>
                  </fieldset>
                <input type="submit" value="Submit" />
                </form>
              </div>
            </section>
            </>
        )
    }
}

export default SignUp;