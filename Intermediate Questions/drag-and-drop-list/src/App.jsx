import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./App.css";

function App() {
  const [arr, setArr] = useState([]);

  const task = [
    {
      id: "1",
      name: "Shailesh Kale",
      role: "MERN Stack Developer",
      location: "Nagpur, Maharashtra",
      image: "https://example.com/images/shailesh.jpg",
    },
    {
      id: "2",
      name: "John Doe",
      role: "Frontend Developer",
      location: "New York, USA",
      image: "https://example.com/images/john.jpg",
    },
    {
      id: "3",
      name: "Jane Smith",
      role: "Backend Developer",
      location: "London, UK",
      image: "https://example.com/images/jane.jpg",
    },
    {
      id: "4",
      name: "Alex Johnson",
      role: "Full Stack Developer",
      location: "Berlin, Germany",
      image: "https://example.com/images/alex.jpg",
    },
    {
      id: "5",
      name: "Emily Davis",
      role: "UI/UX Designer",
      location: "Toronto, Canada",
      image: "https://example.com/images/emily.jpg",
    },
  ];

  useEffect(() => {
    setArr(task);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(arr);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setArr(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div
            className="box"
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {arr.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="task-item">
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                    <p>{item.location}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default App;
