import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

function Board() {
  useEffect(() => {
    // get board
  }, [])

  return (
    <DragDropContext>
        <Droppable droppableId="board" direction='horizontal' type='column'>
            {(provided) => (
                <div>
                    {/* rendering all the columns */}
                </div>
            )}
        </Droppable>
    </DragDropContext>
  )
}

export default Board