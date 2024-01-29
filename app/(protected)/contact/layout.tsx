import Navbar from "@/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full">
        <Navbar />
      </div>

      {children}
    </div>
  );
};

export default Layout;
