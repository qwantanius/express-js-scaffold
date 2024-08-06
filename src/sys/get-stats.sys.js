import osu from 'node-os-utils';

export function getStats() {
    const cpu = osu.cpu;
    const count = cpu.count();

    cpu.usage().then((cpuPercentage) => {
        console.log({ cpuPercentage, count, loadavgTime: cpu.loadavgTime() });
    });
}
