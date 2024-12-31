import { GalleryVerticalEnd } from "lucide-react"
import logo from '@/assets/placeholder.svg'

import { LoginForm } from "@/components/login-form"
import { ModeToggle } from "@/components/mode-toggle";

export default function LoginPage() {
  return (
    (<div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-between">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div
              className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
          <div className="max-md:flex max-md:absolute max-md:right-4 max-md:self-end">
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={logo}
          alt="Image"
          className="absolute inset-0 m-auto object-cover" />
      </div>
    </div>)
  );
}
