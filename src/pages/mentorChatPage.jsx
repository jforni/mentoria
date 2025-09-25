import { Form, Button } from 'react-bootstrap'
import '../styles/style.css'
import '../styles/mentorChat.css'

export function MentorChatPage() {
  return (
    <main id='principalContainer'>
      <section id='chatContainer'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Conversación</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>¿Qué dudas tienes?</Form.Label>
            <Form.Control type="text" />
            <Form.Check aria-label="option 1" />
            <Button variant="primary">Enviar</Button>
          </Form.Group>
        </Form>
      </section>
    </main>
  )
}
