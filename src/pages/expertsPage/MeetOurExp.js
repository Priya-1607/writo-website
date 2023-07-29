import React, { useLayoutEffect } from 'react'
import './MeetOurExp.css'
import { data } from './ExpertsData'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

function MeetOurExp() {
    useLayoutEffect(()=>{
        let tl = gsap.timeline();
        tl.fromTo(".expert_card",
        {yPercent:100,opacity:0},
        {yPercent:0,duration:1,opacity:1,stagger:0.25,ease: "power1.inOut"}
        )
    })
    return (
        <div className='moe_page xl:px-36 py-24'>
            <div className='expert_heading' >
                <h1 className='lg:w-6/12 text-4xl font-bold'>Meet Our Experts</h1>
                <p className='lg:w-6/12 text-base lg:px-14 expert_heading-text'>BAOIAM students get mentored by the industry experts who have achieved mastery in their respective domains & are passionate about helping
                    students achieve their dreams.</p>
            </div>
            <div className='experts_container my-10 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth'>
                {data.map((item, id) => (
                    <div className='expert_card inline-block mx-10 '>
                        <img className='expert_image' src={item.img} alt=''></img>
                        <h1 className='sm:text-base lg:text-xl font-bold text-center expert_name py-0.5'>{item.name}</h1>
                        <p className='lg:text-lg text-center expert_profile'>{item.profile}</p>
                        <div className='social_links py-4'>
                            <img src={linkedin} alt=''></img>
                            <img src={twitter} alt=''></img>
                            <img src={instagram} alt=''></img>
                        </div>
                        <p>
                        </p>
                    </div>

                    
                ))}
            </div>
        </div>
    )
}

export default MeetOurExp