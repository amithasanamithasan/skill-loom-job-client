import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabs.css"; // custom styling
import JobCard from "./JobCard";

const TabsCategory = () => {
  return (
    <div className="container px-6 py-10 mx-auto mb-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
        Browse Jobs by Category
      </h2>
 <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 font-sans '>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      <Tabs>
        {/* Tab List */}
        <div className="flex justify-center">
          <TabList className="flex flex-wrap gap-3 justify-center items-center">
            <Tab>IT & Software</Tab>
            <Tab>Design</Tab>
            <Tab>Marketing</Tab>
            <Tab>Finance</Tab>
            <Tab>Sales</Tab>
            <Tab>Healthcare</Tab>
            <Tab>Education</Tab>
            <Tab>Engineering</Tab>
          </TabList>
        </div>

        {/* Tab Panels */}
        <div className="mt-8">
          <TabPanel>
          <JobCard/>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight mb-4">Design Jobs</h3>
            <ul className="space-y-2">
              <li>UI/UX Designer</li>
              <li>Graphic Designer</li>
              <li>Product Designer</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight  mb-4">Marketing Jobs</h3>
            <ul className="space-y-2">
              <li>SEO Specialist</li>
              <li>Content Writer</li>
              <li>Social Media Manager</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight  mb-4">Finance Jobs</h3>
            <ul className="space-y-2">
              <li>Accountant</li>
              <li>Financial Analyst</li>
              <li>Auditor</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight  mb-4">Sales Jobs</h3>
            <ul className="space-y-2">
              <li>Sales Executive</li>
              <li>Business Development</li>
              <li>Client Manager</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight  mb-4">Healthcare Jobs</h3>
            <ul className="space-y-2">
              <li>Nurse</li>
              <li>Doctor</li>
              <li>Medical Assistant</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight mb-4">Education Jobs</h3>
            <ul className="space-y-2">
              <li>Teacher</li>
              <li>Professor</li>
              <li>Trainer</li>
            </ul>
          </TabPanel>
          <TabPanel>
            <h3 className="text-xl font-extralight  mb-4">Engineering Jobs</h3>
            <ul className="space-y-2">
              <li>Civil Engineer</li>
              <li>Mechanical Engineer</li>
              <li>Electrical Engineer</li>
            </ul>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsCategory;
