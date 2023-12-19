// Provider.tsx
'use client';
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  return (
      <SessionProvider>
        <RecoilRoot>
           {children}
        </RecoilRoot>
      </SessionProvider>
  )
}

export default Provider