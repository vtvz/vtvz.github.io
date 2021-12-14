import LogoSpeaker from '../widgets/LogoSpeaker';
import IdleDetector from '../tools/IdleDetector';
import Utils from '../tools/Utils';

export default class LogoSpeaking {
    constructor() {
        this.idleDetector = new IdleDetector();
        this.logoSpeaker = new LogoSpeaker();
    }

    async act() {
        const logoSpeaker = this.logoSpeaker;

        const firstSpeech = async () => {
            logoSpeaker.show();

            await logoSpeaker.loading(300 * 6);

            await Promise.all([
                logoSpeaker.type(logoSpeaker.wide, 'Нашли что-то интересное или полезное для себя?', '*Подписывайтесь*, чтобы ничего не пропустить #'),
                logoSpeaker.type(logoSpeaker.narrow, 'Интересно?', '*Подписывайтесь!* #'),
            ]);
        };

        const speech = async (todo = 'say') => {
            await Promise.all([
                logoSpeaker[todo](logoSpeaker.wide, '*Подписывайтесь*, чтобы ничего не пропустить #'),
                logoSpeaker[todo](logoSpeaker.narrow, '*Подписывайтесь!* #'),
            ]);
        };

        const globalActivity = this.idleDetector.getGlobalActivity();

        switch (true) {
            case globalActivity < 15000:
                while (15000 - this.idleDetector.getGlobalActivity() > 0) {
                    await Utils.delay(15000 - this.idleDetector.getGlobalActivity());
                }

                await firstSpeech();
                break;

            case !logoSpeaker.isClicked():
                logoSpeaker.show();

                await speech();
                break;

            default:
                let speechLocked = false;
                $('.logo').on('mouseenter focusin touchstart', async (e) => {
                    if (!logoSpeaker.isShown() && e.type === 'touchstart') {
                        e.preventDefault();
                    }
                    if (!speechLocked && !logoSpeaker.isShown()) {
                        logoSpeaker.show();

                        speechLocked = true;
                        await speech('type');
                        speechLocked = false;
                    }
                });
        }
    }
}
