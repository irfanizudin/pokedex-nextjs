const Tag = ({ children, className }) => {
  return (
    <button
      className={`${className} capitalize cursor-default rounded-full py-[6px] px-[10px] text-xs font-md text-white mb-2`}
    >
      {children}
    </button>
  );
};

export default Tag;
