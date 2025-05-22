// src/app/dashboard/page.tsx

import getServerSession from "next-auth"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExitIcon } from "@radix-ui/react-icons"
import { signOut } from "next-auth/react"
import SignOutButton from "@/components/signout-button"

export default async function DashboardPage() {
   const session = await auth()

  // Redirigir si no hay sesión
  if (!session) redirect("/login")

  return (
    <main className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">Bienvenido, {session.user?.name || "usuario"} 👋</h1>
        <div className="flex justify-between w-max">
          <Button variant="default" className="mt-4 sm:mt-0">
            Nueva Postulación
          </Button>
          <SignOutButton/>
        </div>
      </div>

      {/* Tabs por estado */}
      <Tabs defaultValue="todas" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="todas">Todas</TabsTrigger>
          <TabsTrigger value="applied">Aplicadas</TabsTrigger>
          <TabsTrigger value="interview">Entrevistas</TabsTrigger>
          <TabsTrigger value="offer">Ofertas</TabsTrigger>
          <TabsTrigger value="rejected">Rechazadas</TabsTrigger>
        </TabsList>

        {/* Estas tabs se pueden poblar con datos reales más adelante */}
        <TabsContent value="todas">
          <Card>
            <CardHeader>
              <CardTitle>Todas tus postulaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí irán tus postulaciones una vez las crees.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="applied">
          <Card>
            <CardHeader>
              <CardTitle>Postulaciones enviadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí se mostrarán las que marcaste como "applied".</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interview">
          <Card>
            <CardHeader>
              <CardTitle>Entrevistas programadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí aparecerán tus entrevistas.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="offer">
          <Card>
            <CardHeader>
              <CardTitle>Ofertas recibidas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí aparecerán tus ofertas de trabajo.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle>Postulaciones rechazadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Aquí verás tus rechazos (si los marcas así).</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}
