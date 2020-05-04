/**
 * @author Adam Charron <adam.c@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React, { Component } from "react";

import { IEvent } from "@library/events/Event";
import { eventsClasses } from "@library/events/eventStyles";
import { Event } from "@library/events/Event";
import classNames from "classnames";
import { t } from "@vanilla/i18n";
import { EventAttendance } from "@library/events/EventAttendanceDropDown";
import { ISelectBoxItem } from "@library/forms/select/SelectBox";

export interface IEventList {
    headingLevel?: 2 | 3;
    data: IEvent[];
}

/**
 * Component for displaying an accessible nicely formatted time string.
 */
export function EventsList(props: IEventList) {
    const classes = eventsClasses();
    if (!props.data || props.data.length === 0) {
        return <p className={classes.empty}>{t("This category does not have any events.")}</p>;
    }

    const options = [
        { name: t("Going"), value: EventAttendance.GOING },
        { name: t("Maybe"), value: EventAttendance.MAYBE },
        { name: t("Not going"), value: EventAttendance.NOT_GOING },
    ] as ISelectBoxItem[];

    let longestCharCount = 0;
    options.forEach(o => {
        if (o.name && o.name.length > longestCharCount) {
            longestCharCount = o.name.length;
        }
    });

    return (
        <ul className={classes.list}>
            {props.data.map((event, i) => {
                return (
                    <Event
                        className={classNames({ isFirst: i === 0 })}
                        headingLevel={props.headingLevel}
                        {...event}
                        key={i}
                        longestCharCount={longestCharCount}
                        attendanceOptions={options}
                    />
                );
            })}
        </ul>
    );
}
