import React from 'react';

function CharacterStatus({ status }) {
  return (
    <div className="character-status">
      <h2>Character Status</h2>
      <p>Health: {status.health}</p>
      <h3>Inventory</h3>
      <ul>
        {status.inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Skills</h3>
      <ul>
        {status.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterStatus;
