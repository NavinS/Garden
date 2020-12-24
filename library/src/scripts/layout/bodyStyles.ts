/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { globalVariables } from "@library/styles/globalStyleVars";
import { styleFactory, useThemeCache } from "@library/styles/styleUtils";
import { percent, viewHeight } from "csx";
import { cssRule, style } from "typestyle";
import { colorOut, backgroundHelper, margins, paddings, fonts } from "@library/styles/styleHelpers";
import { homePageVariables } from "@library/layout/homePageStyles";
import isEmpty from "lodash/isEmpty";
import { NestedCSSProperties } from "typestyle/lib/types";

export const bodyCSS = useThemeCache(() => {
    const globalVars = globalVariables();

    cssRule("html", {
        "-ms-overflow-style": "-ms-autohiding-scrollbar",
    });

    const htmlBodyMixin: NestedCSSProperties = {
        background: colorOut(globalVars.body.backgroundImage.color),
        ...fonts({
            size: globalVars.fonts.size.medium,
            family: globalVars.fonts.families.body,
            color: globalVars.mainColors.fg,
        }),
        wordBreak: "break-word",
        $unique: true, // This doesn't refresh without this for some reason.
    };

    cssRule("html", htmlBodyMixin);
    const bodyClass = style({
        ...htmlBodyMixin,
        $debugName: "vanillaBodyReset",
    });
    document.body.classList.add(bodyClass);

    cssRule("*", {
        // For Mobile Safari -> https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior
        "-webkit-overflow-scrolling": "touch",
    });

    cssRule("h1, h2, h3, h4, h5, h6", {
        display: "block",
        lineHeight: globalVars.lineHeights.condensed,
        ...margins({
            all: 0,
        }),
        ...paddings({
            all: 0,
        }),
    });

    cssRule("p", {
        ...margins({
            all: 0,
        }),
        ...paddings({
            all: 0,
        }),
    });

    cssRule(".page", {
        display: "flex",
        overflow: "visible",
        flexDirection: "column",
        width: percent(100),
        minHeight: viewHeight(100),
        position: "relative",
        zIndex: 0,
    });

    cssRule("button", {
        "-webkit-appearance": "none",
        "-moz-appearance": "none",
    });

    cssRule(".page-minHeight", {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
    });

    cssRule(`input[type="number"]`, {
        [`-webkit-appearance`]: "none",
        [`-moz-appearance`]: "textfield",
        $nest: {
            [`&::-webkit-inner-spin-button`]: {
                [`-webkit-appearance`]: "none",
                margin: 0,
            },
            [`&::-webkit-outer-spin-button`]: {
                [`-webkit-appearance`]: "none",
                margin: 0,
            },
        },
    });

    cssRule(
        `input::-webkit-search-decoration,
        input::-webkit-search-cancel-button,
        input::-webkit-search-results-button,
        input::-webkit-search-results-decoration,
        input::-ms-clear`,
        {
            display: "none",
        },
    );
});

export const fullBackgroundClasses = useThemeCache((isRootPage = false) => {
    const globalVars = globalVariables();
    const style = styleFactory("fullBackground");
    const image = globalVars.body.backgroundImage;
    const homePageVars = homePageVariables();
    const source = isRootPage && !isEmpty(homePageVars.backgroundImage) ? homePageVariables() : globalVars.body;

    const root = style(
        {
            display: !image ? "none" : "block",
            position: "fixed",
            top: 0,
            left: 0,
            width: percent(100),
            height: viewHeight(100),
            zIndex: -1,
        },
        backgroundHelper(source.backgroundImage),
    );

    return { root };
});
