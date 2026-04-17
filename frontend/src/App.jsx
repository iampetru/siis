import { useState } from 'react'

export default function App() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)

  const upload = async () => {
    if (!file) return

    const form = new FormData()
    form.append("file", file)

    const res = await fetch("http://127.0.0.1:8000/upload", {
      method: "POST",
      body: form
    })

    const data = await res.json()
    setResult(data)
  }

  return (
    <div className="min-h-screen text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center px-8 py-5 border-b border-white/10 backdrop-blur">
        <h1 className="text-xl font-bold tracking-wide">
          🧾 SIIS Pro
        </h1>

        <div className="text-sm text-white/60">
          Smart Invoice Intelligence System
        </div>
      </div>

      <div className="flex">

        {/* SIDEBAR */}
        <div className="w-64 min-h-screen border-r border-white/10 p-5 space-y-4">
          <div className="text-white/70 text-sm">MENU</div>
          <div className="p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">Dashboard</div>
          <div className="p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">Upload</div>
          <div className="p-2 rounded bg-white/5 hover:bg-white/10 cursor-pointer">History</div>
        </div>

        {/* MAIN */}
        <div className="flex-1 p-10 space-y-6">

          {/* UPLOAD CARD */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Upload Invoice</h2>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="block mb-4"
            />

            <button
              onClick={upload}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition"
            >
              Process Invoice
            </button>
          </div>

          {/* RESULTS */}
          {result && (
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h3 className="font-semibold mb-2">Structured Data</h3>
                <pre className="text-sm text-green-300">
                  {JSON.stringify(result.structured, null, 2)}
                </pre>
              </div>

              <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
                <h3 className="font-semibold mb-2">Raw OCR</h3>
                <pre className="text-sm text-gray-300 overflow-auto">
                  {result.raw_text}
                </pre>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}
