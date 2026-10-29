export default function Home() {
  const stripePaymentLink = "#"; 

  return (
    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
      
      <div style={{ flex: '1 1 400px' }}>
        <img 
          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop" 
          alt="Freelance Template" 
          style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }} 
        />
      </div>
      
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '38px', margin: '0 0 16px 0', color: '#111827' }}>
          Freelance Client Management System
        </h1>
        
        <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: '1.6', marginBottom: '24px' }}>
          The ultimate Notion template to manage your clients, projects, and invoices in one place. Stop losing track of who owes you money and deliver projects on time.
        </p>
        
        <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '24px' }}>
          $29.00
        </div>

        <a 
          href={stripePaymentLink}
          style={{ 
            display: 'block',
            textAlign: 'center',
            backgroundColor: '#4f46e5', 
            color: 'white', 
            padding: '18px 32px', 
            fontSize: '18px', 
            fontWeight: 'bold', 
            textDecoration: 'none',
            borderRadius: '8px',
          }}
        >
          Buy Now
        </a>
        
        <ul style={{ marginTop: '30px', color: '#6b7280', paddingLeft: '20px', fontSize: '16px', lineHeight: '1.8' }}>
          <li>⚡ Instant access after purchase</li>
          <li>🔄 Lifetime updates</li>
          <li>✅ Works with Notion Free & Paid plans</li>
        </ul>
      </div>
    </div>
  );
}
