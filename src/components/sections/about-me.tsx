import Image from "next/image";

import YehiaFullPose from "/public/images/Full Pose.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={YehiaFullPose}
              alt="Full pose of Yehia"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            My Journey: Gives you the insights you want from data 😁
          </Typography>
          <Typography>
          In my academic journey, I joined the FWD initiative, where I delved into data analysis.
          Despite the initial challenges, I mastered data manipulation and gained valuable insights.
          Successfully completing all the projects was a rewarding achievement. 🔥
          </Typography>
          <Typography>
          Continuing my journey, I successfully completed all three FWD data analysis certificates.
          Additionally, I participated in a Business Intelligence (BI) training program hosted by ITI.
          </Typography>
          <Typography>
          I learned from ITI this
          • Completed a one-month BI internship at ITI where I attended meetings and completed tasks related to DBMS
            and SQL server using Microsoft SQL management studio.
          • Developed skills in creating and manipulating databases, cleaning data, and visualizing data using Power BI.
          • Worked on the Bike-share database to analyze popular stations, time of travel, trips, trip duration, and user
            info.
          • Gained experience in using SQL queries to retrieve data that fits business KPIs

          This was my first professional experience where I learned alot from it.
          </Typography>
          <Typography>
          Today I am working on myself to master all I can in the data science field 
          recently studying DWH and big data also learning Machine learning.
          </Typography>
          <Typography>
          </Typography>
          <Typography>Finally, some quick bits about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.E. in Computer Systems and Engineering
              </Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out and say hello! I promise I don&apos;t bite 😉
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
