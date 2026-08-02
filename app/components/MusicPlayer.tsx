"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Music2,
  Minimize2,
  Maximize2,
} from "lucide-react";

const playlist = [
  "/music/olympia-intro.mp3",
  "/music/cyber-vision.mp3",
  "/music/digital-horizon.mp3",
  "/music/dream-escape.mp3",
  "/music/final-victory.mp3",
  "/music/future-bass.mp3",
  "/music/infinity.mp3",
  "/music/moonlight-drive.mp3",
  "/music/neon-pulse.mp3",
  "/music/night-trading.mp3",
  "/music/quantum.mp3",
  "/music/skyline.mp3",
];

const titles = [
  "Olympia Intro",
  "Cyber Vision",
  "Digital Horizon",
  "Dream Escape",
  "Final Victory",
  "Future Bass",
  "Infinity",
  "Moonlight Drive",
  "Neon Pulse",
  "Night Trading",
  "Quantum",
  "Skyline",
];

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement>(null);

  const playerRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);

  const [track, setTrack] = useState(0);

  const [volume, setVolume] = useState(0.4);

  const [progress, setProgress] = useState(0);

  const [duration, setDuration] = useState(0);

  const [miniMode, setMiniMode] = useState(false);

  const [position, setPosition] = useState({
    x: 20,
    y: 120,
  });

  const [dragging, setDragging] = useState(false);

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = playlist[track];

    if (playing) {
      audioRef.current.play().catch(() => {});
    }
  }, [track]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  const next = () => {
    setTrack((track + 1) % playlist.length);
  };

  const prev = () => {
    setTrack(track === 0 ? playlist.length - 1 : track - 1);
  };

  const updateProgress = () => {
    if (!audioRef.current) return;

    setProgress(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = Number(e.target.value);
    setProgress(Number(e.target.value));
  };

  const formatTime = (time: number) => {
    if (!time) return "0:00";

    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);

    return `${m}:${s.toString().padStart(2, "0")}`;
  };/* ---------- Drag (Desktop + Mobile) ---------- */

  const startDrag = (clientX: number, clientY: number) => {
    setDragging(true);

    dragOffset.current = {
      x: clientX - position.x,
      y: clientY - position.y,
    };
  };

  const moveDrag = (clientX: number, clientY: number) => {
    if (!dragging) return;

    setPosition({
      x: clientX - dragOffset.current.x,
      y: clientY - dragOffset.current.y,
    });
  };

  const stopDrag = () => {
    setDragging(false);
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) =>
      moveDrag(e.clientX, e.clientY);

    const mouseUp = () => stopDrag();

    const touchMove = (e: TouchEvent) => {
      if (!e.touches.length) return;

      moveDrag(
        e.touches[0].clientX,
        e.touches[0].clientY
      );
    };

    const touchEnd = () => stopDrag();

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchEnd);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);

      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [dragging]);

  /* بعد از ۳ ثانیه کوچک شود */

  useEffect(() => {
    if (!playing) return;

    const timer = setTimeout(() => {
      setMiniMode(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [playing]);
  useEffect(() => {
    if (miniMode) return;
    const handlePointer = (e: MouseEvent | TouchEvent) => {
      if (playerRef.current && !playerRef.current.contains(e.target as Node)) {
        setMiniMode(true);
      }
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("touchstart", handlePointer);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("touchstart", handlePointer);
    };
  }, [miniMode]);

/* ---------- Mini Player ---------- */

  if (miniMode) {
    return (
      <>
        <audio
          ref={audioRef}
          onTimeUpdate={updateProgress}
          onLoadedMetadata={updateProgress}
          onEnded={next}
        />

        <div
          style={{
            left: position.x,
            top: position.y,
          }}
          className="fixed z-[9999]"
        >
          <div
            onMouseDown={(e) =>
              startDrag(e.clientX, e.clientY)
            }
            onTouchStart={(e) =>
              startDrag(
                e.touches[0].clientX,
                e.touches[0].clientY
              )
            }
            className="
              relative
              w-16
              h-16
              rounded-full
              bg-white/10
              backdrop-blur-2xl
              border
              border-orange-400/20
              shadow-[0_0_35px_rgba(255,140,0,.45)]
              flex
              items-center
              justify-center
              cursor-move
            "
          >
            {/* حلقه نورانی */}

            <div
              className={`
                absolute
                inset-0
                rounded-full
                border-2
                border-orange-400
                ${
                  playing
                    ? "animate-spin"
                    : ""
                }
              `}
            />

            {/* هاله */}

            <div
              className={`
                absolute
                -inset-3
                rounded-full
                bg-orange-400/20
                blur-xl
                ${
                  playing
                    ? "animate-pulse"
                    : ""
                }
              `}
            />

            <button
              onClick={() =>
                setMiniMode(false)
              }
              className="
                relative
                z-10
                text-white
              "
            >
              {playing ? (
                <Pause size={28} />
              ) : (
                <Play
                  size={28}
                  className="ml-1"
                />
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={updateProgress}
        onEnded={next}
      />

      <div
        ref={playerRef}
        style={{
          left: position.x,
          top: position.y,
        }}
        className="fixed z-[9999]"
      >
        <div
          onMouseDown={(e) =>
            startDrag(e.clientX, e.clientY)
          }
          onTouchStart={(e) =>
            startDrag(
              e.touches[0].clientX,
              e.touches[0].clientY
            )
          }
          className="
            relative
            w-[340px]
            rounded-[34px]
            overflow-hidden
            cursor-move
            border
            border-orange-400/20
            bg-white/10
            backdrop-blur-3xl
            shadow-[0_0_60px_rgba(255,140,0,.35)]
            transition-all
            duration-500
          "
        >

          {/* نور زمینه */}

          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-300/5" />

          <div className="relative p-6">

            {/* Header */}

            <div className="flex items-center justify-between mb-5">

              <div className="flex items-center gap-4">

                <div className="relative">

                  <div
                    className={`
                      absolute
                      -inset-3
                      rounded-full
                      border-2
                      border-orange-400
                      ${
                        playing
                          ? "animate-spin"
                          : ""
                      }
                    `}
                  />

                  <div
                    className={`
                      absolute
                      -inset-5
                      rounded-full
                      bg-orange-400/20
                      blur-xl
                      ${
                        playing
                          ? "animate-pulse"
                          : ""
                      }
                    `}
                  />

                  <button
                    onClick={toggle}
                    className="
                      relative
                      z-10
                      w-16
                      h-16
                      rounded-full
                      bg-orange-500
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-xl
                    "
                  >
                    {playing ? (
                      <Pause size={30}/>
                    ) : (
                      <Play
                        size={30}
                        className="ml-1"
                      />
                    )}
                  </button>

                </div>

                <div>

                  <p className="text-orange-300 text-xs">
                    در حال پخش
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    {titles[track]}
                  </h3>

                </div>

              </div>

              <button
                onClick={() =>
                  setMiniMode(true)
                }
                className="text-orange-300 hover:text-white transition"
              >
                <Minimize2 />
              </button>

            </div>
            {/* Equalizer */}

            <div className="flex justify-center items-end gap-1 h-14 mb-6">

              {[18, 28, 22, 35, 16, 30, 24, 38].map((h, i) => (

                <div
                  key={i}
                  className={`
                    w-[4px]
                    rounded-full
                    bg-orange-400
                    transition-all
                    duration-300
                    ${
                      playing
                        ? "animate-pulse"
                        : ""
                    }
                  `}
                  style={{
                    height: `${h}px`,
                    animationDelay: `${i * 0.12}s`,
                  }}
                />

              ))}

            </div>

            {/* Progress */}

            <div className="mb-6">

              <input
                type="range"
                min={0}
                max={duration || 0}
                value={progress}
                onChange={seek}
                className="
                  w-full
                  accent-orange-500
                  cursor-pointer
                "
              />

              <div className="flex justify-between text-xs text-gray-300 mt-2">

                <span>
                  {formatTime(progress)}
                </span>

                <span>
                  {formatTime(duration)}
                </span>

              </div>

            </div>

            {/* Controls */}

            <div className="flex justify-center items-center gap-8 mb-6">

              <button
                onClick={prev}
                className="
                  text-white
                  hover:text-orange-400
                  hover:scale-125
                  transition
                "
              >
                <SkipBack size={30}/>
              </button>

              <button
                onClick={toggle}
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-orange-500
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-lg
                  hover:scale-110
                  transition
                "
              >
                {playing ? (
                  <Pause size={28}/>
                ) : (
                  <Play
                    size={28}
                    className="ml-1"
                  />
                )}
              </button>

              <button
                onClick={next}
                className="
                  text-white
                  hover:text-orange-400
                  hover:scale-125
                  transition
                "
              >
                <SkipForward size={30}/>
              </button>

            </div>

            {/* Volume */}

            <div className="flex items-center gap-3 mb-4">

              <Volume2
                size={18}
                className="text-orange-300"
              />

              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) =>
                  setVolume(Number(e.target.value))
                }
                className="w-full accent-orange-500"
              />

            </div>
            {/* اطلاعات پایین پلیر */}

            <div className="mt-5 flex items-center justify-between">

              <div className="flex items-center gap-2 text-xs text-gray-400">

                <Music2 size={14} />

                <span>
                  موزیک {track + 1} از {playlist.length}
                </span>

              </div>

              <div
                className={`
                  flex
                  items-center
                  gap-2
                  text-xs
                  ${
                    playing
                      ? "text-orange-400"
                      : "text-gray-500"
                  }
                `}
              >
                <div
                  className={`
                    w-2
                    h-2
                    rounded-full
                    bg-orange-400
                    ${
                      playing
                        ? "animate-pulse"
                        : ""
                    }
                  `}
                />

                <span>
                  {playing
                    ? "در حال پخش"
                    : "توقف"}
                </span>

              </div>

            </div>

          </div>

          {/* Glow پایین پلیر */}

          <div
            className={`
              absolute
              left-1/2
              -translate-x-1/2
              -bottom-12
              w-72
              h-24
              rounded-full
              bg-orange-500/25
              blur-3xl
              ${
                playing
                  ? "animate-pulse"
                  : "opacity-40"
              }
            `}
          />

        </div>

      </div></>
  );
}