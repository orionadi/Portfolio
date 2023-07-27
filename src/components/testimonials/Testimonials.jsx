import React from 'react'
import './testimonials.css'
// import {BsFillPatchCheckFill} from 'react-icons/bs'
import AVTR1 from '../../assets/avatar1.png'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.png'
import AVTR5 from '../../assets/avatar5.png'
import AVTR6 from '../../assets/avatar6.png'
import AVTR7 from '../../assets/avatar7.png'
import AVTR8 from '../../assets/avatar8.png'
import AVTR9 from '../../assets/avatar9.jpeg'
import AVTR10 from '../../assets/avatar10.png'
import AVTR11 from '../../assets/avatar11.png'
import AVTR12 from '../../assets/avatar12.png'

import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// // import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// // import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

// import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


const data = [
  {
  avatar: AVTR1,
  name: 'CSS -HackerRank',
  link: 'https://www.hackerrank.com/certificates/c36d31d8dca4',
  review: 'A comprehensive CSS course that covered a wide range of topics, including the basics of CSS, flexbox and grid layouts for responsive design, transitions and animations to add dynamic effects, and media queries to create responsive web pages for different devices.'
  },
  {
  avatar: AVTR2,
  name: 'Java -HackerRank',
  link: 'https://www.hackerrank.com/certificates/d11b9466868a',
  review: 'During my Java learning journey, I covered the fundamentals of the language, including object-oriented programming concepts, multithreading to handle concurrent tasks efficiently, and data structures and algorithms for solving complex problems effectively.'
  },
  {
    avatar: AVTR7,
    name: 'JavaScript -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-CXGFHB8V',
    review: 'It covered the basics to advanced concepts like hoisting, prototypes, and closures to understand the language\'s behavior deeply. Additionally, I explored DOM manipulations and event handling to create interactive and dynamic web pages, gaining a comprehensive understanding of JavaScript for web development.'
  },
  {
  avatar: AVTR3,
  name: 'JavaScript DSA -FreeCodeCamp',
  link: 'https://www.freecodecamp.org/certification/fccbd4aec7b-d6b9-4418-b6de-41c66c2f0790/javascript-algorithms-and-data-structures',
  review: 'I have honed my problem-solving skills in Data Structures and Algorithms using JavaScript. Through this learning journey, I gained a deep understanding of JavaScript\'s capabilities in solving complex challenges efficiently.'
  },
  {
  avatar: AVTR4,
  name: 'React & Redux -SoloLearn',
  link: 'https://www.sololearn.com/certificates/CT-CAEJQHWM',
  review: 'I extensively covered React concepts such as components, props, life cycle methods, event handling, and various types of hooks. Furthermore, I acquired a strong understanding of Redux, including state management, actions, and reducers, empowering me to build scalable and efficient web applications.'
  },
  {
    avatar: AVTR5,
    name: 'SQL -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-IEM7O4PW',
    review: 'I have acquired a strong foundation in SQL, delving into its fundamental concepts, mastering various clauses, exploring advanced join techniques, and honing my skills in effectively organizing and managing databases.'
  },
  {
    avatar: AVTR6,
    name: 'Web Development Fundamentals -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-DJYHJW1T',
    review: 'I gained expertise in HTML, mastering its elements, including form implementation. Additionally, I explored CSS concepts such as selectors and positioning, and delved into JavaScript for event handling, enhancing my ability to create dynamic and interactive web experiences.'
  },
  {
    avatar: AVTR8,
    name: 'PHP -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-HTYUOTI9',
    review: 'I extensively covered React concepts such as components, props, life cycle methods, event handling, and various types of hooks. Furthermore, I acquired a strong understanding of Redux, including state management, actions, and reducers, empowering me to build scalable and efficient web applications.'
  },
  {
    avatar: AVTR9,
    name: 'Android Application Development -GreatLearning',
    link: 'https://verify.mygreatlearning.com/verify/ORHVVVUH',
    review: 'In Android app development, I gained proficiency in using Android Studio and Kotlin, and I learned essential concepts such as Intents, Activities, Jetpack Compose, List & Recycler View, and other fundamental components, enabling me to create feature-rich and user-friendly mobile applications.'
  },
  {
    avatar: AVTR10,
    name: 'C++ -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-JIT6PKKG',
    review: 'In C++, I acquired knowledge of its fundamentals, including functions, loops, and more. I also grasped object-oriented programming concepts like inheritance, polymorphism, and honed my problem-solving skills, enabling me to build efficient and modular applications.'
  },
  {
    avatar: AVTR11,
    name: 'Python -Kaggle',
    link: 'https://www.kaggle.com/learn/certification/orionadi/python',
    review: 'In Python, I learned its fundamentals like data types, loops, and functions. Additionally, I explored object-oriented programming principles such as inheritance, polymorphism, and encapsulation. I also developed proficiency in problem-solving and algorithmic thinking, enabling me to create robust and scalable applications.'
  },
  {
    avatar: AVTR12,
    name: 'Phython Data Structures -SoloLearn',
    link: 'https://www.sololearn.com/certificates/CT-EVIS7SG7',
    review: 'I have honed my problem-solving skills in Data Structures and Algorithms using Python. Through this learning journey, I gained a deep understanding of Python\'s capabilities in solving complex challenges efficiently.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Certified from Platforms</h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      >
        {
        data.map(({avatar,name,review,link},index)=>{
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" className='fit'/>
              </div>
              <h5 className='client__name'><a href={link} target='_blank'>{name}</a></h5>
              <small className='client__review'>
                  {review}
              </small>
            </SwiperSlide>
          )
        })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials