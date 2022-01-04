import { NextPage } from "next";
import Jailbird from "../../components/testimonials/Jailbird";
import Testimonial from "../../components/testimonials/Testimonial";

const Testimonials: NextPage = () => {
  return (
    <>
      <Jailbird />
      <Testimonial><p>This man Mr. Tom Davison is one of the most genuine people I have ever met. He was one of my instructors in college. He not only believes in people, he goes above and beyond what the job calls for. He takes his own personal time to research whatever someone needs, and gives special counceling on business ventures one might have.</p>
      <p>With the confidence this man put in me, I was able to do a complete thirty page marketing plan and create an overseas business plan, give a presentation in front of the class and receive a standing ovation and get an A in the class.</p>
      <p>And also wrote me a letter of recommondation for employment. Dr. D, thank you for all you do for people and I am so glad to have you has a friend and mentor. THANK YOU!</p>
      <p>-James</p>
      </Testimonial>
    </>
  );
};

export default Testimonials;
