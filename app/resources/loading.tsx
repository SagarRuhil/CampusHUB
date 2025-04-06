import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-10 w-10 animate-spin text-blue-400" />
        <p className="text-sm text-zinc-400">Loading resources...</p>
      </div>
    </div>
  )
}

