const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taeism@gmail.com',
        subject: 'Thanks for registering!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taeism@gmail.com',
        subject: `Goodbye ${name}`,
        text: `${name} registered at ${email} has been deleted`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}