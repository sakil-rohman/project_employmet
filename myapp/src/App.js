import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider from your context file
import MyApp from './routes/myapp_routes';
import CMSApp from './routes/cms_routes';
import AuthContext from './context/AuthContext'; // Import AuthContext from your context file

function App() {
  return (
    <Router>
      <AuthProvider>
        {/* Render MyApp and CMSApp based on authentication status */}
        <RenderApp />
      </AuthProvider>
    </Router>
  );
}

function RenderApp() {
  // Here you can use useContext to access AuthContext
  // Ensure AuthContext is properly set up to provide 'user' information
  // If it's not properly set up, you might encounter the 'user' being undefined
  // Check the context implementation in AuthContext.js
  const { user } = useContext(AuthContext);

  // Based on the user's authentication status, render MyApp or CMSApp
  return user ? <CMSApp /> : <MyApp />;
}

export default App;
