import { LocationMarkerIcon, MailIcon, PhoneIcon, ShareIcon } from "@heroicons/react/outline";
import Layout from "../../components/layouts/Layout";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
export default function contact() {

  const myContact = [
    {
      title: 'My Address',
      icon: <LocationMarkerIcon height={16} width={16}/>,
      description: <p>Minahasa, North Sulawesi, Indonesia</p>
    },
    {
      title: 'Social Profiles',
      icon: <ShareIcon height={16} width={16}/>,
      description: <div className="social-links">
        <a href="#" className="facebook">
          <BsFacebook height={16} width={16}/>
        </a>
        <a href="#" className="instagram">
          <BsInstagram height={16} width={16}/>
        </a>
        <a href="#" className="linkedin">
          <BsLinkedin height={16} width={16}/>
        </a>
        <a href="#" className="twitter">
          <BsTwitter height={16} width={16}/>
        </a>
      </div>
    },
    {
      title: 'Email Me',
      icon: <MailIcon height={16} width={16}/>,
      description: <p>farlyatwork@gmail.com</p>
    },
    {
      title: 'Call Me',
      icon: <PhoneIcon height={16} width={16}/>,
      description: <p>+62 851 4579 5892</p>
    },
  ]

  return <Layout headerTop={true} activeNav={'Contact'}>
    <div className="contact container mx-auto">
      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {myContact.map((d,i) => <div key={i} className="info-box">
          <i className="bx">{d.icon}</i>
          <h3>{d.title}</h3>
          {d.description}
        </div>)}
      </div>
      <form className="email-form mt-4" action="#" method="POST">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-4">
            <input type={'text'} placeholder="Your Name" className="w-full"/>
          </div>
          <div className="mt-4">
            <input type={'email'} placeholder="Your Email" className="w-full"/>
          </div>
        </div>
        <div className="mt-4 w-full">
          <input type={'text'} placeholder="Subject" className="w-full"/>
        </div>
        <div className="mt-4 w-full">
          <textarea className="w-full" placeholder="Description"></textarea>
        </div>
      </form>
    </div>
  </Layout>
}