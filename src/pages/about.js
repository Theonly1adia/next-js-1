export default function About() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>This is all about me!</h1>
        <p>I am learning Next.js, and this is my first custom page.</p>
        <br></br>
        
        <img 
          src="/images/adia.jpg" 
          alt="A picture of Adia" 
          style={{ width: '200px', 
            borderRadius: '55%',
            marginTop: '20px' }} 
        />
      </div>
    );
  }
  