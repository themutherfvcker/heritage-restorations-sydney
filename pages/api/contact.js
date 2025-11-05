export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, service, location, message } =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Name, email and message are required.",
      });
    }

    // TODO: plug this into your email or CRM provider.
    // For now we just log it so you can confirm it works.
    console.log("New contact enquiry:", {
      name,
      email,
      phone,
      service,
      location,
      message,
    });

    // You might later:
    // - Send an email via SendGrid / SES / Mailgun
    // - Write the enquiry to a database or CRM

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({
      message: "Something went wrong submitting the form.",
    });
  }
}
