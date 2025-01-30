import {cover_images} from "@/constants/cover_images";

export function getHangoutStudyImg (index?: number) {
  if(index) cover_images[`cover_${index}`]
  return cover_images[`cover_${Math.floor(Math.random() * 4) + 1}`]
}