import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startTransition } from "react";
const localizer = momentLocalizer(moment);

const Schedule = () => {
  const events = [
    { title: "이벤트1", start: new Date(), end: new Date() },
    {
      title: "이벤트2",
      start: new Date(),
      end: new Date("2024-07-15"),
      comment: "그냥 추가해봄",
    },
  ];

  const goClickEvent = (param) => {
    console.log(param);
  };

  const goClickSlot = (param) => {
    console.log(">>", param.start);
    alert(moment(param.start).format("yyyy-MM-DD"));
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={goClickEvent}
        onSelectSlot={goClickSlot}
        selectable
      />
    </div>
  );
};
export default Schedule;
