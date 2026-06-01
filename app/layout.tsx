import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Doctor Appointment Prep Assistant',
  description: 'Prepare better for doctor appointments. Organize symptoms, questions, and medical history into a structured format.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="107b62b9-3e75-43fa-a140-f19255ccc704"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
