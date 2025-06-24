import { ProgressBar } from "./ProgressBar"

export const SkillsItem = ({skillName, value }) => {
  return (
    <div className="">
        <ProgressBar label={skillName} value={value}/>
    </div>
  )
}
