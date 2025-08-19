'use client';

import Image from 'next/image';

interface IHeroCardsProps {
  onBodyRecordClick: () => void;
  onExerciseClick: () => void;
  onDiaryClick: () => void;
}

export default function HeroCards({
  onBodyRecordClick,
  onExerciseClick,
  onDiaryClick
}: IHeroCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
      <div
        onClick={onBodyRecordClick}
        className="relative bg-[#FFCC21] overflow-hidden h-64 cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center"
      >
        <div className="size-[80%] relative flex items-center justify-center">
          <Image
            src="/images/record/my-record-1.jpg"
            alt="Body Record"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
            <span className="text-[#FFCC21] text-2xl font-bold">BODY RECORD</span>
            <p className="text-white/90 text-sm bg-orange-500 px-3 py-1 inline-block w-fit">
              自分のカラダの記録
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={onExerciseClick}
        className="relative bg-[#FFCC21] overflow-hidden h-64 cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center"
      >
        <div className="size-[80%] relative flex items-center justify-center">
          <Image
            src="/images/record/my-record-2.jpg"
            alt="Body Record"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
            <span className="text-[#FFCC21] text-2xl font-bold">MY EXERCISE</span>
            <p className="text-white/90 text-sm bg-orange-500 px-3 py-1 inline-block w-fit">
              自分の運動の記録
            </p>
          </div>
        </div>
      </div>

      <div
        onClick={onDiaryClick}
        className="relative bg-[#FFCC21] overflow-hidden h-64 cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center justify-center"
      >
        <div className="size-[80%] relative flex items-center justify-center">
          <Image
            src="/images/record/my-record-3.jpg"
            alt="Body Record"
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4">
            <span className="text-[#FFCC21] text-2xl font-bold">MY DIARY</span>
            <p className="text-white/90 text-sm bg-orange-500 px-3 py-1 inline-block w-fit">
            自分の日記
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
