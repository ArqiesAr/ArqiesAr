"use client";
import Image from 'next/image'
import logo from './logo.png'
import TextTransition, { presets } from 'react-text-transition';
import { motion } from 'framer-motion';
import React from 'react';
import youtube from './images/youtube-symbol1.png'
const TEXTS = ['Website?', 'Software?', 'Bot?' , 'Plugin?'];


export default function Hire(){

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

    return(
<div className='flex flex-col items-center justify-center gap-0'>

<div className='flex bigh'>

<h1 className='hiretext'>Need </h1> <h1 className='hiretext'>a</h1>  <TextTransition className='aniH' delay={3} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
</div>

<div className='flex gap-0'>
            <li className="flex flex-warp gap-5 medialist">
            <h1 className='txt-hir'>Let&apos;s Discuss:</h1>
                <a href="https://discord.arqies.com" target="_blank" ><Image alt='ase' className="testcolor"src={dc} ></Image></a>
                
                <a href="mailto: contact@arqies.com" target="_blank" ><Image alt='ase' className="testcolor"src={mail} ></Image></a>
              
                </li>

</div>

</div>

    )
}