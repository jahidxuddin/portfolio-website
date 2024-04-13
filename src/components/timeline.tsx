"use client";

import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {SchoolIcon, StarIcon} from "lucide-react";
import {useEffect} from "react";

export default function Timeline() {
  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".is-hidden");
    hiddenElements.forEach(hiddenElement => {
      const allClasses = hiddenElement.getAttribute("class");
      if (allClasses) {
        const removedIsHiddem = allClasses.replace("is-hidden", "");
        hiddenElement.setAttribute("class", removedIsHiddem);
      }
    });
  }, []);

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022-2025"
        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
        icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Friedrich-List-Schule, Wiesbaden</h3>
        <p>
          Allgemeine Hochschulreife mit Fachrichtung Praktische Informatik
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021-2022"
        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
        icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Mittelstufenschule Dichterviertel, Wiesbaden</h3>
        <p className="flex items-center gap-1">
          Qualifizierender Realschulabschluss - <span className="text-2xl">⌀</span> 1,3
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2016-2021"
        iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
        icon={<SchoolIcon/>}
      >
        <h3 className="vertical-timeline-element-title">Mittelstufenschule Dichterviertel, Wiesbaden</h3>
        <p className="flex items-center gap-1">
          Qualifizierender Hauptschulabschluss - <span className="text-2xl">⌀</span> 1,6
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
        icon={<StarIcon/>}
      />
    </VerticalTimeline>
  );
}