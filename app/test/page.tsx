// app/test/page.tsx - Create this file to test
export default function TestPage() {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-primary mb-4">CSS Test Page</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-primary text-white rounded">
            Primary Background (#59544A)
          </div>
          
          <div className="p-4 bg-secondary text-primary rounded">
            Secondary Background (#C8CBCA)
          </div>
          
          <div className="p-4 bg-accent text-primary rounded">
            Accent Background (#C0BBAE)
          </div>
          
          <div className="p-4 bg-white text-primary border border-primary rounded">
            White Background with Primary Border
          </div>
          
          <button className="btn-primary mr-2">
            Primary Button
          </button>
          
          <button className="btn-secondary mr-2">
            Secondary Button
          </button>
          
          <button className="btn-accent">
            Accent Button
          </button>
          
          <div className="mt-8 p-4 shadow-custom rounded">
            Custom Shadow Test
          </div>
        </div>
      </div>
    );
  }