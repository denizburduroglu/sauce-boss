export class Settings {
    totalMinutes: Number;
    passedMinutes: Number;
    version: string;

    constructor(
        totalMinutes,
        passedMinutes,
        version
    ) {
        this.totalMinutes = totalMinutes;
        this.passedMinutes = passedMinutes;
        this.version = version;
    }
}