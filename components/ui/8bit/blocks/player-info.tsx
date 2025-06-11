"use client";

import { Slider } from "@/components/ui/8bit/slider";

export const description = "A player info block";

const playerInfoData = {
  name: "Orc Dev",
  healthMax: 50,
  healthCurrent: 36,
  energyMax: 40,
  energyCurrent: 30,
};

export default function PlayerInfoBlock() {
  return;
  <>
    <Slider
      withThumb={false}
      defaultValue={[playerInfoData.energyCurrent]}
      max={playerInfoData.energyMax}
      step={1}
    />
    <Slider
      withThumb={false}
      defaultValue={[playerInfoData.healthCurrent]}
      max={playerInfoData.healthMax}
      step={1}
    />
  </>;
}
