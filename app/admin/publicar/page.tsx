import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../../../components/Navbar";
import PublishForm from "../../../components/PublishForm";

export default async function PublicarPage() {
  const user = await currentUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;

  if (!user || email !== process.env.ADMIN_EMAIL) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground px-6 pt-28 pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2">Publicar artículo</h1>
          <p className="text-sm text-muted mb-10">
            Se sube directamente a tu repositorio y aparece en /articulos en 1-2 minutos.
          </p>
          <PublishForm />
        </div>
      </main>
    </>
  );
}