import React, { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./index.css";
import { Box, Paper, Stack } from "@mui/material";

export default function Calendar() {
  const [currentEvents, setCurrentEvents] = useState([]);

  let eventGuid = 0;

  function createEventId() {
    return String(eventGuid++);
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  function handleEventClick(clickInfo) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  }

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "center", lg: "flex-start" },
        justifyContent: "center",
        flexDirection: { xs: "column", lg: "row" },
      }}
      gap={2}
      className="demo-app"
    >
      <Sidebar currentEvents={currentEvents} />
      <Box sx={{ width: "100%", padding: "0" }} className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        />
      </Box>
    </Box>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function Sidebar({ currentEvents }) {
  return (
    <Stack direction={"row"}>
      <Paper className="demo-app-sidebar">
        <div className="demo-app-sidebar-section">
          <h2 style={{ textAlign: "center" }}>
            All Events ({currentEvents.length})
          </h2>
          <ul>
            {currentEvents.map((event) => (
              <SidebarEvent key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </Paper>
    </Stack>
  );
}

function SidebarEvent({ event }) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}
