export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Fluxudy</h1>
      <p className="text-lg max-w-xl mx-auto mb-8">
        Transforme seu estudo em fluxo: ciclos inteligentes, Pomodoro integrado, Flashcards com revisão espaçada e Salas de Estudo no Discord.
      </p>
      <div className="space-x-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">Comece Grátis</button>
        <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition">Plano VIP R$9,90/mês</button>
      </div>
    </main>
  )
}
