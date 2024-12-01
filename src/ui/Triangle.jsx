function Triangle({ className = "" }) {
  return (
    <div
      className={`w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-r-[50px] border-r-transparent ${className}`}
    ></div>
  );
}

export default Triangle;
