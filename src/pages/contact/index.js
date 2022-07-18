import { LocationMarkerIcon, MailIcon, PhoneIcon, ShareIcon } from "@heroicons/react/outline";
import Layout from "../../components/layouts/Layout";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
import { useState } from "react";
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
  ];

  const [submitSubjectLoader, setSubmitSubjectLoader] = useState(false);
  const [errMassage, setErrorMessage] = useState(null);
  const [successMassage, setSuccessMessage] = useState(null);
  const [dataSubject, setDataSubject] = useState({
    name: '',
    email: '',
    subject: '',
    description: ''
  });

  const handleChange = (event) => {
    const newDataSubject = {...dataSubject};
    newDataSubject[event.target.name] = event.target.value;
    setDataSubject(newDataSubject);
  }

  const closeErrorMessage = () => {
    setErrorMessage(null);
  }

  const submitSubject = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setSubmitSubjectLoader(true);
    setTimeout(() => {
      setSubmitSubjectLoader(false);
      // setErrorMessage("Unable to connect! Please Try Again Later.");
      setSuccessMessage("Message Sent. Thankyou");
    }, 1500);
  }

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
      <form className="email-form mt-4" onSubmit={submitSubject} method="POST">
        <div className="grid grid-cols-2 gap-4">
          <div className="mt-4">
            <input name={'name'} type={'text'} autoComplete={'off'} placeholder="Your Name" className="w-full" value={dataSubject.name} onChange={handleChange}/>
          </div>
          <div className="mt-4">
            <input name={'email'} type={'email'} autoComplete={'off'} placeholder="Your Email" className="w-full" value={dataSubject.email} onChange={handleChange}/>
          </div>
        </div>
        <div className="mt-4 w-full">
          <input name={'subject'} type={'text'} autoComplete={'off'} placeholder="Subject" className="w-full" value={dataSubject.subject} onChange={handleChange}/>
        </div>
        <div className="mt-4 w-full">
          <textarea name={'description'} autoComplete={'off'} placeholder="Description" className="w-full" value={dataSubject.description} onChange={handleChange}/>
        </div>
        <div className="my-4">
          {submitSubjectLoader && <div className="loading">Loading</div>}
          {errMassage && <div className="error-message">{errMassage}</div>}
          {successMassage && <div className="sent-message">{successMassage}</div>}
        </div>
        <div className="text-center">
          <button type="submit" className="">Send Message</button>
        </div>
      </form>
    </div>
  </Layout>
}