import React from "react";
import { Text } from "@chakra-ui/react";
import { FaSpotify } from "react-icons/fa";
import useSWR from "swr";

const Spotify = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/test", fetcher);

  return (
    data && (
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
        {console.log(data)}
        {data.isPlaying ? data.name : "Not Playing"}
        <FaSpotify className="text-green-700 inline ml-2" />
      </Text>
    )
  );
};

export default Spotify;
