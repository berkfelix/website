import React from "react";
import { Text, SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import { FaFileCode } from "react-icons/fa";
import useSWR from "swr";

const CodingStats = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("api/wakatime", fetcher);
  return data ? (
    <Text size="md" fontWeight="bold" p="2" display="block" m="5 0">
      Daily Coding Time:{" "}
      <Text
        transition="color 300ms"
        display="inline"
        _hover={{ color: "teal.500" }}
      >
        {data.daily_coding_time}
      </Text>
      <FaFileCode className="text-teal-700 inline ml-2" />
    </Text>
  ) : (
    <div className="flex flex-row items-center">
      <SkeletonText w="80px" m="2" noOfLines={1} />
      <SkeletonCircle w="15px" h="15px" my="2" />
    </div>
  );
};

export default CodingStats;
