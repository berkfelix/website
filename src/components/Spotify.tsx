import React from "react";
import { Text, SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";

const Spotify = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);
  return data ? (
    <Text
      as="a"
      href={data.isPlaying ? data.url : undefined}
      rounded="full"
      size="md"
      fontWeight="bold"
      p="2"
      display={"inline-block"}
      m="5 0"
      transition="color 300ms"
      _hover={data.isPlaying ? { color: "green.500" } : {}}
    >
      {data.isPlaying ? data.name : "Not Playing"}
      <FaSpotify className="text-green-700 inline ml-2" />
    </Text>
  ) : (
    <div className="flex flex-row items-center">
      <SkeletonText w="80px" m="2" noOfLines={1} />
      <SkeletonCircle w="15px" h="15px" my="2" />
    </div>
  );
};

export default Spotify;
