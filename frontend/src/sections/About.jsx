import React, { useState } from "react";
import { SectionTitle } from "../components/SectionTitle";
import { skills, tabsAbout } from "../assets/constant/constant";
import { SkillsItem } from "../components/SkillsItem";

export const About = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tabAnimation, setTabAnimation] = useState(true);

  const tabs = tabsAbout;

  // Animation handler
  const handleTabChange = (id) => {
    if (id !== activeTab) {
      setTabAnimation(false);
      setTimeout(() => {
        setActiveTab(id);
        setTabAnimation(true);
      }, 200); // duration matches leave animation
    }
  };

  return (
    <section className="padding ">
      <SectionTitle title="About me" />
      <div className="flex flex-col md:flex-row gap-10 justify-center poppins-regular text-white w-[80vw] lg:w-[70vw] xl:w-[60vw]">
        <div className="w-full  mx-auto ">
          {/* Tab Navigation */}
          <div className="flex mb-5 border-b border-slate-500 transition-all duration-300 ease-in-out">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 py-2 text-center ${activeTab === tab.id
                    ? "border-b-2 border-yellow-500 text-yellow-500"
                    : "text-white hover:text-yellow-500 hover:border-yellow-500"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content with animation */}
          <div
            className={`
              p-4 h-full rounded-b-md transition-all duration-300 ease-in-out
              ${tabAnimation ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
            `}
          >
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
                            <SkillsItem skillName={skill.name} value={skill.value} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
            )}
          </div>
        </div>
        <div className="mt-10 w-2xl text-center">
          <img src="https://yavuzceliker.github.io/sample-images/image-300.jpg" alt="" className="object-contain rounded" />
        </div>
      </div>
    </section>
  );
};