import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { startTransition } from "react";
import SchedulePopUp from "./SchedulePopUp";
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

  const goClickSlot = (param) => {
    console.log(">>", param.start);
    alert(moment(param.start).format("yyyy-MM-DD"));
  };
  return (
    <>
      <SchedulePopUp close={close} />
      <div
        className="flex items-center justify-center py-8 px-4"
        style={{ flexDirection: "column" }}
      >
        <div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            onSelectSlot={goClickSlot}
            selectable
          />
        </div>
        <div className="max-w-sm w-full shadow-lg">
          <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
            <div className="px-4">
              <div className="border-b pb-4 border-gray-400 border-dashed">
                <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                  9:00 AM
                </p>
                <a
                  tabindex="0"
                  className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2"
                >
                  Zoom call with design team
                </a>
                <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                  Discussion on UX sprint and Wireframe review
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Schedule;
