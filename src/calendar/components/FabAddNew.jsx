import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore"

export const FabAddNew = () => {
    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handdleClick = ()=>{
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2),
            gbColor: '#fafafa',
            user:{
              _id: '',
              name: ''
            }
        });
        openDateModal();
    }    
  return (
    <button className="btn btn-primary fab" onClick={ ()=> handdleClick() }>
        <i className="fa fa-plus"></i>
    </button>
  )
}
