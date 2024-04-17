import { AlarmClock } from "./index.ts";

describe("normal state", () => {
  test("setAlarm", () => {
    const clock = new AlarmClock("normal");
    expect(clock.setAlarm()).toBe("none");
    expect(clock.clockState).toBe("alarmSet");
  });
  test("cancelAlarm", () => {
    const clock = new AlarmClock("normal");
    expect(clock.cancelAlarm()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
  test("reachedToAlarmTime", () => {
    const clock = new AlarmClock("normal");
    expect(clock.reachedToAlarmTime()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
  test("snooze", () => {
    const clock = new AlarmClock("normal");
    expect(clock.snooze()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
  test("elapseSnoozeTime", () => {
    const clock = new AlarmClock("normal");
    expect(clock.elapseSnoozeTime()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
});

describe("alarmSet state", () => {
  test("setAlarm", () => {
    const clock = new AlarmClock("alarmSet");
    expect(clock.setAlarm()).toBe("none");
    expect(clock.clockState).toBe("alarmSet");
  });
  test("cancelAlarm", () => {
    const clock = new AlarmClock("alarmSet");
    expect(clock.cancelAlarm()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
  test("reachedToAlarmTime", () => {
    const clock = new AlarmClock("alarmSet");
    expect(clock.reachedToAlarmTime()).toBe("soundAlarm");
    expect(clock.clockState).toBe("alarmSounding");
  });
  test("snooze", () => {
    const clock = new AlarmClock("alarmSet");
    expect(clock.snooze()).toBe("none");
    expect(clock.clockState).toBe("alarmSet");
  });
  test("elapseSnoozeTime", () => {
    const clock = new AlarmClock("alarmSet");
    expect(clock.elapseSnoozeTime()).toBe("none");
    expect(clock.clockState).toBe("alarmSet");
  });
});

describe("alarmSounding state", () => {
  test("setAlarm", () => {
    const clock = new AlarmClock("alarmSounding");
    expect(clock.setAlarm()).toBe("none");
    expect(clock.clockState).toBe("alarmSounding");
  });
  test("cancelAlarm", () => {
    const clock = new AlarmClock("alarmSounding");
    expect(clock.cancelAlarm()).toBe("stopAlarm");
    expect(clock.clockState).toBe("normal");
  });
  test("reachedToAlarmTime", () => {
    const clock = new AlarmClock("alarmSounding");
    expect(clock.reachedToAlarmTime()).toBe("none");
    expect(clock.clockState).toBe("alarmSounding");
  });
  test("snooze", () => {
    const clock = new AlarmClock("alarmSounding");
    expect(clock.snooze()).toBe("stopAlarm");
    expect(clock.clockState).toBe("snoozing");
  });
  test("elapseSnoozeTime", () => {
    const clock = new AlarmClock("alarmSounding");
    expect(clock.elapseSnoozeTime()).toBe("none");
    expect(clock.clockState).toBe("alarmSounding");
  });
});

describe("snoozing state", () => {
  test("setAlarm", () => {
    const clock = new AlarmClock("snoozing");
    expect(clock.setAlarm()).toBe("none");
    expect(clock.clockState).toBe("snoozing");
  });
  test("cancelAlarm", () => {
    const clock = new AlarmClock("snoozing");
    expect(clock.cancelAlarm()).toBe("none");
    expect(clock.clockState).toBe("normal");
  });
  test("reachedToAlarmTime", () => {
    const clock = new AlarmClock("snoozing");
    expect(clock.reachedToAlarmTime()).toBe("none");
    expect(clock.clockState).toBe("snoozing");
  });
  test("snooze", () => {
    const clock = new AlarmClock("snoozing");
    expect(clock.snooze()).toBe("none");
    expect(clock.clockState).toBe("snoozing");
  });
  test("elapseSnoozeTime", () => {
    const clock = new AlarmClock("snoozing");
    expect(clock.elapseSnoozeTime()).toBe("soundAlarm");
    expect(clock.clockState).toBe("alarmSounding");
  });
});
