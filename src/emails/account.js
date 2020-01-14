const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'drprincerajput@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Have a good life!`
    })

}



const sendEmailOnCancellation = (email, name) => {
    sgMail.send({
        to: email,
        from: 'drprincerajput@gmail.com',
        subject: 'Sorry to disappoint you!',
        text: `${name}, Tell us where we can improve. Have a good life!`
    })

}

module.exports = {
    sendEmail,sendEmailOnCancellation
}