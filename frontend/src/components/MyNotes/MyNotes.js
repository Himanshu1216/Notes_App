import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../MainScreen/MainScreen";
import { Link } from "react-router-dom";
import './MyNotes.css'
// import notes from "../../data/notes";
import { useEffect, useState } from "react";
import axios from 'axios';



const MyNotes = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if(window.confirm("Are you sure?")) {
    
        }
    }

    const fetchNotes = async() => {
        const {data} = await axios.get('http://localhost:3001/api/notes');
        // console.log(data);
        setNotes(data);
    }

    //react hook which is fired up when the component inside it gets rendered.
    // for ex when we open myNotes page and it gets rendered completely then the fn inside useEffect will be fired up.
    // as soon as our page will get render we will call our api

    //our frontend and backend should be on same domain and not on different domain
    // to fix this we used cors in server.js which will ensure that both are on same domain.

    useEffect(() => {
        //api call
        // we can't directly define fn inside
        fetchNotes();
    }, [])

    return (
    <MainScreen title="Welcome back Himanshu..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        //although not necessary but giving key as each child items of a map or list should have unique keys.
        <Accordion defaultActiveKey={["0"]} key={note._id}> 
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/note/${note.id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {note.category}{" "}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Creater on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
    )
}

export default MyNotes;