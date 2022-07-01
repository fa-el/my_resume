import { useEffect } from "react";

export default function List ({col=1, colSm=0, colLg=0, gap=0, data = [], listItem = () => {}, className='', ...props}) {

  const gridCol = 'grid-cols-'+col;
  const gridColSm = colSm > 0 ? 'grid-cols-'+colSm : 'grid-cols-'+col;
  const gridColLg = colLg > 0 ? 'grid-cols-'+colLg : 'grid-cols-'+col;
  const gaps = 'gap-'+gap

  useEffect(()=>{
    console.log('List is loaded');
  }, [col, gap, data, listItem])

  return <div className={"grid "+gridCol+" "+gaps+" sm:"+gridColSm+" lg:"+gridColLg+" "+className+""}>
    {data.map((d,i)=> {
      return listItem(d, i);
    })}
  </div>
}