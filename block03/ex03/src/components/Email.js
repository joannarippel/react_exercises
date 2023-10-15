
import React from 'react';

function Email({ formState, setFormState }) {
    return (
      <fieldset>
        <legend>Email</legend>
        <input
          name="email" //  dear George I could have also write input type email to check if an email is valid, no ? 
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
        />
      </fieldset>
    );
  }
  

export default Email;
