import Utils from '../tools/Utils';

import { SVG } from '@svgdotjs/svg.js';

export default class LogoBlinking {
    async act() {
        const logo = SVG('#main-logo');
        const leftEye = logo.findOne('#left-eye');
        const rightEye = logo.findOne('#right-eye');

        let timeout = 3000;

        while (true) {
            await Utils.delay(timeout);
            timeout = Utils.random(10000, 20000);

            const blinkSpeed = Math.floor(Utils.random(150, 250) / 2);

            leftEye.animate(blinkSpeed)
                .ease('<>')
                .plot('M 292.185,573.771 L 350.17399,668.66516 393.82031,697.80751 343.21008,675.40626 Z')
                .loop(2, true);

            rightEye.animate(blinkSpeed)
                .ease('<>')
                .plot('m 675.99834,669.55791 -43.64627,28.66441 51.43989,-22.40125 50.61022,-102.87979 z')
                .loop(2, true);
        }
    }
}
