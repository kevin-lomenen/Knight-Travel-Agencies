import React from "react";
import powerPlugLogo from "../images/power-plug.svg";
import trackLogo from "../images/tracking.svg";
import ticketLogo from "../images/ticket.svg";
import newspaperLogo from "../images/newspaper.svg";
import blanketsLogo from "../images/bed-sheets.svg";
import pillowLogo from "../images/pillow.svg";
import cctvLogo from "../images/cctv.svg";
import movieLogo from "../images/video.svg";
import tvLogo from "../images/tv.svg";


import EachAmenities from "./EachAmenities";

export default function Amenities({ data }) {
  let {
    blankets,
    cctv,
    charging_point,
    emergency_contact_number,
    mobile_ticket,
    movie,
    newspaper,
    personaltv,
    pillow,
    reading_light,
    track_my_bus,
  } = data;
  return (
    <>
      <EachAmenities
        present={charging_point}
        logo={powerPlugLogo}
        title="Charging Point"
      />
      <EachAmenities
        present={reading_light}
        title="Reading Light"
      />
      <EachAmenities
        present={track_my_bus}
        logo={trackLogo}
        title="Track My Bus"
      />
      <EachAmenities
        present={mobile_ticket}
        logo={ticketLogo}
        title="Mobile Ticket"
      />
      <EachAmenities
        present={newspaper}
        logo={newspaperLogo}
        title="Newspaper"
      />
      <EachAmenities
        present={emergency_contact_number}
        title="Emergency Contact Number"
      />
      <EachAmenities present={blankets} logo={blanketsLogo} title="Blankets" />
      <EachAmenities present={pillow} logo={pillowLogo} title="Pillow" />
      <EachAmenities present={cctv} logo={cctvLogo} title="CCTV" />
      <EachAmenities present={movie} logo={movieLogo} title="Movie" />
      <EachAmenities present={personaltv} logo={tvLogo} title="Personal TV" />

    </>
  );
}
