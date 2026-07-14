import Header from './Header';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Header />
      <main>{children}</main>
      
    </div>
  );
};

export default Layout;
