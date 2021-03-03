import React from "react";

export const scrollTo = function (element: React.RefObject<any>, to: number, duration: number) {
    const elem = (element as unknown as Element)
    const start = elem.scrollLeft,
        change = to - start,
        startDate =  Number(new Date()),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t: number, b: number, c: number, d: number): number {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate: number = Number(new Date());
            const currentTime: number = currentDate - startDate;
            elem.scrollLeft = easeInOutQuad(currentTime, start, change, duration);
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                elem.scrollLeft = to;
            }
        };
    animateScroll();
};
