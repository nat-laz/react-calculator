const Display = ({ text }) => {
  return (
    <input value={text} placeholder={0} className="screen-container" readOnly />
  );
};

export default Display;
