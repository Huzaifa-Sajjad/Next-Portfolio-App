export default () => {
  return (
    <div className="footer">
      <span>&copy; {new Date().getFullYear()} Huziafa Sajjad</span>
      <style jsx>{`
        .footer {
          width: 100%;
          padding: 1.2em;
          text-align: center;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};
