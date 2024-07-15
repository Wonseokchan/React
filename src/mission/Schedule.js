import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startTransition, useEffect, useState } from "react";
import SchedulePopUp from "./SchedulePopUp";
const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState("");
  const [validate, setValidate] = useState(false);

  const goClickEvent = (param) => {
    if (param) {
      setValidate(true);
    }
  };

  const goClickSlot = (param) => {
    if (param) {
      setOpen(true);
      setStart(moment(param.start).format("yyyy-MM-DD"));
      setValidate(false);
    }
  };

  const close = (param) => {
    if (param.close) {
      setOpen(false);

      if (param.info) {
        setEvents([
          ...events,
          {
            title: param.info.title,
            comment: param.info.content,
            start: start,
            end: start,
          },
        ]);
      }
    }
  };
  return (
    <>
      <div className="flex-col items-center justify-center py-8 px-4">
        {open ? <SchedulePopUp close={close} /> : null}
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
        {validate ? (
          <div className="max-w-sm w-full shadow-lg">
            <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
              <div className="px-4">
                {events.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="border-b pb-4 border-gray-400 border-dashed"
                    >
                      <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                        {v.start}
                      </p>
                      <a
                        tabIndex="0"
                        className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                      >
                        {v.title}
                      </a>
                      <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                        {v.comment}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Schedule;
