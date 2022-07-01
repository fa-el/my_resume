export default function Progress ({title, currentValue=0, maxValue=100, minValue=0, ...props})
{
  return <div className="progress">
    <div className="skill">{title} <i className="val">{currentValue}%</i></div>
    <div className="progress-bar-wrap">
      <div className="progress-bar" role="progressbar" aria-valuenow={currentValue} aria-valuemin={minValue} aria-valuemax={maxValue} style={{width:`${currentValue}%`}}>
      </div>
    </div>
  </div>
}