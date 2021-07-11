import react, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Modal_Edit.css';

function Modal_Edit(props) {

  const [input, setInput] = useState(props.editingPosts && props.editingPosts.title);

  function onChange(event) {
    setInput(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    props.onHide();
    props.updatePosts(input);
  }

  useEffect(() => {
    setInput(props.editingPosts && props.editingPosts.title);
  }, [props.editingPosts])

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={false}
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center fw-bold"  >
          Edit Post
          </Modal.Title>
        <i className="bi bi-x-lg float-right" onClick={props.onHide}></i>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>User</h4> */}

        <form onSubmit={onSubmit}>
          <input type="text" className="edit-input" value={input} autoFocus onChange={onChange} />
        </form>

      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={onSubmit} className="w-100 fw-bold">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modal_Edit;