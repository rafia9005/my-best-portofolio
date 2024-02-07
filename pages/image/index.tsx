import { useState } from 'react';

const ImageGrid = () => {
  const [cards, setCards] = useState<number[][]>([]);
  const [rows, setRows] = useState<number>(3);
  const [columns, setColumns] = useState<number>(5);
  const [imageSrc, setImageSrc] = useState<string>('splits.jpg');

  const handleSplitImage = () => {
    const newCards: number[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: number[] = [];
      for (let j = 0; j < columns; j++) {
        row.push(j + i * columns);
      }
      newCards.push(row);
    }

    setCards(newCards);
  };

  const handleCardClick = (row: number, col: number) => {
    const updatedCards = cards.map((r) => r.filter((c) => c !== col));
    setCards(updatedCards);
  };

  return (
    <div>
      <label htmlFor="inputX">Columns (X):</label>
      <input
        type="number"
        id="inputX"
        min="1"
        value={columns}
        onChange={(e) => setColumns(parseInt(e.target.value))}
      />

      <label htmlFor="inputY">Rows (Y):</label>
      <input
        type="number"
        id="inputY"
        min="1"
        value={rows}
        onChange={(e) => setRows(parseInt(e.target.value))}
      />

      <button onClick={handleSplitImage}>Split Image</button>
      
      {cards.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((col) => (
            <div
              key={col}
              style={{
                width: `${100 / columns}%`,
                height: `${100 / rows}vh`,
                background: `url(${imageSrc})`,
                backgroundSize: `${columns * 100}% ${rows * 100}vh`,
                backgroundPosition: `${-(col % columns) * 100}% ${-Math.floor(col / columns) * 100}vh`,
                cursor: 'pointer',
              }}
              onClick={() => handleCardClick(rowIndex, col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
