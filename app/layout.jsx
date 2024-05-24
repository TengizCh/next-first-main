import "../styles/styles.css";

export const metadata = {
  title: "next first application",
  description: "explore new features of react full stack framework",
};

const RootLayout = () => {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
