import React, { Component } from 'react'

export default class MessageContent extends Component {
    render() {
        const { messageContent } = this.props
        return (
            <div className="col-lg-12" style={{ textAlign: 'center', marginBottom: '50px' }}>
                <div className="row" style={{ width: '100vw', marginLeft: 'calc(-1 * ((100vw - 100%) / 2))' }}>
                    <div className="col-lg-4" style={{ verticalAlign: 'center' }}>
                        <div className="feature-img">
                            <img src={messageContent.imagePath} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {messageContent.messageText}
                        <span className="message-content-title">{messageContent.title}</span>
                    </div>
                </div>



            </div>
        )
    }
}
