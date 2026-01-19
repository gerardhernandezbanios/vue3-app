export interface Stats {
  distance: number
  time: string
  elevation: number
}

export function getMockStats(): Stats {
  return {
    distance: 82,
    time: '6h 12m',
    elevation: 1850
  }
}
