import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id='message-me'>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='chat-blurb'>
                <div className='title'><h2>Would you like to chat?</h2></div>

                <p>Send me an email and we can talk.</p>

                <p className='btn-hldr'>
                  <a href='mailto:emilycoco@me.com' className='main-btn email-lnk'>
                    <img className='email-img' src='/icons/email-icon.png' height='20px' />
                    {' '} {' '} message me
                    </a>
                </p>

              </div>
            </div>
          </div>
        </div>

      </section>
    )
  }
}
export default Contact