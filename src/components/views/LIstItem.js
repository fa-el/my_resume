import { ChevronDoubleRightIcon } from "@heroicons/react/outline";

export default function ListItem ({customItem=null, icon=<ChevronDoubleRightIcon height={16} width={16} className={`my-auto`}/>, className, ...props}) {
  if(customItem != null) return <customItem {...props}/>;

  return <div className={`${className} flex py-2`}>
    {icon}
    <div className="px-3 w-full">{props?.children}</div>
  </div>
}