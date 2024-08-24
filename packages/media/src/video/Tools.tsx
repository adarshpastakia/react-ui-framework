/*
 * React Fabric
 * @version: 1.0.0
 *
 *
 * The MIT License (MIT)
 * Copyright (c) 2024 Adarsh Pastakia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
 * TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { Button, CoreIcons, Divider, Footer, HotKey } from "@react-fabric/core";
import { useMemo } from "react";
import { MiniSlider } from "../sliders/MiniSlider";
import { TimeSlider } from "../sliders/TimeSlider";
import { useVideoContext } from "./Context";

export const Tools = () => {
  const { videoRef, state, fitToSize, fitToView, toggleFit } =
    useVideoContext();

  const volumeIcon = useMemo(() => {
    if (state.volume === 0) return CoreIcons.mediaVolume0;

    if (state.volume <= 0.4) return CoreIcons.mediaVolume1;
    if (state.volume <= 0.7) return CoreIcons.mediaVolume2;

    return CoreIcons.mediaVolume3;
  }, [state.volume]);

  const handlers = useMemo(
    () => ({
      toggleFit: () => toggleFit(),
      togglePlay: async () =>
        videoRef.current?.paused
          ? await videoRef.current?.play()
          : videoRef.current?.pause(),
      mute: () =>
        videoRef.current &&
        (videoRef.current.volume = videoRef.current.volume === 0 ? 0.5 : 0),
      volumeUp: () =>
        videoRef.current &&
        videoRef.current.volume < 1 &&
        (videoRef.current.volume = Math.min(1, videoRef.current.volume + 0.1)),
      volumeDown: () =>
        videoRef.current &&
        videoRef.current.volume > 0 &&
        (videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1)),
      jumpDown: () =>
        videoRef.current &&
        videoRef.current.currentTime > 0 &&
        (videoRef.current.currentTime -= 1),
      jumpUp: () => videoRef.current && (videoRef.current.currentTime += 1),
      seekDown: () =>
        videoRef.current &&
        videoRef.current.currentTime > 0 &&
        (videoRef.current.currentTime -= 0.165),
      seekUp: () => videoRef.current && (videoRef.current.currentTime += 0.165),
      speedDown: () =>
        videoRef.current &&
        videoRef.current.playbackRate > 0 &&
        (videoRef.current.playbackRate -= 0.5),
      speedUp: () =>
        videoRef.current &&
        videoRef.current.playbackRate < 5 &&
        (videoRef.current.playbackRate += 0.5),
    }),
    [],
  );

  return (
    <Footer flex className="gap-1 bg-tint-50">
      <HotKey global keyCombo="space" handler={handlers.togglePlay} />
      <HotKey global keyCombo="f" handler={handlers.toggleFit} />
      <HotKey global keyCombo="x" handler={handlers.mute} />
      <HotKey global keyCombo="," handler={handlers.jumpDown} />
      <HotKey global keyCombo="." handler={handlers.jumpUp} />
      <HotKey global keyCombo="-" handler={handlers.volumeDown} />
      <HotKey global keyCombo="=" handler={handlers.volumeUp} />
      <HotKey global keyCombo="shift+{" handler={handlers.speedDown} />
      <HotKey global keyCombo="shift+}" handler={handlers.speedUp} />
      <HotKey global keyCombo="shift+<" handler={handlers.seekDown} />
      <HotKey global keyCombo="shift+>" handler={handlers.seekUp} />
      <Button
        variant="link"
        aria-label="togglePlay"
        onClick={handlers.togglePlay}
        disabled={!state.isLoaded}
        icon={state.isPlaying ? CoreIcons.mediaPause : CoreIcons.mediaPlay}
      />
      <MiniSlider
        icon={volumeIcon}
        value={state.volume}
        max={1}
        onClick={() => {
          const v = state.volume === 1 ? 0 : state.volume >= 0.5 ? 1 : 0.5;
          videoRef.current && (videoRef.current.volume = v);
        }}
        onChange={(v) => videoRef.current && (videoRef.current.volume = v)}
      />
      <MiniSlider
        icon={`${state.speed.toFixed(1)}x`}
        value={state.speed}
        max={5}
        min={0.1}
        textIcon
        onClick={() => {
          const v =
            state.speed >= 2
              ? 0.5
              : state.speed >= 1.5
                ? 2
                : state.speed >= 1
                  ? 1.5
                  : state.volume >= 0.5
                    ? 1
                    : 0.5;
          videoRef.current && (videoRef.current.playbackRate = v);
        }}
        onChange={(v) =>
          videoRef.current && (videoRef.current.playbackRate = v)
        }
      />
      <Divider vertical />
      <Button
        variant="link"
        aria-label="fit-to-view"
        onClick={fitToView}
        disabled={!state.isLoaded}
        icon={CoreIcons.mediaFitToView}
      />
      <Button
        variant="link"
        aria-label="fit-to-size"
        onClick={fitToSize}
        disabled={!state.isLoaded}
        icon={CoreIcons.mediaAspect}
      />
      <Divider vertical />
      <TimeSlider
        time={state.time}
        duration={state.duration}
        onChange={(time) =>
          videoRef.current && (videoRef.current.currentTime = time)
        }
      />
    </Footer>
  );
};
