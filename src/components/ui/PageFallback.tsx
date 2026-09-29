export function PageFallback() {
  return (
    <div
      className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      aria-hidden="true"
    >
      <div className="h-8 w-48 animate-pulse rounded bg-neutral-200" />
      <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded bg-neutral-200" />
      <div className="mt-2 h-4 w-2/3 max-w-md animate-pulse rounded bg-neutral-200" />
    </div>
  )
}
