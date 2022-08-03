import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';

export function FormBook() {
  const [validated, setValidated] = useState(false);

  let [estados, setEstados] = useState([]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  // const selectEstados = document.querySelector('#estados');

  // const fetchEstados = () => {
  //   fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
  //     .then(response => response.json())
  //     .then(data => {
  //       data.forEach(estado => {
  //         const option = document.createElement('option');
  //         option.value = estado.sigla;
  //         option.textContent = estado.nome;
  //         selectEstados.appendChild(option);
  //       });
  //     });
  // }

  const fetchEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
      .then(response => response.json())
      .then(data => {
        // setEstados(data.map(estado => estado.nome));
        setEstados(data);
      });
  }

  useEffect(() => {
    fetchEstados();
  }, []);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Título</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Título do livro"
            // defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do autor"
            // defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4">
        <Form.Label>Estado</Form.Label>
        <Form.Select id='estados'>
          <option>Selecione ...</option>
          {estados.map((estado, index) => <option key={index} value={estado.sigla}>{estado.nome}</option>)}
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="4">
        <Form.Label>Cidade</Form.Label>
        <Form.Select>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
        {/* <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group> */}
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

// render(<FormExample />);