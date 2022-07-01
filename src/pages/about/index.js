import Layout from "../../components/layouts/Layout";
import jett from "../../../public/img/jett.png";
import List from "../../components/views/List";
import moment from "moment";
import ListItem from "../../components/views/LIstItem";
import Progress from "../../components/views/Progress";
import Card from "../../components/views/Card";
import { ChevronDoubleRightIcon, HeartIcon, StarIcon } from "@heroicons/react/outline";
export default function about() {

  const myBiodata = [
    {name: 'Birthday', value: moment('1996-06-08').format('D MMMM YYYY')},
    {name: 'Age', value: moment().diff('1996-06-08','years')},
    {name: 'Website', value: 'Undermantainance'},
    {name: 'Email', value: 'farlyatwork@gmail.com'},
    {name: 'City', value: 'Manado, Indonesia'},
    {name: 'Degree', value: 'Bachelor of Computer Science'},
  ];

  const myLanguages = [
    {skill: 'BAHASA INDONESIA', rate:'Native'},
    {skill: 'ENGLISH', rate:'Intermediate'},
  ];

  const myProgrammingSkills = [
    {skill: 'PHP', rate:99},
    {skill: 'JavaScript', rate:95},
    {skill: 'HTML', rate:90},
    {skill: 'CSS', rate:90},
    {skill: 'Java', rate:40},
  ];

  const mySoftSkills = [
    {skill: 'TEAMWORK'},
    {skill: 'FLEXIBILITY'},
    {skill: 'CRITICAL THINKING'},
    {skill: 'TIME MANAGEMENT'},
  ];

  return <Layout headerTop={true} activeNav={'About'}>
    <div className="about-me container mx-auto">
      <div className="section-title">
        <h2>About</h2>
        <p>KNOW MORE ABOUT ME</p>
      </div>
      <div className="flex flex-wrap">
        <div className="xs:w-full sm:w-full md:w-3/12 lg:w-3/12">
          <img src={jett.src} className="img-fluid"></img>
        </div>
        <div className="xs:w-full sm:w-full md:w-9/12 lg:w-9/12 content">
          <h3>Software Developer</h3>
          <div className="flex flex-wrap">
            {myBiodata.map((d, i) => <ListItem className="w-6/12" key={i}><b className="font-bold">{d.name}:</b> {d.value}</ListItem>)}
          </div>
        </div>
      </div>
    </div>
    <div className="skills container mx-auto">
      <div className="section-title">
        <h2>Languages</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {myLanguages.map((d, i) => <Card key={i} className="flex flex-row"><StarIcon height={16} width={16} /><b>{d.skill}</b> <span>({d.rate})</span></Card>)}
      </div>
    </div>
    <div className="skills container mx-auto">
      <div className="section-title">
        <h2>Programming Skills</h2>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {myProgrammingSkills.map((d, i) => <Progress key={i} title={d.skill} currentValue={d.rate}/>)}
      </div>
    </div>
    <div className="skills container mx-auto">
      <div className="section-title">
        <h2>Soft Skills</h2>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {mySoftSkills.map((d, i) => <Card key={i} className="flex flex-row"><StarIcon height={16} width={16} />{d.skill}</Card>)}
      </div>
    </div>
  </Layout>
}