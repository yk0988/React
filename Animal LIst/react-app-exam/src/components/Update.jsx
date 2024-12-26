import React from 'react';

function Update(props) {
  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p> <input type="text" name="title" placeholder="title" defaultValue={props.title} /></p>
        <p><textarea name="body" placeholder="body" defaultValue={props.body}></textarea></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  );
}

export default Update;
