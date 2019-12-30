const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'stephan@avvent.io',
    cc: ['armin@avvent.io'],
    from: 'test@example.com',
    subject: 'Test: send from node',
    text: 'asdasd',
    html: 'asdasd',
  };
  sgMail.send(msg);

  console.log('sent')
};