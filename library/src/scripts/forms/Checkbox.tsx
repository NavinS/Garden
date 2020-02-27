/**
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import { getRequiredID, IOptionalComponentID, useUniqueID } from "@library/utility/idUtils";
import { checkRadioClasses } from "./checkRadioStyles";
import classNames from "classnames";
import { t } from "@library/utility/appUtils";
import { srOnly, visibility } from "@library/styles/styleHelpers";
import { ToolTip } from "@library/toolTip/ToolTip";

interface IProps extends IOptionalComponentID {
    id?: string;
    className?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    isHorizontal?: boolean;
    fakeFocus?: boolean;
    defaultChecked?: boolean;
    tooltipLabel?: boolean;
}

export default function CheckBox(props: IProps) {
    const labelID = useUniqueID("checkbox_label");
    const classes = checkRadioClasses();

    const { isHorizontal } = props;

    const icon = (
        <span className={classes.iconContainer} aria-hidden="true">
            <svg className={classNames(classes.checkIcon)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                <title>{t("✓")}</title>
                <path
                    fill="currentColor"
                    d="M10,2.7c0-0.2-0.1-0.3-0.2-0.4L8.9,1.3c-0.2-0.2-0.6-0.2-0.9,0L3.8,5.6L1.9,3.7c-0.2-0.2-0.6-0.2-0.9,0L0.2,4.6c-0.2,0.2-0.2,0.6,0,0.9l3.2,3.2c0.2,0.2,0.6,0.2,0.9,0l5.5-5.5C9.9,3,10,2.8,10,2.7z"
                />
            </svg>
        </span>
    );

    return (
        <label className={classNames(props.className, classes.root, { isHorizontal })}>
            <input
                className={classNames(classes.input, props.fakeFocus && "focus-visible")}
                aria-labelledby={labelID}
                type="checkbox"
                onChange={props.onChange}
                checked={props.checked}
                defaultChecked={props.defaultChecked}
                disabled={props.disabled}
                tabIndex={0}
                title={props.tooltipLabel ? props.label : undefined}
            />
            {props.tooltipLabel && props.label ? <ToolTip label={props.label}>{icon}</ToolTip> : icon}
            {props.label && (
                <span
                    id={labelID}
                    className={classNames(classes.label, props.tooltipLabel && visibility().visuallyHidden)}
                >
                    {props.label}
                </span>
            )}
        </label>
    );
}
