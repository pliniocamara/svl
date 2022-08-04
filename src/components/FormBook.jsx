import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import InputGroup from 'react-bootstrap/InputGroup';

export function FormBook() {
  const [validated, setValidated] = useState(false);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const fetchEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/?orderBy=nome')
      .then(response => response.json())
      .then(data => setEstados(data));
  };

  const estadoChange = event => fetchCidades(event.currentTarget.value);

  const fetchCidades = uf => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      .then(response => response.json())
      .then(data => {
        const cidades = [];
        data.map((cidade, index) => cidades.push(<option key={index} value={cidade.nome}>{cidade.nome}</option>));
        setCidades(cidades);
      });
  };

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
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome do autor"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="4">
        <Form.Label>Estado</Form.Label>
        <Form.Select onChange={estadoChange}>
          <option>Selecione ...</option>
          {estados.map((estado, index) => <option key={index} value={estado.sigla}>{estado.nome}</option>)}
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} md="4">
        <Form.Label>Cidade</Form.Label>
        <Form.Select>
          <option>Selecione ...</option>
          {cidades}
        </Form.Select>
      </Form.Group>
      </Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

// render(<FormExample />);