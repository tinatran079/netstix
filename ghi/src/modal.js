import React, { useState } from 'react';

function ExampleModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div>
          <div>
            <p>This is the modal content.</p>
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExampleModal;