import React from "react";

import { Text, List } from "components";

const ColorsPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-roboto items-center justify-start mx-[auto] p-[61px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col items-start justify-start max-w-[840px] mx-[auto] w-[100%]">
          <Text
            className="text-gray_900 text-left tracking-[0.48px] w-[auto]"
            as="h1"
            variant="h1"
          >
            Colors
          </Text>
          <div className="flex md:flex-col flex-row gap-[24px] items-center justify-between mt-[57px] w-[100%]">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[49%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                <div className="bg-white_A700 border-[1px] border-gray_300 border-solid h-[120px] rounded-[4px] w-[120px]"></div>
                <Text
                  className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  background
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  FFFFFF
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                <div className="bg-gray_100 border-[1px] border-gray_300 border-solid h-[120px] rounded-[4px] w-[120px]"></div>
                <Text
                  className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  background
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  F4F5F9
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start sm:ml-[0] w-[100%]">
                <div className="bg-gray_101 border-[1px] border-gray_300 border-solid h-[120px] rounded-[4px] w-[120px]"></div>
                <Text
                  className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  background
                </Text>
                <Text
                  className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  F5F5F5
                </Text>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start pb-[23px] md:w-[100%] w-[15%]">
              <div className="bg-bluegray_400 border-[1px] border-gray_300 border-solid h-[120px] rounded-[4px] w-[120px]"></div>
              <Text
                className="text-gray_900 text-left tracking-[0.18px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Text
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[24px] grid grid-cols-2 md:w-[100%] w-[32%]"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-black_900 border-[1px] border-gray_300 border-solid h-[120px] rounded-[4px] w-[120px]"></div>
                <Text
                  className="mt-[7px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Text
                </Text>
                <Text
                  className="font-normal mt-[6px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  868889
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-[100%]">
                <div className="bg-indigo_400 h-[120px] rounded-[4px] w-[120px]"></div>
                <Text
                  className="mt-[7px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  link
                </Text>
                <Text
                  className="font-normal mt-[7px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  1A0DAB
                </Text>
              </div>
            </List>
          </div>
          <List
            className="sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-4 mt-[20px] w-[66%]"
            orientation="horizontal"
          >
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-gray_200 h-[120px] rounded-[4px] w-[120px]"></div>
              <Text
                className="mt-[7px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                as="h4"
                variant="h4"
              >
                Border
              </Text>
              <Text
                className="font-normal mt-[7px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                as="h5"
                variant="h5"
              >
                EBEBEB
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-light_green_300 h-[120px] rounded-[4px] w-[120px]"></div>
              <Text
                className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                as="h4"
                variant="h4"
              >
                primary
              </Text>
              <Text
                className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                as="h5"
                variant="h5"
              >
                AEDC81
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-light_green_A700 h-[120px] rounded-[4px] w-[120px]"></div>
              <Text
                className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                as="h4"
                variant="h4"
              >
                primary-dark
              </Text>
              <Text
                className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                as="h5"
                variant="h5"
              >
                6CC51D
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="bg-light_green_50 h-[120px] rounded-[4px] w-[120px]"></div>
              <Text
                className="mt-[9px] text-gray_900 text-left tracking-[0.18px] w-[auto]"
                as="h4"
                variant="h4"
              >
                primary-light
              </Text>
              <Text
                className="font-normal mt-[5px] not-italic text-gray_600 text-left tracking-[0.14px] w-[auto]"
                as="h5"
                variant="h5"
              >
                EBFFD7
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
