export const addZero = (number: number) => number < 10 ? '0' + number : number

const formatMilliseconds = (ms: number) => ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms

export const dateFormater = (timestamp: Date | number): string => {
  const date = new Date(timestamp)

  return `${addZero(date.getMinutes())}:${addZero(date.getSeconds())}:${formatMilliseconds(date.getMilliseconds())}`
}
