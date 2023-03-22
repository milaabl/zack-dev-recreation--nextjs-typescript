import { cloneElement, Children, Fragment, PropsWithChildren, ReactNode, FC } from 'react';
import Draggable from 'react-draggable';

export default function DraggableArea ({
  children
}) : FC<PropsWithChildren> {
  return <Fragment>
    {Children.map(children, (child : ReactNode) => {
      return (
        <Draggable>
          <div>{cloneElement(child)}</div>
        </Draggable>
      );
    })}
  </Fragment>

};
