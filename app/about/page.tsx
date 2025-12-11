// app/about/page.tsx
const About = () => {
    const teamMembers = [
      { name: 'John Doe', role: 'Founder & CEO', bio: '20+ years in business consulting' },
      { name: 'Jane Smith', role: 'CTO', bio: 'Technology expert with 15 years experience' },
      { name: 'Mike Johnson', role: 'Marketing Director', bio: 'Digital marketing specialist' },
      { name: 'Sarah Williams', role: 'Operations Manager', bio: 'Efficiency and process optimization' },
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary text-center mb-4">About Us</h1>
          
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="bg-secondary p-8 rounded-lg">
                <p className="text-primary text-lg mb-4">
                  Founded in 2020, we started with a simple mission: to provide accessible, high-quality business solutions for companies of all sizes. What began as a small team of passionate professionals has grown into a trusted partner for businesses worldwide.
                </p>
                <p className="text-primary text-lg">
                  Today, we&apos;re proud to serve hundreds of clients across various industries, helping them navigate the challenges of the digital age and achieve sustainable growth.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
              <div className="bg-accent p-8 rounded-lg">
                <p className="text-primary text-lg">
                  To empower businesses with innovative solutions that drive growth, enhance efficiency, and create lasting value for our clients and their customers.
                </p>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-bold text-primary mb-2">Integrity</h3>
                  <p className="text-primary">We believe in transparency and honesty in all our dealings.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
                  <p className="text-primary">Constantly seeking new and better ways to serve our clients.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
                  <p className="text-primary">Committed to delivering the highest quality in everything we do.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-bold text-primary mb-2">Collaboration</h3>
                  <p className="text-primary">Working together with clients to achieve shared success.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-24 h-24 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-primary text-xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-accent mb-2">{member.role}</p>
                    <p className="text-primary text-sm">{member.bio}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;