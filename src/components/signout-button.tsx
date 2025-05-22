// src/components/signout-button.tsx
"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { ExitIcon } from "@radix-ui/react-icons"

export default function SignOutButton() {
  return (
    <Button onClick={() => signOut()} variant="outline">
      <ExitIcon className="mr-2" /> Cerrar sesión
    </Button>
  )
}
