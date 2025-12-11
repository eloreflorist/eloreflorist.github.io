// app/location/page.tsx
const Location = () => {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-primary text-center mb-4">Our Location</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Visit Us</h2>
                
                <div className="bg-secondary p-8 rounded-lg mb-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                      <p className="text-primary">
                        123 Business Street<br />
                        Suite 100<br />
                        City, State 12345<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Contact Information</h3>
                      <p className="text-primary">
                        <strong>Phone:</strong> (123) 456-7890<br />
                        <strong>Email:</strong> info@business.com<br />
                        <strong>Fax:</strong> (123) 456-7891
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Business Hours</h3>
                      <ul className="text-primary space-y-1">
                        <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
                        <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
                        <li><strong>Sunday:</strong> Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-accent p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-primary mb-4">Parking & Accessibility</h3>
                  <ul className="text-primary space-y-2">
                    <li>✓ Free parking available in front of building</li>
                    <li>✓ Wheelchair accessible entrance and facilities</li>
                    <li>✓ Electric vehicle charging stations</li>
                    <li>✓ Bike racks available</li>
                    <li>✓ Public transportation nearby</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Map & Directions</h2>
                
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <p className="text-primary">Interactive Map Placeholder</p>
                    <p className="text-primary text-sm mt-2">
                      (In a real implementation, embed Google Maps here)
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-bold text-primary mb-4">Directions</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary">From Downtown:</h4>
                      <p className="text-primary">Take Main Street north for 2 miles, turn left on Business Avenue.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">From Highway:</h4>
                      <p className="text-primary">Exit at Business District, follow signs for 0.5 miles.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Public Transport:</h4>
                      <p className="text-primary">Bus lines 101, 205, and 307 stop within walking distance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-primary text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Schedule a Visit</h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Want to see our facility or meet with our team? Schedule an appointment in advance.
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Location;