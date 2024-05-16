import Image from "next/image";

import RamadanFullPose from "/public/images/ramadan-full-pose.jpg";
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
              src={RamadanFullPose}
              alt="Full pose of Ramadan"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            My Journey: Spreading Smiles Through Frontend Engineering
          </Typography>
          <Typography>
            I&apos;ve got a story to share about how I went from making memes to
            crafting delightful frontend experiences.
          </Typography>
          <Typography>
            Back in my computer engineering days, I found joy in making people
            laugh with memes. But as I dove deeper into the world of web
            development, I discovered a new way to spread happiness - through
            frontend engineering.
          </Typography>
          <Typography>
            With a keen eye for detail and a passion for creating
            easy-to-understand content, I found my calling. Building sleek
            interfaces and user-friendly experiences became my way of bringing
            smiles to people&apos;s faces.
          </Typography>
          <Typography>
            Sharing my projects with friends became just as fulfilling as
            sharing a hilarious meme. Their laughter and excitement fueled my
            passion even more.
          </Typography>
          <Typography>
            Today, as a frontend engineer, I&apos;m on a mission to make the web a
            happier place, one delightful experience at a time. So join me on
            this journey of learning, laughter, and spreading joy through code.
            Together, let&apos;s create something that leaves everyone smiling.
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
