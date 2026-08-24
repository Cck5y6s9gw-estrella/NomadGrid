import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, type, message } = await req.json();

    if (!message || !type) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Roavio <feedback@roavio.es>",
      to: "alvamarblan@gmail.com",
      replyTo: email || undefined,
      subject: `[Roavio] ${type}${name ? ` de ${name}` : ""}`,
      html: `
        <p><strong>Tipo:</strong> ${type}</p>
        <p><strong>Nombre:</strong> ${name || "No indicado"}</p>
        <p><strong>Email:</strong> ${email || "No indicado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    );
  }
}
