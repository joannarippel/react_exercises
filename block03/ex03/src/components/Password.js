import React from 'react';

function Password({ formState, setFormState }) {
    return (
      <fieldset>
        <legend>Password</legend>
        <input
          name="password"
          value={formState.password}
          onChange={(e) => setFormState({ ...formState, password: e.target.value })}
        />
      </fieldset>
    );
  }

export default Password;