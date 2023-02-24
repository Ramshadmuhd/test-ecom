import React from "react";

import { Text } from "components";
import { useNavigate } from "react-router-dom";

const TypographyPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex font-poppins items-start justify-start mx-[auto] p-[57px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start mb-[122px] md:ml-[0] ml-[22px] md:w-[100%] w-[66%]">
          <Text
            className="text-gray_900 text-left tracking-[0.48px] w-[auto]"
            as="h1"
            variant="h1"
          >
            Typography
          </Text>
          <div className="flex flex-row items-start justify-between mt-[55px] md:w-[100%] w-[78%]">
            <Text
              className="mt-[4px] text-gray_900 text-left tracking-[0.35px] w-[auto]"
              as="h2"
              variant="h2"
            >
              Poppins
            </Text>
            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Title Bold
              </Text>
              <Text
                className="font-normal not-italic text-gray_600 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                SemiBold - 15 / 20 / 25 / 30{" "}
              </Text>
            </div>
          </div>
          <div className="flex flex-row gap-[40px] items-start justify-end ml-[auto] mt-[39px] md:w-[100%] w-[54%]">
            <div className="flex flex-col gap-[8px] items-start justify-start w-[auto]">
              <Text
                className="font-normal not-italic text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Paragraph Regular
              </Text>
              <Text
                className="font-normal not-italic text-gray_600 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Regular - 15
              </Text>
            </div>
            <div className="flex flex-col gap-[6px] items-center justify-start w-[auto]">
              <Text
                className="font-medium text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Paragraph Medium
              </Text>
              <Text
                className="font-medium text-gray_600 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Medium - 10 / 12 / 15
              </Text>
            </div>
          </div>
          <div
            className="common-pointer flex flex-col items-start justify-start md:ml-[0] ml-[267px] mt-[36px] md:w-[100%] w-[auto]"
            onClick={() => navigate(-1)}
          >
            <Text
              className="font-medium text-gray_900 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Label
            </Text>
            <Text
              className="font-normal mt-[2px] not-italic text-gray_600 text-left w-[auto]"
              as="h5"
              variant="h5"
            >
              Medium - 12 / 15{" "}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypographyPage;
