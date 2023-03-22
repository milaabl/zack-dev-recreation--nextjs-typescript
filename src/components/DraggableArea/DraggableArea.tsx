import { PropsWithChildren } from 'react';
import Draggable from 'react-draggable';

export default function DraggableArea ({
  children
} : PropsWithChildren) {
  return <Draggable>
          <div>{children}</div>
        </Draggable>

};
