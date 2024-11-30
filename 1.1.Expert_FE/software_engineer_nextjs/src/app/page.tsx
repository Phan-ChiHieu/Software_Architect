'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import Image from 'next/image';

import ImgBackgrounds from 'public/images/landing/background_landing.avif';

interface TypeProps extends React.ComponentPropsWithoutRef<'div'> {
  description: string;
}

export default function Home(props: TypeProps) {
  const { className, ...restProps } = props;
  const [peding, setPending] = useState(false);

  return (
    <section>
      <div
        className={cn('bg-blue-500 py-2 px-4', className, {
          'bg-gray-500': peding,
        })}
      >
        <h1>Hello</h1>
        <button onClick={() => setPending((prev) => !prev)}>Chang color</button>

        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
        <div className="relative w-[1026px] h-[622px] mt-10">
          <Image
            src={ImgBackgrounds}
            alt="background"
            priority={true}
            fetchPriority="high"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={100}
            sizes="100vw"
          />
        </div>
        <hr />
      </div>
    </section>
  );
}
