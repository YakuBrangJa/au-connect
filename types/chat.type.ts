export type Message = {
  id: string,
  message: string,
  created_at: Date,
  sender: {
    id: string,
    name: string,
    profileImg?: string,
  }
}