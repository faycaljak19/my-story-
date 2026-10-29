import './globals.css'

export const metadata = {
  title: 'Freelance Client Management System',
  description: 'The ultimate Notion template to manage your freelance business.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', backgroundColor: '#f3f4f6', color: '#111827' }}>
        
        <nav style={{ padding: '20px', borderBottom: '1px solid #e5e7eb', backgroundColor: 'white', display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Productivity Store</h1>
        </nav>
        
        <main style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
          {children}
        </main>

      </body>
    </html>
  )
  }
