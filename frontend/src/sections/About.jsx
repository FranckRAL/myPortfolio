
import React, { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { skills, tabsAbout } from "../assets/constant/constant";
import { SkillsItem } from "../components/SkillsItem";

export const About = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = tabsAbout

  return (
    <section className="padding">
      <SectionTitle title="About me" />
      <div className="flex flex-col md:flex-row gap-10 justify-center poppins-regular text-white">
        <div className="w-full max-w-md mx-auto ">
          {/* Tab Navigation */}
          <div className="flex mb-5 border-b border-slate-500 transition-all duration-300 ease-in-out">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2 text-center ${activeTab === tab.id
                    ? "border-b-2 border-yellow-500 text-yellow-500"
                    : "text-white hover:text-yellow-500 hover:border-yellow-500"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4  h-full  rounded-b-md transition-all duration-300 ease-in-out">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id} className="text-white">
                    {tab.id === "tab1" && (
                      <p>
                        I'm a web developer with a passion for creating dynamic
                        and responsive web applications. My goal is to deliver
                        high-quality code and innovative solutions that meet the
                        needs of my clients.
                      </p>
                    )}
                    {tab.id === "tab2" && (
                      <ul className="list-disc pl-5">
                        <li>Bachelor's Degree in Computer Science</li>
                        <li>Master's Degree in Software Engineering</li>
                      </ul>
                    )}
                    {tab.id === "tab3" && (
                      <ul className="list-image-none pl-5">
                        {skills.map((skill, index) => (
                          <li key={index} className="my-3">
                            <SkillsItem skillName={skill.name} value={skill.value}/>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
        <div className="mt-10 max-w-2xl text-center">
          
          <img src="https://yavuzceliker.github.io/sample-images/image-300.jpg" alt=""className="object-contain rounded" />

        </div>
      </div>
    </section>
  );
};


