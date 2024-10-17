import { NavBar } from "../components/NavBar"
import { addHours } from "date-fns";
import { Calendar } from "react-big-calendar";
import { localizer } from "../../helpers/calendarLocalizer";

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { getMessagesES } from "../../helpers/getMessages";

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar un pastel',
  start: new Date(),
  end: addHours( new Date(), 2),
  gbColor: '#fafafa',
  user:{
    _id: '123',
    name: 'Edwin'
  }
}]
export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    console.log( event, start, end, isSelected )
    const style = {
      backgroundColor: '#347cf7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
        <NavBar />

        <Calendar
          culture="es"
          localizer={localizer}
          events={ events }
          startAccessor="start"
          endAccessor="end"
          style={{ height: 'calc(100vh - 80px)' }}
          messages={ getMessagesES() }
          eventPropGetter={ eventStyleGetter }
    />
    </>
  )
}
