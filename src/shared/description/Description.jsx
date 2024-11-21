function Description({ className, children }) {
  return (
    <p className={`text-default text-body leading-[20.8px] ${className}`}>
      {children}
    </p>
  );
}

export default Description;
