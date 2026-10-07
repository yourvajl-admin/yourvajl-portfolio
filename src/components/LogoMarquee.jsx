import { tools } from '../data/tools'
import BrandLogo from './BrandLogo'

function LogoSet({ duplicate = false }) {
  return <div className="logo-marquee-set" aria-hidden={duplicate || undefined}>
    {tools.map(tool => <span className="marquee-brand" key={tool.brand + (duplicate ? '-copy' : '')}><BrandLogo brand={tool.brand}/><b>{tool.name}</b></span>)}
  </div>
}

export default function LogoMarquee({ compact = false }) {
  return <div className={'logo-marquee ' + (compact ? 'logo-marquee-compact' : '')} aria-label="Canva, Meta Business Suite, Slack, Gmail, Google Docs, Google Sheets, Facebook, TikTok, Instagram, and Shopify">
    <div className="logo-marquee-track"><LogoSet/><LogoSet duplicate/></div>
  </div>
}
