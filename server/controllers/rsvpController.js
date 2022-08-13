const RSVP = require("../models/Rsvp");
const nodemailer = require("nodemailer");

const getRSVP = async (req, res) => {
  const guestName = req.params.name;
  const rsvp = await RSVP.find({ name: new RegExp(guestName, "i") });
  console.log(`GET rsvp returned: ${rsvp}`);
  res.status(200).json(rsvp);
};

const getOneRSVP = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const rsvp = await RSVP.findById(id);
  console.log(`GET rsvp returned: ${rsvp}`);
  res.status(200).json(rsvp);
};

const updateRSVP = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  let rsvp = await RSVP.findById(id);
  const { email, attending, song, comments } = req.body;
  await rsvp.updateOne({ attending, song, comments, email });
  rsvp = await RSVP.findById(id);
  res.status(200).json(rsvp);
  if (email) {
    emailConfirmation(rsvp);
    emailNotification(rsvp);
  }
};

const postRSVP = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  const { name, email, attending, guests, song, comments } = req.body;
  const rsvp = await RSVP.create({
    name,
    email,
    attending,
    guests,
    song,
    comments,
  });
  res.status(200).json(rsvp);
};

const deleteRSVP = async (req, res) => {
  const { id } = req.params;
  const rsvp = await RSVP.destroy({ where: { id } });
  res.status(200).json(rsvp);
};

//Email
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const emailConfirmation = (rsvp) => {
  const mailOptions = {
    from: `Kasey & Barry <${process.env.EMAIL}>`,
    to: rsvp.email,
    subject: "RSVP Confirmation",
    text: `Thank you for RSVPing ${rsvp.name}! We look forward to seeing you at the party! Your RSVP details: ${rsvp.attending ? `You are attending with a party of ${rsvp.guest}` : "They are not attending"}. ${rsvp.song ? `They are want to hear ${rsvp.song}` : "whatever is playing"} ${rsvp.comments ? `They have left the following comments: ${rsvp.comments}` : "nothing"}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

const emailNotification = (rsvp) => {
  const mailOptions = {
    from: `${rsvp.name} has RSVPed <${rsvp.email}>`,
    to: process.env.EMAIL,
    subject: `${rsvp.name} has RSVPed!`,
    text: `${rsvp.name} has RSVPed! ${rsvp.attending ? `${rsvp.name} is attending with a party of ${rsvp.guest}`  : "They are not attending"}. ${rsvp.song ? `They are want to hear ${rsvp.song}` : "nothing"} ${rsvp.comments ? `They have left the following comments: ${rsvp.comments}` : "nothing"}`,
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};


module.exports = { getRSVP, getOneRSVP, updateRSVP, postRSVP, deleteRSVP };