import { NextPage } from "next";
import Jailbird from "../../components/testimonials/Jailbird";
import Testimonial from "../../components/testimonials/Testimonial";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";


const Testimonials: NextPage = () => {
  return (
    <>
      <Jailbird />
      <Testimonial>
      <p><RiDoubleQuotesL />  This man Mr. Tom Davison is one of the most genuine people I have ever met. He was one of my instructors in college. He not only believes in people, he goes above and beyond what the job calls for. He takes his own personal time to research whatever someone needs, and gives special counceling on business ventures one might have.</p>
      <p>With the confidence this man put in me, I was able to do a complete thirty page marketing plan and create an overseas business plan, give a presentation in front of the class and receive a standing ovation and get an A in the class.</p>
      <p>And also wrote me a letter of recommondation for employment. Dr. D, thank you for all you do for people and I am so glad to have you has a friend and mentor. THANK YOU! <RiDoubleQuotesR /></p>
      <p>-James</p>
      </Testimonial>
      <Testimonial>
        <p><RiDoubleQuotesL />  Lessons I have learned from business classes and ESF, is the nooks and crannies one would not normally think about being involved in business. There are many laws and federal and state guidelines to running a business successfully. There are contracts and policies that businesses agree to, to adhere to those laws and guidelines. I believe the legal aspects of business are perhaps the most important part of a business to keep government off your back. Having all the I&apos;s dotted and T&apos;s crossed makes for way less stress and headaches in business so other things can be focused on to make the business prosper.</p>
        <p>ESF Training added business knowledge and has also given me new insight into my personal change as an incarcerated adult. I understand that its more than just someone&apos;s personal life or incarceration period that has procedures. It is pretty much everything which makes me feel not so targeted by the system. These ESF courses are mind openers is what I like to call them. Mind opening gives us fresh and more realistic perspective on what&apos;s really happening in the world.</p>
        <p>My action plan is to get released and use the practical knowledge in these courses to help me run the family business of all the rental properties we own. I hope to bring fresh knowledge to the table in the business to help everything run more efficiently and effectively. I have always had passion for my family ran business and a desire to be the ingredient that makes it expand to new heights. I learned through practical knowledge and getting to know Doctor D that this is all in the realm of probability.</p>
        <p>Life is amazing with the knowledge that is free and up for grabs. Coming to MTC and working with ESF and Doctor D has given me knowledge that is of high relevance of my life and future aspirations, thank you for the opportunity to share my new insight.<RiDoubleQuotesR /></p>
        <p>-Ryan</p>
      </Testimonial>
      <Testimonial>
        <p><RiDoubleQuotesL />Because of ESF classes I will stand up for myself and show that anyone can make a mistake and grow from it. Most people know you can learn and change from the mistakes you made, especially if you work hard to prove yourself to them.</p>
        <p>-Howard</p>
      </Testimonial>
    </>
  );
};

export default Testimonials;
