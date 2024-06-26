const client = require('twilio')(process.env.Account_SID, process.env.AuthToken);

exports.getCode = async (req, res) => {
    await client.verify.v2.services('VAd9f009e4912b7a4cbd29257ad1a3f40e')
        .verifications.create({
            channel: "sms",
            to: "+918448137331",
        }).then(data => {
            res.status(200).send(data.sid);
        })

}
exports.verifyCode = async (req, res) => {
    client.verify.v2.services(process.env.Service)
        .verificationChecks
        .create({
            to: "+918448137331",
            code: req.query.code
        })
        .then(data => {
            res.status(200).send(data);
        })
}