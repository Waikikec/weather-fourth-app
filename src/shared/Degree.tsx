
interface DegreeProps {
  temp: number
}

const Degree = ({ temp }: DegreeProps) => {
  return (
    <span>
      {temp}
      <sup>&deg;C</sup>
    </span>
  )
}

export default Degree