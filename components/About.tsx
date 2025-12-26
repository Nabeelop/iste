import Image from "next/image";

export default function About() {
    return <section id="about" className="py-24 px-6">
    <div className="flex flex-col gap-20 max-w-8xl mx-20 py-15">
      <div className="flex items-center justify-start gap-16">
        <div className="flex flex-col gap-4 w-[62%]">
            <div className="text-4xl font-bold font-display text-white mb-4 "><span className="">ISTE</span></div>
            <p className="text-xl text-muted border-l-4 border-primary pl-4">ISTE NITK is the student chapter of the Indian Society for Technical Education at the National Institute of Technology Karnataka.
                We are dedicated to fostering technical knowledge, innovation, and professional development among students through various activities, workshops, and events.</p>
        </div>
        <div>
          <Image src="/download (1).png" alt="ISTE" width={450} height={450} className="" />
        </div>
      </div>
  
      <div className="flex items-center justify-start gap-16">
        <Image src="/SI_event.jpeg" alt="Social Initiatives" width={600} height={600} className="w-[38%]" /> 
        <div className="flex flex-col gap-4 w-[62%]">
            <div className="text-4xl font-bold font-display text-white mb-4"><span className="">Social Initiatives</span></div>
            <p className="text-base text-muted border-l-4 border-primary pl-4">Since 2017, at Social Initiatives ISTE NITK, our motive has been to nurture a socially inclusive environment in which students of NITK develop a healthy open-minded attitude and awareness towards various social issues, like inequality, indiscrimination, mental health issues etc., and thereby inculcate a cooperative and caring nature towards everyone else.
      To bring about these, we regularly organize events and workshops related to social awareness in NITK and have received a positive response from the students. Some of the activities are open mic events, group discussions on social topics and interviews with people to share their views and opinions on a particular topic. We aim to continue organizing such events and make a positive contribution to society.</p>
        </div>
      </div>
  
      <div className="flex items-center justify-start gap-16 w-full">
        <div className="flex flex-col gap-4 w-[62%]">
            <div className="text-4xl font-bold font-display text-white mb-4"><span className="">ISTE</span> <span className="text-pink-500">SHE</span></div>
            <p className="text-base text-muted border-l-4 border-pink-500 pl-4">The Society for Her Empowerment (SHE) is a women's group that focuses on helping female students in ISTE NITK advance in their careers in engineering, business, and everything beyond.
                 This group is dedicated to empowering women and providing them with the tools and resources they need to succeed in any environment. 
                 Through a plethora of events, we aim to create valuable and career-defining milestones for women and support their cause 
                 in pursuing a career of their choice.</p>
        </div>
        <Image src="/she_group_pic.jpeg" alt="SHE ISTE" width={600} height={600} className="w-[38%]"/>
      </div>
  
    </div> 
  </section>
  
}