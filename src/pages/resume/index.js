import Layout from "../../components/layouts/Layout";
import ListItem from "../../components/views/LIstItem";

export default function resume() {

  const myEducation = [
    {title: 'Bachelor of Computer Science', year: '2013-2018', address: 'Informatics Engineering Studi Program, Faculty of Engineering at Sam Ratulangi University Manado, Indonesia'},
    {title:'Senior High School', year: '2010-2012', address: 'Public High School 9 Manado, Indonesia'},
    {title:'Junior High School', year: '2007-2009', address: 'Catholic Middle School St. Rafael Manado, Indonesia'},
    {title:'Elementary School', year: '2001-2006', address: 'Advent Primary School Manado, Indonesia'},
  ];

  const myExperience = [
    {title: '(Contract) Software Engineering', year: '2019-Until Now', address: 'Management Information System of Prof. Dr. R. D. Kandou Manado Central Hospital Manado', jobDesk: [
      'Working as a team on developing Hospital Service Applications',
      'Develops numerous Hospital Back Office Applications (Human Resources, Remuneration, Planning, Procurement, and Payment Apps)',
      'Develop mobile application'
    ]},
    {title: '(Intern) Mobile Programmer', year: '2018', address: 'Karyampat Podhouse Manado', jobDesk: [
      'Creating Point of Sale mobile application'
    ]}
  ];

  return <Layout headerTop={true} activeNav={'Resume'}>
  <div className="portofolio container mx-auto">
    <div className="section-title">
      <h2>About</h2>
      <p>CHECK MY RESUME</p>
    </div>
    <div className="flex flex-wrap">
      <div className="lg:w-1/2 md:w-1/2 sm:w-full pr-2">
        <div className="resume-title">Education</div>
        {myEducation.map((d, i) => <div key={i} className="resume-item">
          <h4>{d.title}</h4>
          <h5>{d.year}</h5>
          <p>{d.address}</p>
        </div>)}
      </div>
      <div className="lg:w-1/2 md:w-1/2 sm:w-full">
        <div className="resume-title">Experience</div>
        {myExperience.map((d,i) => <div className="resume-item">
          <h4>{d.title}</h4>
          <h5>{d.year}</h5>
          <p>{d.address}</p>
          <div className="flex flex-wrap">
          {d.jobDesk.map((e,i) => <ListItem className="w-full" key={i}>{e}</ListItem>)}
          </div>
        </div>)}
      </div>
    </div>
  </div>
</Layout>
}