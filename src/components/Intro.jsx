import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { tools } from '../data/tools'
import BrandLogo from './BrandLogo'

const fall = [
  {x:'14%',y:'26%',r:'-12deg',d:'-12vh',z:2}, {x:'34%',y:'17%',r:'9deg',d:'-30vh',z:4},
  {x:'57%',y:'20%',r:'-8deg',d:'-18vh',z:5}, {x:'83%',y:'26%',r:'12deg',d:'-38vh',z:3},
  {x:'91%',y:'48%',r:'-7deg',d:'-25vh',z:7}, {x:'76%',y:'78%',r:'10deg',d:'-34vh',z:2},
  {x:'51%',y:'83%',r:'-10deg',d:'-16vh',z:6}, {x:'25%',y:'77%',r:'8deg',d:'-40vh',z:3},
  {x:'9%',y:'53%',r:'-9deg',d:'-28vh',z:5}, {x:'91%',y:'72%',r:'11deg',d:'-21vh',z:4},
]

export default function Intro(){
  const[visible,setVisible]=useState(()=>!sessionStorage.getItem('yourvajl-intro-seen'))
  const[leaving,setLeaving]=useState(false)
  useEffect(()=>{
    if(!visible)return
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.body.classList.add('intro-open')
    const dismiss=()=>{
      sessionStorage.setItem('yourvajl-intro-seen','1')
      setLeaving(true)
      window.setTimeout(()=>{setVisible(false);document.body.classList.remove('intro-open')},550)
    }
    const timer=window.setTimeout(dismiss,reduced?2300:9200)
    return()=>{window.clearTimeout(timer);document.body.classList.remove('intro-open')}
  },[visible])
  if(!visible)return null
  return <div className={'intro-screen '+(leaving?'intro-leaving':'')} role="dialog" aria-modal="true" aria-label="yourvajl brand introduction">
    <div className="intro-ambient ambient-a"/><div className="intro-ambient ambient-b"/>
    <div className="intro-camera"><div className="intro-wordmark-wrap"><div className="intro-wordmark">yourvajl</div><div className="intro-subtitle">SOCIAL MEDIA <i/> ADMIN SUPPORT <i/> CUSTOMER SUPPORT <i/> SHOPIFY</div></div>
      <div className="intro-logo-field">{tools.map((tool,i)=>{const p=fall[i];return <div key={tool.name} className="intro-drop" style={{'--x':p.x,'--y':p.y,'--drop':p.d,'--turn':p.r,'--depth':p.z,'--delay':(i*.31)+'s'}}><div className="intro-object"><BrandLogo brand={tool.brand} className="intro-brand-logo"/><span className="intro-tool-name">{tool.name}</span></div></div>})}</div>
    </div>
    <div className="intro-brand-corner"><span className="intro-brand-dot"/> YOURVAJL <i/> DIGITAL SUPPORT</div>
    <button className="intro-skip" onClick={()=>{sessionStorage.setItem('yourvajl-intro-seen','1');setLeaving(true);window.setTimeout(()=>{setVisible(false);document.body.classList.remove('intro-open')},550)}}>Skip intro <ArrowUpRight size={14}/></button>
    <div className="intro-progress"><i/></div>
    <div className="intro-scroll-hint">WELCOME TO YOURVAJL <ArrowDown size={13}/></div>
  </div>
}
