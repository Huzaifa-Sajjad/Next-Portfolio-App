import Link from "next/link";

export default () => {
  return (
    <div className="header">
      <div className="container">
        <div className="menu">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/hire">
            <a>Hire</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .header {
          width: 100%;
          background: white;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
        .menu {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
};
