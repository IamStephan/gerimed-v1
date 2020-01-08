const sgMail = require('@sendgrid/mail')

function ID () {
    return Math.random().toString(36).substr(2, 9);
}

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { customData } = payload

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: ['info@gerimed.co.za', 'stephan@avvent.io'],
        from: 'contact_form@gerimed.co.za',
        subject: 'Contact Form Submission',
        html: `
            <h1> ${customData.name} : ${ID()} </h1>
            <h2> ${customData.email} </h2>
            <hr />
            <p> ${customData.message} </p>
        `,
    };

    try{
        await sgMail.send(msg)

        console.log('Message sent!')

        return {
            statusCode: 200,
            body: 'Message sent'
        }
    } catch(e){
      console.log(e)
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};