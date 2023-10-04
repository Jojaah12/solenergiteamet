import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
type Data = {
  message: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      zipcode,
      city,
      message,
    }: {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      address: string;
      zipcode: string;
      city: string;
      message: string;
    } = req.body;

    const recipients: string[] = [
      "fredrik.marthinsens@gmail.com",
      "david.aljojah@gmail.com",
    ];

    const msg = `
      Förnamn: ${firstName}
      Efternamn: ${lastName}
      E-post: ${email}
      Telefonnummer: ${phoneNumber}
      Adress: ${address}
      Postnummer: ${zipcode}
      Ort: ${city}
      Meddelande: ${message}
    `;

    const data = {
      to: recipients,
      from: "samirdanun@hotmail.com",
      subject: `${firstName.toUpperCase()} har skickat meddelande från solenergiteamet.se`,
      text: `Email => ${email}`,
      html: msg.replace(/\n/g, "<br>"),
    };
    try {
      await sgMail.send(data);
      res.status(200).json({ message: "Your message was sent successfully." });
    } catch (err) {
      res.status(500).json({
        message: `There was an error sending your message. ${err}`,
      });
    }
  }
}
