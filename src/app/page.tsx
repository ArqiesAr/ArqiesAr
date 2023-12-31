"use client";
import Image from 'next/image'
import logo from './logo.png'
import TextTransition, { presets } from 'react-text-transition';
import { motion } from 'framer-motion';
import React from 'react';
import youtube from './images/youtube-symbol1.png'
import dc from './images/dc.png'
import git from './images/git.png'
import twit from './images/Twit.png'
import mail from './images/mail.png'
import Iframe from 'react-iframe'
import Hire from './hires'

const TEXTS = ['Create', 'Code', 'Design'];


export default function Home() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      
      <div className='maindiv scrollbar' id='scrollbar' style={{minHeight:'100%', minWidth: '100%'}}>

  <motion.div className='bigtext flex p-0' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .2
    }
  },
}}>


        <motion.div className='bigtext flex p-0' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: .5
      
    }
  },
}}>

  <h1 className='text'>Let&apos;s </h1> <TextTransition className='animatedText' delay={3} springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
 </motion.div>

<motion.div className='profile p-1' initial="hidden" animate="visible" variants={{
  hidden: {
    scale: .5,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6
    }
  },
}}>



          <div className='imgname '>
             <Image alt='alternate text' src={logo} className='logo'></Image>
            <ul className='nameandsurname'> <h1 className='name'>Arqies</h1> <h4 className='surname'>Ar</h4> </ul>
          </div>
          <div className='flex flex-col abmedia justify-center items-center'>
            <p className='aboutme'>Hi, I am Arqies Ar. I am a developer who lives in India. I am constantly learning new things and like working on new and unique projects, while improving and expanding my knowledge of different things.</p>

            <div className='flex gap-0'>
            <li className="flex flex-warp gap-5 medialist">
                <a className='rounded-full dlbtn ' href="https://downloads.arqies.com">Downloads</a>
                <a href="https://discord.arqies.com" target="_blank" ><Image alt='as' className="testcolor"src={dc} ></Image></a>
                
                <a href="mailto: contact@arqies.com" target="_blank" ><Image alt='as' className="testcolor"src={mail} ></Image></a>
                <a href="https://github.arqies.com" target="_blank" ><Image alt='as' className="testcolor"src={git} ></Image></a>
              
                <a href="https://twitter.arqies.com" target="_blank"><Image alt='as' className="testcolor"src={twit} ></Image></a>
                <a href="https://youtube.arqies.com" target="_blank"> <Image alt='as' className="testcolor"src={youtube} ></Image></a>
            </li>

            </div>
            </div>


        </motion.div>


            </motion.div>


      </div>


    </main>
  )
}
