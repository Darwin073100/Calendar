import { useCalendarStore } from "../../hooks/useCalendarStore";

export const FabDelete = () => {
    const { startDeletingEvent, hasEventSelected } = useCalendarStore();

    const handdleDelete = ()=>{
      startDeletingEvent();
    }    
  return (
    <button className="btn btn-danger fab-danger" style={{display: (hasEventSelected) ? '' :'none'}} onClick={ ()=> handdleDelete() }>
        <i className="fa fa-trash"></i>
    </button>
  )
}
