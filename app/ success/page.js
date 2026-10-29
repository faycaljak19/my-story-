import Link from 'next/link';

export default function Success() {
  const notionLink = "https://leather-cough-cb9.notion.site/Freelance-client-management-system-40899a107a5280f08028ca1fb9a4b53f?source=copy_link";

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '60px 40px', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
      <h1 style={{ color: '#10b981', fontSize: '40px', marginBottom: '16px' }}>Payment Successful! 🎉</h1>
      
      <p style={{ fontSize: '20px', color: '#4b5563', marginBottom: '40px' }}>
        Thank you for your purchase. Click the button below to access your template.
      </p>
      
      <a 
        href={notionLink} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ 
          display: 'inline-block',
          backgroundColor: '#10b981', 
          color: 'white', 
          padding: '18px 40px', 
          fontSize: '20px', 
          fontWeight: 'bold', 
          textDecoration: 'none',
          borderRadius: '8px',
        }}
      >
        Access Your Notion Template
      </a>

      <p style={{ marginTop: '50px', color: '#9ca3af' }}>
        <Link href="/" style={{ color: '#4f46e5', textDecoration: 'none' }}>Return to store</Link>
      </p>
    </div>
  );
          }
