export default function Card ({children, className = '', ...props}) {
  return <div className={`icon-box ${className}`}>{children}</div>
}