import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Button, Col, Container, Row} from "react-bootstrap";
import lankaNIC from "lanka-nic";


function App() {
  const [nic, setNic] = useState("")
  const [sex,setSex] = useState("")
  const [bDay, setBDay] = useState("")

  const onChange = event => {
    setNic(event.target.value)
  }
  let { dateOfBirth, gender } = lankaNIC.getInfoFromNIC(nic);
  const onClick = () => {
    setSex(gender.toUpperCase())
    setBDay(dateOfBirth.toLocaleDateString().split('T')[0])
    console.log(sex)
    console.log(bDay)
  }

  const clear = () => {
    setSex("")
    setBDay("")

  }

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col>
            <h1 style={{fontFamily: "initial", marginLeft: "43%", marginTop: "2vh"}}>NIC App</h1>
            <Card border="dark" style={{width: '25rem', padding: "20px", marginLeft: "28vw", marginTop: "5vh"}}>
              <Card.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                      type="text"
                      placeholder="Enter NIC Number"
                      onChange={onChange}
                  />
                  <br/>
                  <h5>Brithday : {bDay}</h5>
                  <h5>Gender : {sex}</h5>
                  <br/>
                  <Button style={{marginLeft: "10px", width: "130px"}} variant="success"
                          onClick={onClick}>Submit</Button>
                  <Button style={{marginLeft: "40px", width: "130px"}} variant="warning" onClick={clear}>Clear</Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default App
