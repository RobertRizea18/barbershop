import { useState, useRef } from "react";
import "./form.css";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const Form = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [services, setServices] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [show, setShow] = useState(false);

  const handleFirstName = (e) => {
    console.log(e.target.firstName);
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    console.log(e.target.lastName);
    setLastName(e.target.value);
  };

  const handleServices = (e) => {
    console.log(e.target.services);
    setServices(e.target.value);
  };

  const handleDate = (e) => {
    console.log(e.target.datePick);
    setDate(e.target.value);
  };

  const handleTime = (e) => {
    console.log(e.target.time);
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const service = e.target[2].value;
    const date = e.target[3].value;
    const time = e.target[4].value;
    if (
      firstName !== "" &&
      lastName !== "" &&
      service !== "Empty" &&
      date !== "" &&
      time !== ""
    ) {
      setShow(true);
    } else {
      alert("Te rugam sa completezi toate campurile.");
    }
    console.dir(e.target);
    console.log(firstName, lastName);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-input-container">
          <label>Nume</label>
          <input type="text" className="input-color" name="firstName" />
        </div>
        <div className="form-input-container">
          <label>Prenume</label>
          <input type="text" className="input-color" name="lastName" />
        </div>
        <div className="form-input-container">
          <label>Serviciul dorit</label>
          <select
            id="text"
            className="input-color"
            onChange={handleServices}
            name="services"
            value={services}
          >
            <option value="Empty">Alegeti serviciul dorit</option>
            <option value="1">Premium Haircut</option>
            <option value="2">Superior Experience</option>
            <option value="3">Ultimate Experience</option>
            <option value="4">Executive Beard</option>
          </select>
        </div>
        <div className="form-input-container">
          <label>Selectati data</label>
          <input
            type="date"
            className="input-color"
            onChange={handleDate}
            name="date"
            value={date}
          />
        </div>

        <div className="form-input-container">
          <label>Selectati ora</label>
          <input type="time" onChange={handleTime} name="time" value={time} />
        </div>

        <button type="submit" className="form-submit-button">
          Programeaza-te
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Multumim pentru programare!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Te asteptam in locatia noastra pentru cele mai moderne tunsori
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </>
  );
};

export default Form;
