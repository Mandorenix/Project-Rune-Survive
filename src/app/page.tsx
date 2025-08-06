export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <img
          src="/logo.svg"
          alt="Z.ai Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold text-center">Välkommen till mitt projekt!</h1>
      <p className="text-lg text-center text-muted-foreground max-w-2xl">
        Detta är mitt Next.js-projekt med TypeScript och shadcn/ui. 
        Jag har precis lärt mig hur man använder GitHub och pushat mitt projekt!
      </p>
      <div className="flex gap-4">
        <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
          🚀 Projekt uppladdat till GitHub
        </div>
        <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg">
          📚 Lär mig GitHub
        </div>
      </div>
    </div>
  )
}