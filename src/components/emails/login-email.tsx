// src/emails/LoginEmail.tsx
import * as React from "react"

interface LoginEmailProps {
  firstName?: string
  email: string
  url: string
}

export const LoginEmail: React.FC<Readonly<LoginEmailProps>> = ({
  firstName,
  email,
  url,
}) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h2>Hola{firstName ? `, ${firstName}` : ""} 👋</h2>
    <p>Has solicitado iniciar sesión en tu cuenta con el correo:</p>
    <p><strong>{email}</strong></p>
    <p>Haz clic en el siguiente botón para continuar:</p>

    <a
      href={url}
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#6366F1",
        color: "#fff",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold",
        marginTop: "10px"
      }}
    >
      Iniciar sesión
    </a>

    <p style={{ marginTop: "30px", fontSize: "12px", color: "#555" }}>
      Si no solicitaste este acceso, puedes ignorar este correo. El enlace expirará automáticamente en unos minutos.
    </p>
  </div>
)
