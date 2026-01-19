export interface Activity {
  id: number
  name: string
  distance: number
  moving_time: number
  total_elevation_gain: number
}

export async function fetchActivities(): Promise<Activity[]> {
  const res = await fetch('/api/activities')
  return res.json()
}
