import { useEffect, useState } from 'react'
import { House, BriefcaseBusiness, Layers3, Wrench, UserRound, Mail, Menu, X, BadgeCheck } from 'lucide-react'
import { SiFacebook, SiInstagram, SiTiktok } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa6'
const links = [['home','Home',House],['projects','Projects',BriefcaseBusiness],['services','Services',Layers3],['tools','Tools',Wrench],['about','About',UserRound],['contact','Contact',Mail]]
export default function Sidebar() {
  const [active,setActive]=useState('home'); const [open,setOpen]=useState(false)
  useEffect(()=>{
    const syncHash=()=>setActive(window.location.hash.slice(1)||'home')
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)
      const current=visible[0]
      if(current)setActive(current.target.id)
    },{rootMargin:'-15% 0px -70% 0px',threshold:0})
    links.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el)})
    syncHash();window.addEventListener('hashchange',syncHash)
    return()=>{observer.disconnect();window.removeEventListener('hashchange',syncHash)}
  },[])
  const closeMenu=()=>setOpen(false)
  const hrefFor=id=>'/#'+id
  return <><header className="mobile-bar"><a className="mobile-brand" href="/#home" onClick={closeMenu}>JLL<span>.</span></a><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></header>{open&&<button className="mobile-scrim" aria-label="Close navigation" onClick={closeMenu}/>}<aside className={'sidebar '+(open?'sidebar-open':'')}><button className="sidebar-close" onClick={closeMenu} aria-label="Close navigation"><X size={20}/></button><div className="identity"><div className="avatar" aria-label="Profile image"><img src="/profile.jpg" alt="John Lloyd Laxamana"/><span>JL</span><i/></div><h2 className="identity-name">John Lloyd Laxamana<BadgeCheck className="verified-badge" size={18} aria-label="Verified"/></h2><p>yourva.jl@gmail.com</p><div className="socials"><a href="https://www.facebook.com/share/1JhS4F1WfM/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><SiFacebook/></a><a href="https://www.linkedin.com/in/yourvajl?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn/></a><a href="https://www.instagram.com/engineerjl_?stkn=cTJobmkzemQzdG9s&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SiInstagram/></a><a href="https://www.tiktok.com/@engineerjl_?_r=1&_t=ZS-9ALvDGrfYBR" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><SiTiktok/></a><a href="mailto:yourva.jl@gmail.com" aria-label="Email"><Mail/></a></div></div><div className="side-rule"/><nav aria-label="Main navigation">{links.map(([id,label,Icon])=><a key={id} href={hrefFor(id)} onClick={closeMenu} aria-current={active===id?'page':undefined} className={'nav-link '+(active===id?'active':'')}><Icon size={17} strokeWidth={1.8}/><span>{label}</span></a>)}</nav><div className="side-bottom"><div className="side-rule"/><p>© 2026 John Lloyd Laxamana<br/>All rights reserved.</p></div></aside></>
}
