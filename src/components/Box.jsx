import './Box.css';

function Box({ id, selected, setSelected }) {
  const isSelected = selected === id;

  const handleClick = () => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div
      className={`box ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      BOX {id}
    </div>
  );
}

export default Box;