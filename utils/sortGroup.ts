import {HangoutGroup} from "@/types/hangout-group.type";
import {StudyGroup} from "@/types/study-group.type";

export function sortGroup (groups: (HangoutGroup | StudyGroup)[]) {
  return groups.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
}