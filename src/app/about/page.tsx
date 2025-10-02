<<<<<<< HEAD
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '40px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div>Home</div>
        <nav>
          <a href="#" style={{ marginRight: '15px' }}>Portfolio</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <h1>Transform Your Home with Stylish Interiors</h1>
      <p style={{ color: "#888" }}>
        Elevate everyday living with smart, modern interior design.<br />
        Discover innovative ways to create the home that reflects your lifestyle.
      </p>
      <Image
        src="/living-room.jpg" // Place an image named living-room.jpg in your /public folder
        alt="Stylish Living Room"
        width={600}
        height={320}
        style={{ margin: "25px 0", borderRadius: "12px" }}
      />
      <section>
        <p>
          The atmosphere in a dwelling is crucial: thoughtful layout, well-chosen color palettes,
          and functional arrangements transform rooms into welcoming spaces. Enhance every corner
          with contemporary ideas suited for both compact urban apartments and spacious family homes.
        </p>
        <p>
          Well-designed interiors provide comfort, boost productivity, and contribute to overall
          well-being. Choose quality furnishings, effective lighting, and decorative elements that
          harmonize beautifully. Personal touches make each interior unique and inviting.
        </p>
      </section>
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        <Image src="/samples1.jpg" alt="Sample 1" width={160} height={100} />
        <Image src="/samples2.jpg" alt="Sample 2" width={160} height={100} />
        <Image src="/samples3.jpg" alt="Sample 3" width={160} height={100} />
      </div>
      <section>
        <p>
          Whether planning a kitchen revamp, updating a hallway, or choosing a stylish study setup,
          inspiration abounds in these curated collections. Browse ideas to create interiors
          perfect for your lifestyle, needs, and preferences.
        </p>
      </section>
      <h2>Related snapshots</h2>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
        <Image src="/related1.jpg" alt="Related Interior 1" width={130} height={120} />
        <Image src="/related2.jpg" alt="Related Interior 2" width={130} height={120} />
        <Image src="/related3.jpg" alt="Related Interior 3" width={130} height={120} />
      </div>
      <footer style={{ color: "#bbb", fontSize: "14px", marginTop: '80px' }}>
        © 2025 Stylish Interiors
      </footer>
    </div>
  );
}
=======
import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '40px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div>Home</div>
        <nav>
          <a href="#" style={{ marginRight: '15px' }}>Portfolio</a>
          <a href="#">Login</a>
        </nav>
      </header>
      <h1>Transform Your Home with Stylish Interiors</h1>
      <p style={{ color: "#888" }}>
        Elevate everyday living with smart, modern interior design.<br />
        Discover innovative ways to create the home that reflects your lifestyle.
      </p>
      <Image
        src="/living-room.jpg" // Place an image named living-room.jpg in your /public folder
        alt="Stylish Living Room"
        width={600}
        height={320}
        style={{ margin: "25px 0", borderRadius: "12px" }}
      />
      <section>
        <p>
          The atmosphere in a dwelling is crucial: thoughtful layout, well-chosen color palettes,
          and functional arrangements transform rooms into welcoming spaces. Enhance every corner
          with contemporary ideas suited for both compact urban apartments and spacious family homes.
        </p>
        <p>
          Well-designed interiors provide comfort, boost productivity, and contribute to overall
          well-being. Choose quality furnishings, effective lighting, and decorative elements that
          harmonize beautifully. Personal touches make each interior unique and inviting.
        </p>
      </section>
      <div style={{ display: 'flex', gap: '20px', margin: '30px 0' }}>
        <Image src="/samples1.jpg" alt="Sample 1" width={160} height={100} />
        <Image src="/samples2.jpg" alt="Sample 2" width={160} height={100} />
        <Image src="/samples3.jpg" alt="Sample 3" width={160} height={100} />
      </div>
      <section>
        <p>
          Whether planning a kitchen revamp, updating a hallway, or choosing a stylish study setup,
          inspiration abounds in these curated collections. Browse ideas to create interiors
          perfect for your lifestyle, needs, and preferences.
        </p>
      </section>
      <h2>Related snapshots</h2>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
        <Image src="/related1.jpg" alt="Related Interior 1" width={130} height={120} />
        <Image src="/related2.jpg" alt="Related Interior 2" width={130} height={120} />
        <Image src="/related3.jpg" alt="Related Interior 3" width={130} height={120} />
      </div>
      <footer style={{ color: "#bbb", fontSize: "14px", marginTop: '80px' }}>
        © 2025 Stylish Interiors
      </footer>
    </div>
  );
}
>>>>>>> 9ac8b53 (Initial commit with simple Next.js app)
