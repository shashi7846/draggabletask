import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Getuser, Deleteuserbyid } from "./axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./Home.css";

function Home(props) {
  let [data, setData] = useState([]);
let [list,setList]=React.useState(data);
  let history = useHistory();

  useEffect(async () => {
    let data = await Getuser();
    setData(data.data);
    console.log(data);
  }, []);



const onEnd = (result) => {
  
};

  return (
    <>
      <div className="home">
        <button                       // button to register
          type="button"
          class="btn btn-success"
          onClick={() => {
            history.push("/Form");
          }}
        >
          AddUser
        </button>
      </div>

      <DragDropContext onDragEnd={onEnd}>
        <Droppable droppableId="12345">
          {(provided, snapshot) => (
            <div ref={provided.innerRef}>
              <div className="container">
                <table class="table table-striped border border-3 border-dark rounded mt-5 px-3 py-3 bg-light">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th className="text-center">Email</th>

                      <th className="text-center">gender</th>

                      <th className="text-center" scope="col">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* here the user data are displyaed using map function */}

                    {data.map((use, index) => (
                      <Draggable  // to drag the mapped rows
                        draggableId={use.name}
                        key={use.name}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                         
                              <tr>
                                <th scope="row">{use.name}</th>
                                <td >{use.email}</td>

                                <td>{use.gender}</td>

                                <td>
                                  <button
                                    className="btn btn-primary btn-sm"
                                    onClick={async () => {
                                      history.push(`/Update/${use._id}`);
                                    }}
                                  >
                                    Update
                                  </button>
                                  <button
                                    className="btn btn-danger btn-sm"
                                    onClick={async () => {
                                      await Deleteuserbyid(use._id);
                                      history.push("/");
                                    }}
                                  >
                                    delete
                                  </button>
                                </td>
                              </tr>
                          
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default Home;
const Container = styled.div`
  background-color: brown;
`;
