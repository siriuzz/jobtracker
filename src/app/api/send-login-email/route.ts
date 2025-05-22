import { Resend } from "resend"
import { LoginEmail } from "@/components/emails/login-email"
import { render } from "@react-email/render"

const resend = new Resend(process.env.AUTH_RESEND_KEY)

export const runtime = "nodejs"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, url, firstName } = body

    const html = render(
      <LoginEmail email={email} url={url} firstName={firstName} />
    )

    const { data, error } = await resend.emails.send({
      from: "JobTracker <login@yourdomain.com>",
      to: [email],
      subject: "Tu enlace para iniciar sesión",
      html,
    })

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 })
    }

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 })
  }
}
