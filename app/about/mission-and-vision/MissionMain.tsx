import React from 'react'

const MissionMain = () => {
  return (
    <div className="p-10 font-sans font-light flex flex-col gap-10">
        <h2 className="text-5xl text-black">Overview</h2>
        <p className="text-2xl text-justify text-gray-800 tracking-tight leading-tight">
        At Shiblee Sheikhupura, four guiding vision statements chart our development.

        </p>
        <div className="flex flex-col xl:flex-row gap-5">
            <div className="xl:w-1/2 p-8 flex flex-col gap-3 rounded-3xl border-[1px] border-gray-300">
            <h5 className="text-3xl text-black">1. Accessible education for all
            </h5>
            <p className="text-xl text-gray-800 text-justify">
            We believe that every child regardless of their socio-economic status has the right to quality education. Through our flexible fee payment policies and various scholarships we eliminate financial barriers to entry and ensure that no child is left behind.

            </p>
            </div>
            <div className="xl:w-1/2 p-8 flex flex-col gap-3 rounded-3xl border-[1px] border-gray-300">
            <h5 className="text-3xl text-black">2. Education as a means of social upliftment

            </h5>
            <p className="text-xl text-gray-800 text-justify">
            Education is the most powerful tool to break cycles of poverty and create new opportunities. We aim to empower students with the skills and knowledge needed to contribute meaningfully to their families and communities.


            </p>
            </div>

        </div>
        <div className="flex -mt-5 flex-col xl:flex-row gap-5">
            <div className="xl:w-1/3 p-8 flex flex-col gap-3 rounded-3xl border-[1px] border-gray-300">
            <h5 className="text-3xl text-black">3. A balance of extracurricular and academic development

            </h5>
            <p className="text-xl text-gray-800 text-justify">
            A holistic approach to student development is centered around improving critical thinking and creativity. Our extracurricular department encourages students to interact with arts, sports, community service, debating, MUN and more. 


            </p>
            </div>
            <div className="xl:w-1/3 p-8 flex flex-col gap-3 rounded-3xl border-[1px] border-gray-300">
            <h5 className="text-3xl text-black">4. Reducing stigmas around women obtaining education


            </h5>
            <p className="text-xl text-gray-800 text-justify">
            We are committed to challenging cultural norms and addressing prejudices that hinder girls&apos; access to education. By creating a safe and inclusive environment, we encourage female students to thrive academically and personally.



            </p>
            </div>
            <div className="xl:w-1/3 p-8 flex flex-col gap-3 rounded-3xl border-[1px] border-gray-300">
            <h5 className="text-3xl text-black">5. Promoting a bias-free form of education


            </h5>
            <p className="text-xl text-gray-800 text-justify">
            Ethical education starts with unbiased teaching. Through teacher training and professional development modules and sessions taking place regularly we ensure that our faculty upholds the principles of equality and fairness.



            </p>
            </div>

        </div>
    </div>
  )
}

export default MissionMain